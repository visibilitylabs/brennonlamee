import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="content-container">
        <div className="left-header">
          <div className="logo-container">
            {/* <img
              src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
              alt="Docplanner Group"
            /> */}
            <svg
              width="162"
              height="58"
              viewBox="0 0 162 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="162" height="58" fill="#3C39D5" />
            </svg>
          </div>
          <div className="menu-container">
            <span>Testimonials</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="right-header">
          <div className="flag-container">
            Book a Call with us Today{' '}
            <svg
              width="6"
              height="19"
              viewBox="0 0 6 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5L5 9.5L1 14"
                stroke="#240213"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
