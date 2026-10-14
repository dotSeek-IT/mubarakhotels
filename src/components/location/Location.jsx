"use client";

// Centred on the "Hotel Mubarak" Google Maps listing (8.3065462, 77.2239003).
const MAP_EMBED =
  "https://maps.google.com/maps?q=Hotel+Mubarak,+Marthandam&ll=8.3065462,77.2239003&z=17&output=embed";
export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Hotel+Mubarak+Marthandam";

export default function Location() {
  return (
    <section id="location" className="location section dark-background">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Visit us</span>
        <h2>Find us in Marthandam</h2>
        <p>On Main Road in Safiya Complex, open every day of the week.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="location-map">
              <iframe
                src={MAP_EMBED}
                title="Map showing Mubarak Hotel, Marthandam"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="location-card">
              <ul className="location-list">
                <LocationItem icon="bi-geo-alt" title="Address">
                  2-76-A2, Safiya Complex, Main Road,
                  <br />
                  Marthandam, KK District, Tamil Nadu 629165
                </LocationItem>
                <LocationItem icon="bi-telephone" title="Reservations">
                  <a href="tel:+917373750999">+91 73737 50999</a>
                  <br />
                  <a href="tel:+914651272545">04651 272545</a>
                  <small>Book 48 hours ahead for parties and weekends.</small>
                </LocationItem>
                <LocationItem icon="bi-clock" title="Opening hours">
                  Monday – Sunday, 8:00 AM – 11:00 PM
                </LocationItem>
              </ul>

              <div className="btn-group-mb">
                <a
                  href={DIRECTIONS_URL}
                  className="btn-mb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-signpost-2"></i> Get directions
                </a>
                <a href="tel:+917373750999" className="btn-mb btn-mb-outline">
                  <i className="bi bi-telephone"></i> Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationItem({ icon, title, children }) {
  return (
    <li>
      <span className="location-icon" aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </li>
  );
}
