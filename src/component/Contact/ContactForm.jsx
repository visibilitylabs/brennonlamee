import React from 'react';
import './Contact.css';
import Link from 'next/link';

const ContactForm = ({ heading }) => {
  return (
    <div className="contact-form-container">
      <div className="contact-us-container">
        <div className="contact-left-container">
          <h1>{heading}</h1>
          <p className="para">
            Click the link below to directly connect with us, or send your
            details to us. We will reach out to you ASAP.
          </p>
          <Link href={'https://calendly.com/carlitashaw75/1-on-1-meeting'} className="bookcallbutton">
            Book a Call with Us{' '}
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66663 5.84033L8.33329 10.3403L1.66663 14.8403"
                stroke="#F1F1F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="contact-right-container">
          <div className="contact-tile">
            <div className="text-input">
              <label htmlFor="firstname">First name*</label>
              <input type="text" id="firstname" />
            </div>
            <div className="text-input">
              <label htmlFor="lastname">Last name*</label>
              <input type="text" id="lastname" />
            </div>
          </div>

          <div className="contact-tile">
            <div className="text-input">
              <label htmlFor="email">Email*</label>
              <input type="text" id="email" />
            </div>
          </div>
          <div className="contact-tile">
            <div className="text-input">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" />
            </div>
          </div>
          <div className="contact-tile">
            <div className="text-input">
              <label htmlFor="message">Website</label>
              <input type="text" id="message" />
            </div>
          </div>

          <div className="contact-tile">
            <div className="text-input">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
