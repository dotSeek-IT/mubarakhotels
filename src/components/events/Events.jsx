"use client";

export default function Events() {
  return (
    <section id="events" className="events section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="description-title">Celebrate</span>
          <h2>Events & parties</h2>
          <p>
            Celebrate your special moments at Mubarak Family Restaurant,
            Marthandam. We host private parties, corporate events, and festive
            gatherings with exceptional dining.
          </p>
        </div>

        {/* Hero Event */}
        <div className="row">
          <div
            className="col-lg-8 mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="seasonal-hero">
              <span className="seasonal-badge">Private events</span>
              <h2>Host your event with us</h2>
              <p>
                From intimate celebrations to large parties, Mubarak Family
                Restaurant provides versatile spaces and a curated menu
                featuring South Indian, Chinese, and special Arabic halal
                dishes.
              </p>
              <div className="btn-group-mb justify-content-center">
                <a href="#book-a-table" className="btn-mb">
                  <i className="bi bi-calendar-event"></i> Book now
                </a>
                <a href="tel:+914651270999" className="btn-mb btn-mb-outline">
                  <i className="bi bi-telephone"></i> Call to plan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay="200">
          <FeatureCard
            delay={250}
            imgSrc="assets/img/showcase-1.jpg"
            badgeIcon="bi-star-fill"
            badgeText="Banquet Hall"
            title="Elegant banquet spaces"
            description="Spacious and beautifully decorated halls suitable for weddings, parties, and corporate events."
            highlights={[
              "Indoor & Outdoor Options",
              "Customizable Seating Arrangements",
            ]}
            animation="slide-right"
          />
          <FeatureCard
            delay={300}
            imgSrc="assets/img/showcase-2.jpg"
            badgeIcon="bi-award-fill"
            badgeText="Catering"
            title="Gourmet catering"
            description="Enjoy a wide selection of cuisines prepared with fresh ingredients, including South Indian, Chinese, and Arabic halal specialties."
            highlights={["Multi-Cuisine Menu", "Personalized Menus"]}
            linkText="View menu"
            linkHref="#menu"
            animation="slide-left"
          />
        </div>
      </div>
    </section>
  );
}

// FeatureCard Component
function FeatureCard({
  imgSrc,
  badgeIcon,
  badgeText,
  title,
  description,
  highlights,
  linkText,
  linkHref,
  animation,
  delay,
}) {
  return (
    <div className="col-lg-6" data-aos={animation} data-aos-delay={delay}>
      <div
        className={`feature-card ${
          animation === "slide-right" ? "primary" : "secondary"
        }`}
      >
        <div className="feature-visual">
          <img src={imgSrc} alt={title} className="img-fluid" />
          <div className="feature-badge">
            <i className={`bi ${badgeIcon}`}></i>
            <span>{badgeText}</span>
          </div>
        </div>
        <div className="feature-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="feature-highlights">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
          {linkHref && (
            <a href={linkHref} className="feature-link">
              {linkText} <i className="bi bi-arrow-right"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
