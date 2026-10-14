"use client";

export default function Header() {
  return (
    <header id="header" className="header fixed-top">
      {/* Top Bar */}
      <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-center justify-content-md-start">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:mubarakhotels@yahoo.co.in">
                mubarakhotels@yahoo.co.in
              </a>
            </i>
            <i className="bi bi-clock d-flex align-items-center ms-4">
              <span>
                <span className="d-none d-sm-inline">Open daily, </span>8 AM
                – 11 PM
              </span>
            </i>
          </div>
        </div>
      </div>
      {/* End Top Bar */}

      {/* Branding & Navigation */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="#hero" className="logo d-flex align-items-center">
            <img src="assets/img/mubarak_logo.png" alt="Mubarak Hotel Logo" />
          </a>

          {/* Phone: number on desktop, icon button beside the menu toggle on phones */}
          <a
            href="tel:+917373750999"
            className="header-phone"
            aria-label="Call +91 73737 50999"
          >
            <i className="bi bi-telephone"></i>
            <span className="header-phone-text">
              <small>Call to reserve</small>
              +91 73737 50999
            </span>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#book-a-table">Book a table</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              {/* Phone menu only: actions at the bottom of the panel */}
              <li className="nav-actions d-xl-none">
                <a href="tel:+917373750999" className="btn-mb btn-mb-outline">
                  <i className="bi bi-telephone"></i> Call us
                </a>
              </li>
            </ul>
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              role="button"
              tabIndex={0}
              aria-label="Open menu"
            ></i>
          </nav>
        </div>
      </div>
    </header>
  );
}
