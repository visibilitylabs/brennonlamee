import React from 'react';
import './About.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-container">
      <div className="get-touch-container">
        <h1>About Us</h1>
      </div>
      {/* <div className="image-container-about">
        <div className="inner-grid-container">
        <Image src="static/images/about3.svg" alt="about" width={400} height={400} />
        </div>
      </div> */}
      <div className="about-grid">
          <Image src="static/images/about1.svg" alt="about" width={400} height={400} />
          <div className="about-grid-text-container">
          <b>Elevating Your Conversion Rates</b>
At Legacy Solutions, our expertise lies in empowering businesses generating under 1 million in annual revenue to enhance their online success through boosted traffic conversion rates. We offer a tailored approach, leveraging expert analysis, strategic editing, and precise implementation to achieve tangible and remarkable results.

          </div>
      </div>
      <div className="about-pillars-container">
        <div className="about-pillars-heading">
          Our Methodology: Four Pillars of Success
        </div>
        <div className="about-pillars-circle">
          <div className="about-pillars-item">User Experience Enhancement</div>
          <div className="about-pillars-item">Data Dive & Analysis</div>
          <div className="about-pillars-item">Content Strategy & Personalization </div>
          <div className="about-pillars-item">Conversion Funnel Optimization</div>
        </div>
      </div>
      <div className="about-grid">
        <div className="about-grid-inner">
        <div className="about-grid-text-container">
        <b>The No Brainer Offer: Guaranteed Satisfaction and Results</b>
At Legacy Solutions, we guarantee your satisfaction and results. Expect an average 8-12% improvement once you partner with us. Our proven track record speaks for itself – let’s collaborate and transform your digital landscape together!
          </div>
          <div className="about-grid-text-container">
          <b>Your Vision, Our Mission</b>
Our primary goal is to establish a thriving partnership by showcasing the transformative capabilities of our services. We eagerly anticipate insightful discussions tailored to align our offerings with your unique vision and aspirations. Let's pave the way for your business's digital triumph together.
          </div>
        </div>
      <Image src="static/images/about2.svg" alt="about" width={400} height={400} />
      </div>
      <div className="meet-team-container">
        <div className="meet-team-heading">
          Meet Our Team
        </div>
        <div className="meet-team-grid">
          <div className="meet-team-item">
            <div className="meet-team-image">
            <Image src="/static/images/Team/Alexander-Sterling.jpg" alt="about" width={200} height={200} />
            </div>
            <div className="meet-team-description">
              <div className="teammate-title">
              <b>Alexander Sterling</b>
              </div>
              <div className="teammate-position">
              Optimization Consultant
              </div>
              <div className="teammate-description">
              Alexander specializes in data-driven strategies, driving substantial e-commerce conversion rate improvements for enhanced online performance
                </div>
            </div>
          </div>
          <div className="meet-team-item">
            <div className="meet-team-image">
            <Image src="/static/images/Team/Jonathan-Reynolds.jpg" alt="about" width={200} height={200} />
            </div>
            <div className="meet-team-description">
              <div className="teammate-title">
              <b>Jonathan Reynolds</b>
              </div>
              <div className="teammate-position">
              Optimization Consultant
              </div>
              <div className="teammate-description">
              Jonathan excels in employing data-driven strategies to drive notable enhancements in e-commerce conversion rates, amplifying online performance.
                </div>
            </div>
          </div>
          <div className="meet-team-item">
            <div className="meet-team-image">
            <Image src="/static/images/Team/Benjamin-Lee.jpg" alt="about" width={200} height={200} />
            </div>
            <div className="meet-team-description">
              <div className="teammate-title">
              <b>Benjamin Lee</b>
              </div>
              <div className="teammate-position">
              Finance
              </div>
              <div className="teammate-description">
              Benjamin brings expertise in financial strategies that fortify operations. His proficiency ensures sound fiscal management, contributing to sustainable growth and success.
             </div>
            </div>
          </div>
          <div className="meet-team-item">
            <div className="meet-team-image">
            <Image src="/static/images/Team/Vihn-Ly.jpg" alt="about" width={200} height={200} />
            </div>
            <div className="meet-team-description">
              <div className="teammate-title">
              <b>Vihn Ly</b>
              </div>
              <div className="teammate-position">
              COO
              </div>
              <div className="teammate-description">
              Vihn steers operational excellence with a strategic vision. His leadership drives seamless execution and fosters organizational efficiency, vitalizing our commitment to exceptional service delivery.</div>
            </div>
          </div>
          <div className="meet-team-item">
            <div className="meet-team-image">
            <Image src="/static/images/Team/Carlita-Shaw.jpg" alt="about" width={200} height={200} />
            </div>
            <div className="meet-team-description">
              <div className="teammate-title">
              <b>Carlita Shaw</b>
              </div>
              <div className="teammate-position">
              Sales Manager
              </div>
              <div className="teammate-description">
              Carlita orchestrates dynamic sales strategies. Her leadership cultivates strong client relationships and propels our team towards achieving sales excellence. </div>
            </div>
          </div>
          </div>
      </div>

<div className="get-started-today-container">

      <div className="get-started-today">
        <div className="get-started-today-heading">
          Get Started Today
        </div>
        <div className="get-started-today-description">
        Give your website the boost it needs.<br></br>
        Book a call with us using the link below.
        </div>
        <div className="bookcallbutton">
              Book a Call with Us Today{' '}
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
      </div>

{/* 
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
      </div> */}
    </div>
  );
};

export default About;
