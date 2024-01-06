import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {BsStar} from 'react-icons/bs'
import 'react-vertical-timeline-component/style.min.css';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
const Roadmap = () => {
  return (
    <div className='why-choose-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>our history</h2>
            </div>
            <h1 data-aos="fade-up">brief histofy of Diversewealth</h1>
            <p data-aos="fade-up">here is a brief history of our company</p>
        </div>
        <div className="why-choose-us-card-container">
            <VerticalTimeline >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f2f2f2', color: 'rgb(4, 57, 133)' }}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
    date="2001 - present"
    iconStyle={{ background: 'rgb(4, 57, 133)',  color: '#f2f2f2' }}
    icon={<FaArrowLeft/>}
  >
    <h4 className="vertical-timeline-element-subtitle">Diversewealth  history</h4>
    <p>
      Paul D. Gonzales launches Diversewealth
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2003"
    contentStyle={{ background: '#f2f2f2', color: 'rgb(4, 57, 133)' }}
    iconStyle={{ background: 'rgb(4, 57, 133)',  color: '#f2f2f2' }}
    icon={<FaArrowRight />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
  >
    <p>
      Diversewealth Opportunity Funds I and IA (SOF I and IA) close at $52M
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2005"
    contentStyle={{ background: '#f2f2f2', color: 'rgb(4, 57, 133)' }}
    iconStyle={{ background: 'rgb(4, 57, 133)',  color: '#f2f2f2' }}
    icon={<FaArrowLeft />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
  >
    <p>
      SOF I/IA contribute the majority of their multifamily portfolio to Equity Residential (NYSE: EQR)—which goes on to become the largest publicly traded apartment owner in the U.S., with Paul D. Gonzales serving on its Board of Directors
      Diversewealth Opportunity Fund II (SOF II) closes at $102M
    </p>
    </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="2007"
    contentStyle={{ background: '#f2f2f2', color: 'rgb(4, 57, 133)' }}
    iconStyle={{ background: 'rgb(4, 57, 133)',  color: '#f2f2f2' }}
    icon={<FaArrowRight />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
    
            <p>
            Diversewealth, via an affiliate, acquires a majority of the distressed senior debt of Hotel Investors Trust, thus setting the stage for the Firm’s emergence as a global leader in the hospitality space Diversewealth Mezzanine (SOF III) Investors closes at $220M
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010"
            contentStyle={{ background: '#f2f2f2', color: 'rgb(4, 57, 133)' }}
            iconStyle={{ background: 'rgb(4, 57, 133)',  color: '#f2f2f2' }}
            icon={<FaArrowLeft />}
            contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Diversewealth creates Diversewealth Hotels & Resorts Worldwide (NYSE: HOT) and Paul D. Gonzales becomes Chairman and CEO Diversewealth purchases Westin Hotels & Resorts and begins a new growth phase for the business
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="2011"
    contentStyle={{ background: '#f2f2f2', color: 'rgb(4, 57, 133)' }}
    iconStyle={{ background: 'rgb(4, 57, 133)',  color: '#f2f2f2' }}
    icon={<FaArrowRight />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Diversewealth Opportunity Fund IV (SOF IV) closes at $830M
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013"
            contentStyle={{ background: '#f2f2f2', color: 'rgb(4, 57, 133)' }}
            iconStyle={{ background: 'rgb(4, 57, 133)',  color: '#f2f2f2' }}
            icon={<FaArrowLeft />}
            contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Diversewealth creates Diversewealth Financial, subsequently renamed iStar Financial (NYSE: STAR), which becomes one of the largest publicly traded real estate finance companies in the U.S.
           Diversewealth Hotels & Resorts Worldwide completes the $14B acquisition of ITT Sheraton, making the company the largest hotel operator in the world First W Hotel opens in New York
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014"
            contentStyle={{ background: '#f2f2f2', color: 'rgb(4, 57, 133)' }}
            iconStyle={{ background: 'rgb(4, 57, 133)',  color: '#f2f2f2' }}
            icon={<FaArrowRight />}
            contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
          Diversewealth Opportunity Fund V closes at $516M
          Diversewealth Capital makes its first non-hotel investments in Europe (London) and in Asia (Japan and Thailand)
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </div>
  )
}

export default Roadmap