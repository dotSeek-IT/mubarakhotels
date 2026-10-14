"use client";

export default function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      {/* Hero Background Video */}
      <div className="hero-background">
        <video autoPlay muted loop playsInline>
          <source src="assets/img/video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="container hero-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-10 col-xl-8">
            <div className="hero-text" data-aos="fade-up" data-aos-delay="100">
              <span className="hero-script">Welcome to Mubarak</span>
              <h1 className="hero-title">
                Comfort food &amp; <em>culinary delight</em>
              </h1>
              <p className="hero-description">
                Family dining in the heart of Marthandam: South Indian, Kerala,
                Chinese and Arabian favourites, all halal and cooked fresh.
              </p>

              <ul className="hero-badges" aria-label="Highlights">
                <li>
                  <i className="bi bi-patch-check"></i> 100% halal
                </li>
                <li>
                  <i className="bi bi-people"></i> Family dining
                </li>
                <li>
                  <i className="bi bi-building"></i> Rooms &amp; events
                </li>
              </ul>

              <div
                className="hero-actions btn-group-mb"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="#book-a-table" className="btn-mb">
                  <i className="bi bi-calendar-check"></i> Book a table
                </a>
                <a href="#menu" className="btn-mb btn-mb-outline">
                  View menu <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <ul
                className="hero-features"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <li>
                  <i className="bi bi-clock"></i>
                  <span>
                    <small>Open daily</small>8:00 AM – 11:00 PM
                  </span>
                </li>
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <span>
                    <small>Location</small>Marthandam, Kanyakumari
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                  <span>
                    <small>Reservations</small>
                    <a href="tel:+917373750999">+91 73737 50999</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="scroll-indicator d-none d-md-block"
        aria-label="Scroll to the next section"
      >
        <div className="scroll-text">Scroll</div>
        <div className="scroll-arrow">
          <i className="bi bi-chevron-down"></i>
        </div>
      </a>
    </section>
  );
}
