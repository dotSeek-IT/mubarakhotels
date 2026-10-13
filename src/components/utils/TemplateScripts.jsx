"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function TemplateScripts() {
  useEffect(() => {
    // Initialize AOS safely
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });

    (async () => {
      // Dynamically import DOM-dependent libraries
      const { default: Swiper } = await import("swiper");
      const { default: GLightbox } = await import("glightbox");
      const { default: Isotope } = await import("isotope-layout");
      const imagesLoaded = (await import("imagesloaded")).default;

      // ===== Scroll Scrolled Toggle =====
      const body = document.body;
      const header = document.querySelector("#header");
      const toggleScrolled = () => {
        if (!header) return;
        if (
          !header.classList.contains("scroll-up-sticky") &&
          !header.classList.contains("sticky-top") &&
          !header.classList.contains("fixed-top")
        )
          return;
        window.scrollY > 100
          ? body.classList.add("scrolled")
          : body.classList.remove("scrolled");
      };
      window.addEventListener("scroll", toggleScrolled);
      toggleScrolled();

      // ===== Mobile Nav Toggle =====
      const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
      const mobileNavToggle = () => {
        const open = body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn?.classList.toggle("bi-list");
        mobileNavToggleBtn?.classList.toggle("bi-x");
        mobileNavToggleBtn?.setAttribute(
          "aria-label",
          open ? "Close menu" : "Open menu"
        );
      };
      mobileNavToggleBtn?.addEventListener("click", mobileNavToggle);
      mobileNavToggleBtn?.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          mobileNavToggle();
        }
        if (e.key === "Escape" && body.classList.contains("mobile-nav-active"))
          mobileNavToggle();
      });

      // Close mobile nav on link click
      document.querySelectorAll("#navmenu a").forEach((link) =>
        link.addEventListener("click", () => {
          if (body.classList.contains("mobile-nav-active")) mobileNavToggle();
        })
      );

      // ===== Scroll-to-top button =====
      const scrollTop = document.querySelector(".scroll-top");
      const toggleScrollTop = () => {
        if (scrollTop) {
          window.scrollY > 100
            ? scrollTop.classList.add("active")
            : scrollTop.classList.remove("active");
        }
      };
      scrollTop?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      window.addEventListener("scroll", toggleScrollTop);
      toggleScrollTop();

      // ===== In-page anchor links =====
      // Always scroll to the target, even when the URL hash is unchanged.
      document.querySelectorAll("a[href^='#']").forEach((link) =>
        link.addEventListener("click", (e) => {
          const hash = link.getAttribute("href");
          if (hash.length < 2) return;
          const target = document.querySelector(hash);
          if (!target) return;
          e.preventDefault();
          if (hash === "#hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            target.scrollIntoView({ behavior: "smooth" });
          }
          history.replaceState(null, "", hash);
        })
      );

      // ===== Navmenu Scrollspy =====
      const navLinks = document.querySelectorAll(
        "#navmenu > ul > li > a[href^='#']:not(.btn-mb)"
      );
      const navmenuScrollspy = () => {
        const position = window.scrollY + 200;
        navLinks.forEach((link) => {
          const section = document.querySelector(link.hash);
          if (!section) return;
          const inView =
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight;
          link.classList.toggle("active", inView);
        });
      };
      window.addEventListener("load", navmenuScrollspy);
      document.addEventListener("scroll", navmenuScrollspy);
      navmenuScrollspy();

      // ===== Preloader =====
      const preloader = document.querySelector("#preloader");
      if (preloader) window.addEventListener("load", () => preloader.remove());

      // ===== Isotope =====
      document.querySelectorAll(".isotope-layout").forEach((el) => {
        const layout = el.getAttribute("data-layout") ?? "masonry";
        const filter = el.getAttribute("data-default-filter") ?? "*";
        const sort = el.getAttribute("data-sort") ?? "original-order";

        let iso;
        imagesLoaded(el.querySelector(".isotope-container"), () => {
          iso = new Isotope(el.querySelector(".isotope-container"), {
            itemSelector: ".isotope-item",
            layoutMode: layout,
            filter,
            sortBy: sort,
          });
        });

        el.querySelectorAll(".isotope-filters li").forEach((f) =>
          f.addEventListener("click", function () {
            el.querySelector(".filter-active")?.classList.remove(
              "filter-active"
            );
            this.classList.add("filter-active");
            iso.arrange({ filter: this.getAttribute("data-filter") });
            AOS.refresh();
          })
        );
      });

      // ===== Swiper =====
      document.querySelectorAll(".init-swiper").forEach((swiperEl) => {
        const configEl = swiperEl.querySelector(".swiper-config");
        if (!configEl) return;
        const config = JSON.parse(configEl.innerHTML.trim());
        new Swiper(swiperEl, config);
      });

      // ===== GLightbox =====
      GLightbox({ selector: ".glightbox" });
    })();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", () => {});
      // Optionally remove other listeners if needed
    };
  }, []);

  return null;
}
