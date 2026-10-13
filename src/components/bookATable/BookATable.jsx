"use client";

import { emailFormHandler } from "@/components/utils/emailForm";

const onReserve = emailFormHandler("Table reservation request", {
  name: "Name",
  phone: "Phone",
  email: "Email",
  date: "Date",
  time: "Time",
  people: "Guests",
  occasion: "Occasion",
  message: "Special requests",
});

export default function BookATable() {
  return (
    <section
      id="book-a-table"
      className="book-a-table section light-background"
    >
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Reservations</span>
        <h2>Book a table</h2>
        <p>
          Reserve a table for family dinners, celebrations or business meals.
          We&apos;ll confirm your booking by phone.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-12">
            <div className="reservation-container">
              <div className="row g-0">
                {/* Reservation Form */}
                <div
                  className="col-lg-5"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="reservation-form-section">
                    <div className="form-header text-center">
                      <h3>Your booking</h3>
                    </div>

                    <form className="php-email-form" onSubmit={onReserve}>
                      <div className="row gy-3">
                        <div className="col-12">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Full name"
                            aria-label="Full name"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email address"
                            aria-label="Email address"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            placeholder="Phone number"
                            aria-label="Phone number"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="date"
                            name="date"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="time"
                            name="time"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <select
                            name="people"
                            className="form-select"
                            required
                          >
                            <option value="">Guests</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6+ Guests</option>
                          </select>
                        </div>
                        <div className="col-6">
                          <select name="occasion" className="form-select">
                            <option value="">Occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="party">Party/Event</option>
                            <option value="business">Business Dinner</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            name="message"
                            rows="3"
                            placeholder="Special requests or dietary requirements"
                          ></textarea>
                        </div>
                      </div>

                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your email app has opened with your booking. Press
                          send and we&apos;ll call to confirm.
                        </div>
                      </div>

                      <button type="submit" className="btn-mb w-100">
                        <i className="bi bi-calendar-check"></i>
                        Reserve table
                      </button>
                    </form>
                  </div>
                </div>

                {/* Reservation Info / Image */}
                <div
                  className="col-lg-7"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="reservation-info-section">
                    <div className="hero-image">
                      <img
                        src="assets/img/showcase-5.jpg"
                        alt="Hotel Mubarak dining area"
                        className="img-fluid"
                      />
                      <div className="overlay-content">
                        <h4>Fine dining &amp; events</h4>
                        <p>
                          Delight in a wide variety of cuisines, enjoy outdoor
                          seating, and host parties or events in our comfortable
                          spaces.
                        </p>
                      </div>
                    </div>

                    <ul className="booking-tips">
                      <BookingTip icon="bi-calendar-week" title="Plan ahead">
                        Book 2–3 days in advance, especially for weekend dining
                        and events.
                      </BookingTip>
                      <BookingTip icon="bi-chat-heart" title="Tell us more">
                        Add the occasion or any dietary needs in the form and
                        we&apos;ll be ready for you.
                      </BookingTip>
                      <BookingTip icon="bi-telephone" title="Prefer to call?">
                        <a href="tel:+914651270999">+91 4651 270 999</a>, every
                        day from 8:00 AM to 11:00 PM.
                      </BookingTip>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingTip({ icon, title, children }) {
  return (
    <li>
      <span className="booking-tip-icon" aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </span>
      <div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </li>
  );
}
