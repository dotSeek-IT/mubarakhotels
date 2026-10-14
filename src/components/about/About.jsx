"use client";

export default function About({ asPage = false }) {
  // On its own page this section holds the page <h1>.
  const Heading = asPage ? "h1" : "h2";

  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Our story</span>
        <Heading>Welcome to Mubarak Hotel</Heading>
        <p>
          Discover comfort, fine dining, and hospitality at the heart of
          Marthandam, Kanyakumari
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="about-content">
              <h2>Culinary excellence and comfort</h2>
              <p className="fst-italic">
                Hotel Mubarak is renowned for its multi-cuisine restaurant
                offering South Indian, Chinese, and special Arabic halal dishes,
                all crafted with the finest ingredients and care.
              </p>
              <p>
                Our hotel also offers luxurious room bookings and well-organized
                spaces for parties, events, and celebrations. Guests enjoy warm
                hospitality, exceptional service, and an unforgettable
                experience in Marthandam.
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <i className="bi bi-award"></i>
                    <h4>Exquisite Dining</h4>
                    <p>
                      Savor a wide range of dishes from South Indian specialties
                      to authentic Arabic halal cuisine.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-trophy"></i>
                    <h4>Events & Celebrations</h4>
                    <p>
                      Host memorable parties and events in our beautifully
                      designed spaces with impeccable service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="about-gallery">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="/assets/img/showcase-1.jpg"
                    className="img-fluid rounded"
                    alt="Hotel Mubarak Dining"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="/assets/img/showcase-3.jpg"
                    className="img-fluid rounded"
                    alt="Hotel Mubarak Restaurant"
                  />
                </div>
                <div className="col-12 mt-3">
                  <div className="years-badge">
                    <span className="number">20+</span>
                    <span className="text">Years of Excellence</span>
                  </div>
                  <img
                    src="/assets/img/showcase-4.jpg"
                    className="img-fluid rounded"
                    alt="Hotel Mubarak Rooms"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
