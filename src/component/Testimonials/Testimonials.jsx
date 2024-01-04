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
                        //   remove buttons in mobile view

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
                            maxWidth: 1000,
                            mouseSwipeTreshold: 20,
                            touchSwipeTreshold: 50,
                        },

                    ]}
                    preventScrollOnSwipe={true}
                    
                    speed={400}
                    easing="linear"

                >

                    <div className="testimonial-item-container">

                        <div className="testimonial-section-item">
                            <div className="testimonial-section-item-heading">
                                Transformative Collaboration with Legacy Solutions
                            </div>
                            <div className="testimonial-section-item-description">

                                Working with Legacy Solutions has been a game-changer for Mountain Jewelry. Their meticulous approach and strategic guidance propelled our online presence to new heights. The collaboration resulted in a remarkable 12% surge in conversion rates, reflecting the effectiveness of their data-driven methodologies. The significant decrease in bounce rates by 9% showcased improved engagement. Additionally, the streamlined checkout process led to an impressive 18% drop in cart abandonment rates. Legacy Solutions' expertise truly transformed our user experience and digital performance.
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item-container">

                        <div className="testimonial-section-item">
                            <div className="testimonial-section-item-heading">
                                Revolutionizing User Engagement with Legacy Solutions</div>
                            <div className="testimonial-section-item-description">
                                Our partnership with Legacy Solutions revolutionized LetsGoGamingLLC. Their innovative strategies, including personalized product recommendations and dynamic content, significantly enhanced user engagement. The implementation resulted in a remarkable 12% increase in conversion rates. Witnessing a substantial drop of 18% in cart abandonment rates showcased the impact of their tailored solutions. We're thrilled with the results and grateful for their expertise in tailoring the gaming experience to individual preferences.</div>
                        </div>
                    </div>
                    <div className="testimonial-item-container">

                        <div className="testimonial-section-item">
                            <div className="testimonial-section-item-heading">Empowering E-commerce Growth with Strategic CRO Collaboration
                            </div>
                            <div className="testimonial-section-item-description">
                                Partnering with this CRO agency was a game-changer for Evergreen Solutions Co. Their comprehensive strategies and meticulous attention to detail propelled our eCommerce success to new heights. The implementation led to an impressive 8% surge in conversion rates and a remarkable 2.7x increase in website traffic. Notably, sales soared by 17%, generating an additional $18,000+. Witnessing a significant drop of over 14% in cart abandonment rates showcased the impactful results. Their expertise and tailored approach truly transformed our online presence and bottom line.
                            </div></div>
                    </div>
                    <div className="testimonial-item-container">
                        <div className="testimonial-section-item">
                            <div className="testimonial-section-item-heading">Digital Transformation Driving Growth and Conversions
                            </div>
                            <div className="testimonial-section-item-description">
                                Our collaboration with this team was instrumental in reshaping our online presence. Their meticulous SEO strategies resulted in a remarkable 30% surge in organic traffic within the first month, followed by a substantial 50% increase by the third month. Equally impressive was the 20% boost in conversion rates achieved within two months, eventually reaching an outstanding 25% increase after three months. Their expertise in blending SEO and CRO tactics has profoundly impacted our visibility and revenue growth.  </div>
                        </div></div>
                </ReactSimplyCarousel>
            </div>
            <ContactForm heading={'Still in Doubt?'} />

        </div>
    );
};

export default Contact;
