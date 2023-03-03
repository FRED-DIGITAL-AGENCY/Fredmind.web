import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import styled from "styled-components";
import PricingCard from '../components/sections/PricingCard';

function Pricing() {
  return (
    <MainContainer>
      <div className="pricing-component">
        <PricingCard
          data={[
            { text: "3 new project / month", value: true },
            { text: "Basic interaction", value: true },
            { text: "Assets library", value: true },
          ]}
          price={0}
          buttonContent="Get Now"
          subTitle="Great for starters"
          priceText="Discover how to create your first projects."
          headerText="free"
        />
      </div>
      <div className="pricing-component">
        <PricingCard
          data={[
            { text: "3 new project / month", value: true },
            { text: "Basic interaction", value: true },
            { text: "Assets library", value: true },
          ]}
          price={7}
          background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
          shadow="#96e6a1"
          buttonContent="Get Started"
          subTitle="For Planned Projects"
          priceText="Bring your designs to the next level and export them."
          headerText="free"
        />
      </div>
      <div className="pricing-component">
        <PricingCard
          data={[
            { text: "3 new project / month", value: true },
            { text: "Basic interaction", value: true },
            { text: "Assets library", value: true },
          ]}
          price={12}
          background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
          shadow="#ffb199"
          buttonContent="Get Started"
          subTitle="For Prodessional Use"
          priceText="Enjoy limitless use with interactive export options."
          headerText="free"
        />
      </div>
      
    </MainContainer>
    
    
  ); 
  //  <Cta split />
}

const MainContainer = styled.div`
  height: 50%;
  width: 100%;
  margin-top:100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 970px) {
    height: 80%;
    flex-direction: column;
    .pricing-component {
      margin: 2rem 0;
    }
  }
`;

export default Pricing;