"use client";

import { useEffect, useState } from "react";

// Floating pill bar (Nique style): quick links + primary "Book a table" action.
// Appears once the visitor scrolls past the hero; hidden while the booking
// section itself is on screen so the action is never shown twice.
export default function FloatingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      const booking = document.getElementById("book-a-table");
      const pastHero = hero
        ? hero.getBoundingClientRect().bottom < 120
        : window.scrollY > 400;
      let onBooking = false;
      if (booking) {
        const r = booking.getBoundingClientRect();
        onBooking = r.top < window.innerHeight * 0.6 && r.bottom > 120;
      }
      setVisible(pastHero && !onBooking);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      className={`floating-bar ${visible ? "is-visible" : ""}`}
      aria-label="Quick actions"
      aria-hidden={!visible}
    >
      <a
        href="tel:+914651270999"
        className="floating-bar-icon"
        aria-label="Call the restaurant"
        tabIndex={visible ? 0 : -1}
      >
        <i className="bi bi-telephone"></i>
      </a>
      <a
        href="#contact"
        className="floating-bar-icon"
        aria-label="Find us"
        tabIndex={visible ? 0 : -1}
      >
        <i className="bi bi-geo-alt"></i>
      </a>
      <span className="floating-bar-divider" aria-hidden="true"></span>
      <a
        href="#menu"
        className="floating-bar-link"
        tabIndex={visible ? 0 : -1}
      >
        Menu
      </a>
      <a
        href="#events"
        className="floating-bar-link d-none d-sm-inline-flex"
        tabIndex={visible ? 0 : -1}
      >
        Events
      </a>
      <a
        href="#book-a-table"
        className="floating-bar-cta"
        tabIndex={visible ? 0 : -1}
      >
        Book a table
      </a>
    </nav>
  );
}
