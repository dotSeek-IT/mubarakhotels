"use client";

import { DIRECTIONS_URL } from "@/components/location/Location";
import { emailFormHandler } from "@/components/utils/emailForm";

const onSend = emailFormHandler("Website enquiry", {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
});

export default function Contact() {
  return (
    <section id="contact" className="contact section light-background">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Get in touch</span>
        <h2>Contact us</h2>
        <p>
          Questions about reservations, events or catering? Send us a message
          and our team will get back to you.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          <div className="col-lg-4">
            <aside className="contact-aside">
              <h3>Talk to us</h3>
              <ul>
                <ContactLine icon="bi-telephone" label="Call">
                  <a href="tel:+917373750999">+91 73737 50999</a>
                  <br />
                  <a href="tel:+914651272545">04651 272545</a>
                </ContactLine>
                <ContactLine icon="bi-envelope" label="Email">
                  <a href="mailto:mubarakhotels@yahoo.co.in">
                    mubarakhotels@yahoo.co.in
                  </a>
                </ContactLine>
                <ContactLine icon="bi-geo-alt" label="Visit">
                  Main Road, Marthandam
                  <br />
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get directions <i className="bi bi-arrow-up-right"></i>
                  </a>
                </ContactLine>
                <ContactLine icon="bi-clock" label="Hours">
                  Every day, 8:00 AM – 11:00 PM
                </ContactLine>
              </ul>
            </aside>
          </div>

          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form className="php-email-form" onSubmit={onSend}>
                <div className="row g-3">
                  <FormInput
                    name="name"
                    type="text"
                    icon="bi-person"
                    label="Full name"
                  />
                  <FormInput
                    name="email"
                    type="email"
                    icon="bi-envelope"
                    label="Email address"
                  />
                  <FormInput
                    name="subject"
                    type="text"
                    icon="bi-text-left"
                    label="Subject"
                    full
                  />
                  <div className="col-12">
                    <label className="visually-hidden" htmlFor="contact-message">
                      Message
                    </label>
                    <div className="input-with-icon">
                      <i className="bi bi-chat-dots message-icon"></i>
                      <textarea
                        id="contact-message"
                        className="form-control"
                        name="message"
                        placeholder="Write your message…"
                        rows={6}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your email app has opened with your message. Press send
                      and we&apos;ll reply soon.
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn-mb">
                      Send message <i className="bi bi-send"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon, label, children }) {
  return (
    <li>
      <span className="contact-icon" aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </span>
      <div>
        <span className="contact-label">{label}</span>
        <p>{children}</p>
      </div>
    </li>
  );
}

function FormInput({ name, type, icon, label, full = false }) {
  const id = `contact-${name}`;
  return (
    <div className={full ? "col-12" : "col-md-6"}>
      <label className="visually-hidden" htmlFor={id}>
        {label}
      </label>
      <div className="input-with-icon">
        <i className={`bi ${icon}`}></i>
        <input
          id={id}
          type={type}
          className="form-control"
          name={name}
          placeholder={label}
          required
        />
      </div>
    </div>
  );
}
