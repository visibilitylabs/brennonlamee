'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const StickyScrollData = () => {

    const [sectionProgress, setSectionProgress] = React.useState(0);

    const containerRef = React.useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // 0% when first child is visible, 100% when last child is visible
            const container = containerRef.current;
            const { top, bottom } = container.getBoundingClientRect();
            const height = bottom - top;
            const scrollY = window.scrollY;
            const sectionHeight = container.scrollHeight;
            const sectionTop = container.offsetTop;
            const sectionBottom = sectionTop + sectionHeight;
            const sectionScrollY = scrollY - sectionTop;
            const sectionProgress = sectionScrollY / sectionHeight * 100;
            // bloat the first 80% to 100% to make it easier to reach the end
            const bloat = 0.2;
            const bloatProgress = 1 + bloat;
            const bloatSectionProgress = sectionProgress * bloatProgress;
            const bloatSectionProgressCapped = Math.min(bloatSectionProgress, 100);
            setSectionProgress(bloatSectionProgressCapped);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        
    }, []);

    useEffect(() => {
        console.log('sectionProgress', sectionProgress);
    }, [sectionProgress]);


return (<div className="data-container-sticky" ref={containerRef} >
    <div className="data-container">

<div className={sectionProgress<=30?"inner-data-content show":"inner-data-content"}>
  <div className="left-data-container">
    <div className="data-heading">Data Driven Decisions</div>
    <div className="data-description">
    <div className="data-img">
      <Image src="chart.svg" width={20} height={20} />
      </div>
      <h1>Data Dive & Analysis</h1>
      <p>
        Data analysis is crucial for CRO. We examine our client’s
        website or platform data to understand its performance and
        identify areas of improvement
      </p>
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{width:`${sectionProgress}%`}} ></div>
      </div>
    </div>
  </div>
  <div className="right-data-container">
   <div className="right-data-inner">
    <ul>
   <li> Data Collection: Gather data from various sources, such as website analytics, user behavior, heatmaps, and surveys.</li>

<li>In-Depth Analysis: Conduct a deep analysis to understand user journeys, drop-off points, and conversion funnel performance.</li>

<li>Identify Pain Points: Identify bottlenecks and usability issues that hinder conversion.</li>

<li>User Segmentation: Segment users based on demographics, behavior, and preferences.</li>

<li>Data-Driven Insights: Leverage insights to create hypotheses for improvement.</li>
    </ul>
    </div> 
  </div>
</div>
<div className={sectionProgress>30&&sectionProgress<=60?"inner-data-content show":"inner-data-content"}>
  <div className="left-data-container">
    <div className="data-heading">Tailored Content Excellence</div>
    <div className="data-description">
    <div className="data-img">
      
      <Image src="lock.svg" width={20} height={20} />
      </div>
      <h1>Unique Strategies</h1>
      <p>
        Content Strategy & Personalization involves creating relevant
        and engaging content to cater to the specific needs and
        preferences of your target audience.
      </p>
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{width:`${sectionProgress}%`}} ></div>
      </div>
    </div>
  </div>
  <div className="right-data-container">
    <div className="right-data-inner">
    <ul>

  <li>Audience Segmentation: Divide your audience into segments based on their behavior, interests, and demographics.</li>
<li>Content Mapping: Develop content that aligns with each segment's unique needs and positions your client as a solution provider.</li>
<li>Dynamic Content: Implement personalization strategies that deliver tailored content to individual users.</li>
<li>Emotional Connection: Craft content that resonates emotionally with the audience.</li>
<li>Value Proposition Optimization: Clearly communicate the value your client offers through their products or services.</li>
    </ul>
 
    </div>
  </div>
</div>{' '}
<div className={sectionProgress>60&&sectionProgress<=100?"inner-data-content show":"inner-data-content"}>
  <div className="left-data-container">
    <div className="data-heading">Your Smile, Our Success</div>
    <div className="data-description">
      <div className="data-img">
      <Image src="money.svg" width={20} height={20} />
      </div>
      <h1>100% Satisfaction Guaranteed</h1>
      <p>
      Our primary aim is to provide a comprehensive understanding of how this product can be a gamechanger for their business ultimately paving the way for a successful partnership
      </p>
      {/* <div className="progress-bar">
        <div className="progress-bar-inner" style={{width:`${sectionProgress}%`}} ></div>
      </div> */}
     <Link href={'https://calendly.com/carlitashaw75/1-on-1-meeting'}  className="bookcallbutton">
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
  </div>
  <div className="right-data-container">
    <div className="right-data-inner right-data-image-container">
   {/* <Image src={'/image-4.png'} height={400} width={500}  /> */}
    <img src={'/image-4.png'}/>
   </div>
  </div>
</div>{' '}
</div>
</div>
)
}

export default StickyScrollData;