import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'We want your problems',
    paragraph: 'Startups fail? This is a hard and bleak Truth, But One that you will do well to meditate on. Business problems Always exist, from structure, audience Market, financial management to sustainability Plan '
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                 
                  </div>
                <h3 className="text-color-primary mt-0 mb-12">
               Creative Solution 
                  </h3>
                <p className="m-3">
                 Startups fail? This is a hard and bleak Truth, But One that you will do well to meditate on. Business problems Always exist, from structure, audience Market, financial management to sustainability Plan We  navigate through yours and solve them by identifying suitable market for your products and most budget-friendly ways to engage them using detailed research, insights and creativity to accelerate growth leads for convertible success
                Accept us as an extension of your team. Providing Top Notch Drop Servicing Business, Structure You Ahead of Many, Strategies and tools that will Increase your business, visibility And <b>Creative Solution</b>  most importantly generate revenue. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
               
                  </div>
                <h3 className="text-color-primary mt-0 mb-12">
                 Stay in the know

                  </h3>
                <p className="m-0">
                  Creatively meeting your needs in ways that go above and beyond, paying attention to Details, picking the Pieces and tuning them into realistic solutions. Our refining approach to campaigns and rapid-response times means we’re flexible and can work seamlessly as part of your team.
                  Your trusted-circle will be an integral part of the process, providing updates on each step. Treat them like they are the center of your World because they are and show the results and how we can optimize.

                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          
                  </div>
                <h3 className="text-color-primary mt-0 mb-12">
                 What We Offer
                  </h3>
                <p className="m-0">
                  <li  className="text-color-secondary mt-0 mb-12">
                    Our Time 
                 
                  </li>
                   <p>Aimed at time-crunched startups & businesses with cutting edge digital solutions across products Growth & sales .</p>
                  <li  className="text-color-secondary mt-0 mb-12">
                    Our Ideas    </li>
                  <p>We Help You Think-Out Desired Results For Pressing Challenges For Global Conquest Ideation is converted to Implemented Project, Trust Us.</p>
               
                  
                 <li  className="text-color-secondary mt-0 mb-12">
                   Our Support   </li>
                  <p>Holistically integrating you as part of our team in every step showing walkthrough & updates on stages of execution because we believe in collaboration for greater success. Your trusted-circle is an integral part of the process.</p>
               
                  <li  className="text-color-secondary mt-0 mb-12">
                   Our Assurance
                        </li>
                  <p>Business is about people and without the right people a business can't grow & mature. That's we're solely on building Young talent uniquely hand-picked for endless possibilities.</p>
             
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;