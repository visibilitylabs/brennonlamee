import './Footer.css';

const Footer = () => {
  return (<div className="footer">
    <div className="div-footer-wrapper">
      <div className="div-footer-top">
        <div className="div-footer-logo">
          <div className="link-9">
            <div className="overlap-group-9">
              <img src="/static/images/logo.png" height={250} />
            </div>
          </div>
          <p className="text-wrapper-32">Unlock your Website’s full Potential with CRO PROS</p>
        </div>
      </div>
      <div className="div-footer-divider" />
      <div className="overlap-12">
        <div className="div-footer-links">
          <div className="div-w-node">
            <div className="resources">RESOURCES</div>
            <div className="link-blog">About</div>
            <div className="link-case-studies">Testimonials</div>
            <div className="link-help-centre">Contact</div>
          </div>
          <div className="div-w-node-b">
            <div className="get-in-touch">GET IN TOUCH</div>
            <div className="link-email">Email</div>
            <div className="link-linkedin">Phone</div>
            <div className="link-twitter">Pinterest</div>
            <div className="link-youtube">Facebook</div>
            <div className="link-instagram">Instagram</div>
          </div>
        </div>
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
      {/* <div className="div-footer-bottom">
        <div className="div-footer-socials">
          <div className="div-footer-socials-2">
            <div className="SVG-wrapper">
              <img className="SVG-4" alt="Svg" src="/static/images/home/svg-5.svg" />
            </div>
            <div className="overlap-13">
              <img className="SVG-5" alt="Svg" src="/static/images/home/svg-6.svg" />
              <div className="link-11" />
            </div>
            <div className="overlap-14">
              <img className="SVG-5" alt="Svg" src="/static/images/home/svg-7.svg" />
              <div className="link-11" />
            </div>
            <div className="overlap-15">
              <img className="SVG-5" alt="Svg" src="/static/images/home/svg-8.svg" />
              <div className="link-11" />
            </div>
            <div className="overlap-16">
              <img className="SVG-5" alt="Svg" src="/static/images/home/svg-9.svg" />
              <div className="link-11" />
            </div>
          </div>
          <div className="div-footer-divider-2" />
        </div>
      </div> */}
    </div>
  </div>
  )
  ;
};

export default Footer;
