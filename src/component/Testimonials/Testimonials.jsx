'use client';

import '../Contact/Contact.css';
import './Testimonials.css';
import ContactForm from '../Contact/ContactForm';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';


const Contact = () => {
  const toggle = e => {
    e.target.classList.toggle('show_description');
  };

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  return (
    <div className="contact-container">
      <div className="get-touch-container">
        <h1>Testimonials</h1>
      </div>

        <div className="testimonial-carousel">
        <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        infinite={true}


        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            border: '1px solid #c1c1c1',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            margin: '0 10px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            border: '1px solid #c1c1c1',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            margin: '0 10px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
       
       <div className="testimonial-section-item">
            <div className="testimonial-section-item-heading">
            "Transformative Collaboration with Legacy Solutions"
            </div>
            <div className="testimonial-section-item-description">

"Working with Legacy Solutions has been a game-changer for Mountain Jewelry. Their meticulous approach and strategic guidance propelled our online presence to new heights. The collaboration resulted in a remarkable 12% surge in conversion rates, reflecting the effectiveness of their data-driven methodologies. The significant decrease in bounce rates by 9% showcased improved engagement. Additionally, the streamlined checkout process led to an impressive 18% drop in cart abandonment rates. Legacy Solutions' expertise truly transformed our user experience and digital performance."
</div>
          </div>
          <div className="testimonial-section-item">
            <div className="testimonial-section-item-heading">
            "Transformative Collaboration with Legacy Solutions"
            </div>
            <div className="testimonial-section-item-description">

"Working with Legacy Solutions has been a game-changer for Mountain Jewelry. Their meticulous approach and strategic guidance propelled our online presence to new heights. The collaboration resulted in a remarkable 12% surge in conversion rates, reflecting the effectiveness of their data-driven methodologies. The significant decrease in bounce rates by 9% showcased improved engagement. Additionally, the streamlined checkout process led to an impressive 18% drop in cart abandonment rates. Legacy Solutions' expertise truly transformed our user experience and digital performance."
</div>
          </div>
          <div className="testimonial-section-item">
            <div className="testimonial-section-item-heading">
            "Transformative Collaboration with Legacy Solutions"
            </div>
            <div className="testimonial-section-item-description">

"Working with Legacy Solutions has been a game-changer for Mountain Jewelry. Their meticulous approach and strategic guidance propelled our online presence to new heights. The collaboration resulted in a remarkable 12% surge in conversion rates, reflecting the effectiveness of their data-driven methodologies. The significant decrease in bounce rates by 9% showcased improved engagement. Additionally, the streamlined checkout process led to an impressive 18% drop in cart abandonment rates. Legacy Solutions' expertise truly transformed our user experience and digital performance."
</div>
          </div>
          <div className="testimonial-section-item">
            <div className="testimonial-section-item-heading">
            "Transformative Collaboration with Legacy Solutions"
            </div>
            <div className="testimonial-section-item-description">

"Working with Legacy Solutions has been a game-changer for Mountain Jewelry. Their meticulous approach and strategic guidance propelled our online presence to new heights. The collaboration resulted in a remarkable 12% surge in conversion rates, reflecting the effectiveness of their data-driven methodologies. The significant decrease in bounce rates by 9% showcased improved engagement. Additionally, the streamlined checkout process led to an impressive 18% drop in cart abandonment rates. Legacy Solutions' expertise truly transformed our user experience and digital performance."
</div>
          </div>
      </ReactSimplyCarousel>
        </div>

      <ContactForm heading={'Still in Doubt?'} />

    </div>
  );
};

export default Contact;
