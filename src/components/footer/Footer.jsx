"use client";

import { DIRECTIONS_URL } from "@/components/location/Location";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Book a table", href: "#book-a-table" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-5 footer-main">
          <div className="col-lg-4">
            <a href="#hero" className="footer-brand">
              <img src="assets/img/mubarak_logo.png" alt="Mubarak Hotel logo" />
              <span>Mubarak Family Restaurant</span>
            </a>
            <p className="footer-about">
              Multi-cuisine family dining in Marthandam, Kanyakumari: South
              Indian, Kerala, Chinese and Arabian dishes, all halal. Rooms and
              event spaces available.
            </p>
            <div className="footer-tags">
              <span>
                <i className="bi bi-patch-check"></i> 100% halal
              </span>
              <span>
                <i className="bi bi-people"></i> Family dining
              </span>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h4>Explore</h4>
            <ul className="footer-links">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-telephone"></i>
                <a href="tel:+914651270999">+91 4651 270 999</a>
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                <a href="mailto:mubarakhotels@yahoo.co.in">
                  mubarakhotels@yahoo.co.in
                </a>
              </li>
              <li>
                <i className="bi bi-geo-alt"></i>
                <span>
                  2-76-A2, Safiya Complex, Main Road, Marthandam, Tamil Nadu
                  629165
                </span>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h4>Opening hours</h4>
            <div className="footer-hours">
              <span>Monday – Sunday</span>
              <strong>8:00 AM – 11:00 PM</strong>
            </div>
            <a
              href={DIRECTIONS_URL}
              className="footer-directions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-signpost-2"></i> Get directions
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Mubarak Family Restaurant. All rights
            reserved.
          </p>
          <p className="credits">
            Designed by{" "}
            <a
              href="https://dotseek.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DotSeek
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
