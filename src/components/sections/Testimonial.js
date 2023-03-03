import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Why Startups Choose Us',
    paragraph: ' We are more than a Digital marketing agency because we have studied the espousal between a success-driven money-hungry business, and a client waiting to be discovered . We serve as a bridge toward resolution and ultimately achieve digital marketing success. You get a team of experience techpreneurs and professionals who will help you pre-plan your start-up and set you on the limelight.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — 	The Growth Marketing Strategy on Social Media as a Big Influence on Brand Marketing truely tell the Impact on many Projects the brand has done and value he she brings with Ease.
I am a Beneficiary of the High Value and Knowledge of FREDMIND as a Top-notch Digital Marketing Agency in Brand and Product Marketing.
The brand has Rubbed this huge knowledge on my Career as a Filmmaker, my Platform as a Founder of Igotv.NG and my Current film Project with Founder as the Team Lead for Social Media Campaign.
I recommend this to everyone with the Aim to Spread Beyond thier Current Locations and Business.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">TOM MAKOLO JNR </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0"><br></br>Nollywood Actor | Film maker | Founder, IgoTV.</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — FREDMINDMIND DIGITAL AGENCY is indeed one of the most sought after and top notch website design company that we at <i>MONIK INTEGRATED SERVICES LTD</i> .
                    As a startup commpany we needed an official website and after so many back and forth with some design compaany, we pitched our tent with FREDMIND DIGITAL AGENCY an they delivered a seamless interface to our company. we will proudly recommend FREDMIND DIGITAL AGENCY  to any Start-up company looking for a professional and user friendly website!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">SOLOMON IKECHUKWU OLINYA</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Monik Integrated Services</a>
                  </span>
                </div>
              </div>
            </div>
{/* 
            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;