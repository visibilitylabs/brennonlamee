import React from 'react';
import './About.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-container">
      <div className="get-touch-container">
        <h1>About Us</h1>
      </div>
      <div className="image-container-about">
        <div className="inner-grid-container">
          <Image src="static/images/about1.svg" alt="about" width={400} height={400} />
          <Image src="static/images/about2.svg" alt="about" width={400} height={400} />
          <Image src="static/images/about3.svg" alt="about" width={400} height={400} />
        </div>
      </div>

      <div className="information-container">
        <div className="principle-grid-container">
          <h1 className="principle-title">Our Priniciples</h1>
          <div className="grid-container-priniciple">
            <div className="grid-item-priniciple">
              <h2>Our Mission</h2>
              <p>
                We are a team of passionate people whose goal is to improve
                {"everyone's"} life through disruptive products. We build great
                products to solve your business problems.
              </p>
            </div>
            <div className="grid-item-priniciple">
              <h2>Our Vision</h2>
              <p>
                We are a team of passionate people whose goal is to improve
                {"everyone's"} life through disruptive products. We build great
                products to solve your business problems.
              </p>
            </div>
            <div className="grid-item-priniciple">
              <h2>Our Values</h2>
              <p>
                We are a team of passionate people whose goal is to improve
                {"everyone's"} life through disruptive products. We build great
                products to solve your business problems.
              </p>
            </div>

            <div className="grid-item-priniciple">
              <h2>Our Values</h2>
              <p>
                We are a team of passionate people whose goal is to improve
                {"everyone's"} life through disruptive products. We build great
                products to solve your business problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
