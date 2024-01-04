'use client';

import './Contact.css';
import ContactForm from './ContactForm';
import { useState } from 'react';

const Contact = () => {
  const [current, setCurrent] = useState(0);
  const toggle = val => {
    setCurrent(val);

  };

  return (
    <div className="contact-container">
      <div className="get-touch-container">
        <h1>Get in Touch with Us</h1>
      </div>

      <ContactForm heading={'Contact Us'} />

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
              className={current==0?"faq-tile show_description":"faq-tile"}
              onMouseEnter={()=>toggle(0)}
            >
              <div>
                <h1>What sets your CRO strategies apart from others in the industry? </h1>{' '}
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
              At our CRO agency, we stand out by employing a comprehensive and data-driven approach. We conduct thorough user experience audits and in-depth conversion funnel analyses, leveraging insights to tailor personalized strategies. Our focus on continuous A/B testing, coupled with a strong emphasis on user-centric design and content optimization, ensures the efficacy and relevance of our strategies in enhancing conversion rates. </p>
            </div>
            <div
              className={current==1?"faq-tile show_description":"faq-tile"}
              onMouseEnter={()=>toggle(1)}
              onMouseLeave={()=>toggle(0)}
            >
              <div>
                <h1>How do you ensure the success and effectiveness of your CRO methodologies? </h1>{' '}
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
              Our success is deeply rooted in meticulous planning, implementation, and measurement. We prioritize a robust foundation of data analysis and user behavior assessment, enabling us to identify pain points and opportunities. A continuous cycle of testing and optimization, coupled with agile and adaptive methodologies, ensures that our strategies evolve to meet the dynamic demands of the digital landscape. Our track record of consistent positive results across various industries reaffirms the reliability and effectiveness of our approach. </p>
            </div>
            <div
              className={current==2?"faq-tile show_description":"faq-tile"}
              onMouseEnter={()=>toggle(2)}
              onMouseLeave={()=>toggle(0)}
            >
              <div>
                <h1>How do you tailor your strategies to meet the unique needs of different businesses? </h1>{' '}
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
              Understanding that every business is unique, our approach is highly adaptive. We begin by conducting a thorough assessment of each client's specific challenges, goals, and target audience. Leveraging this insight, we craft personalized strategies, focusing on user segmentation, tailored content, and individualized user experiences. Our strategies are nimble and flexible, designed to be scalable and adaptable to meet the evolving needs of each business we collaborate with.</p>
            </div>
            <div
              className={current==3?"faq-tile show_description":"faq-tile"}
              onMouseEnter={()=>toggle(3)}
              onMouseLeave={()=>toggle(0)}
            >
              <div>
                <h1>What measurable outcomes can clients expect from implementing your CRO strategies?</h1>{' '}
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
              Clients can expect tangible and quantifiable improvements in their online performance metrics. These include but are not limited to a significant surge in conversion rates, a decrease in bounce rates, a notable drop in cart abandonment rates, and overall improvements in user engagement metrics. Our commitment to results-driven strategies ensures that our clients experience substantial and sustained growth in their online presence, ultimately translating into enhanced revenue and business success. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
