'use client';

import './Contact.css';

const Contact = () => {
  const toggle = e => {
    e.target.classList.toggle('show_description');
  };

  return (
    <div className="contact-container">
      <div className="get-touch-container">
        <h1>Get in Touch with Us</h1>
      </div>

      <div className="contact-form-container">
        <div className="contact-us-container">
          <div className="contact-left-container">
            <h1>Contact Us</h1>
            <p className="para">
              Click the link below to directly connect with us, or send your
              details to us. We will reach out to you ASAP.
            </p>
            <div className="bookcallbutton">
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
            </div>
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
                <label htmlFor="phone">Phone*</label>
                <input type="text" id="phone" />
              </div>
            </div>
            <div className="contact-tile">
              <div className="text-input">
                <label htmlFor="message">Website*</label>
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

      <div className="faq">
        <div className="faq-inner-container">
          <div className="left-faq">
            <span>FAQ{"'"}S</span>
            <h1>
              Frequently Asked <br /> <span>Questions</span>
            </h1>
          </div>
          <div className="right-faq">
            <div
              className="faq-tile"
              onMouseEnter={toggle}
              onMouseLeave={toggle}
            >
              <div>
                <h1>How do I get started? </h1>{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="10"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              <p className="para">
                Click the link below to directly connect with us, or send your
                details to us. We will reach out to you ASAP.
              </p>
            </div>
            <div
              className="faq-tile"
              onMouseEnter={toggle}
              onMouseLeave={toggle}
            >
              <div>
                <h1>How do I get started? </h1>{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="10"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              <p className="para">
                Click the link below to directly connect with us, or send your
                details to us. We will reach out to you ASAP.
              </p>
            </div>
            <div
              className="faq-tile"
              onMouseEnter={toggle}
              onMouseLeave={toggle}
            >
              <div>
                <h1>How do I get started? </h1>{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="10"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              <p className="para">
                Click the link below to directly connect with us, or send your
                details to us. We will reach out to you ASAP.
              </p>
            </div>
            <div
              className="faq-tile"
              onMouseEnter={toggle}
              onMouseLeave={toggle}
            >
              <div>
                <h1>How do I get started? </h1>{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="10"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              <p className="para">
                Click the link below to directly connect with us, or send your
                details to us. We will reach out to you ASAP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
