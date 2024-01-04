'use client';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';
import React from 'react';
const Header = () => {

  // check if the scroll height is greater than 200
  const [isPastScroll, setIsPastScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isPastScroll = window.scrollY > 200;
      setIsPastScroll(isPastScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    console.log('isPastScroll', isPastScroll);
  }
  , [isPastScroll]);

  return (
    <div className="header-container">
      <div className="content-container">
        <div className="left-header">
          <div className="logo-container">
            {/* <img
              src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
              alt="Docplanner Group"
            /> */}
            <Link href={'/'}>
              <img src="/logo-small.png" height={50} />
            </Link>
          </div>
          <div className="menu-container">
            <Link href={'/testimonials'}>
              <span>Testimonials</span>
            </Link>
            <Link href={'/about'}>
              <span>About</span>
            </Link>
            <Link href={'/contact'}>
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <div className="right-header">
        <Link href={'https://calendly.com/carlitashaw75/1-on-1-meeting'}  className="flag-container">
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
          </Link>
          <Link href={'https://calendly.com/carlitashaw75/1-on-1-meeting'}  className="flag-container flag-container-mobile">
            Book a Call {' '}
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
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
