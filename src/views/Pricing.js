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
    <>
      <br></br>
      <div>
        <br></br><h1 style={{color: "#5DD435"}} >Pricing</h1>



      <br></br><br></br><br></br>
        <h3>Pricing <span style={{color: "#5DD435"}}>plans</span></h3>
        <p>We are Offering Competitive Prices for Our Clients</p>
        <h4> <span style={{color: "#5DD435"}}> SOCIAL MEDIA </span>MANAGEMENT</h4>
    </div>

      <MainContainer>
      
        <div className="pricing-component">
          <PricingCard
            data={[
              { text: "Branding/Revamp", value: true },
              { text: "Graphics Design", value: true },
              { text: "10 Posts and Designs Creation", value: true },
              { text: "VideoGraphy/Editing", value: true },
              { text: "20,000 Sponsorship Campaign", value: true },
              { text: "Social Media Page Management", value: true },
              
            ]}
            price={49999}
            buttonContent="Order Now"
            shadow="#96e6a1"
            subTitle="For small sized businnes"
            priceText="Making small business compete with big business."
            headerText="STANDARD"
          />
        </div>
        <div className="pricing-component">
          <PricingCard
            data={[
              { text: "Branding/Revamp", value: true },
              { text: "Graphics Design", value: true },
              { text: "20 Posts and Designs Creation", value: true },
              { text: "VideoGraphy/Editing", value: true },
              { text: "30,000 Sponsorship Campaign", value: true },
              { text: "Social Media Page Management", value: true }
              
            ]}
            price={149999}
            background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
            shadow="#96e6a1"
            buttonContent="Order Now"
            subTitle="FOR MEDIUM SIZE BUSINESS"
            priceText="Making a good business even greater."
            headerText="Silver"
          />
        </div>
        <div className="pricing-component">
          <PricingCard
            data={[
              { text: "Branding Activation / VideoGraphy", value: true },
              { text: "30 Posts and Designs Creation / SEO/SEM ", value: true },
              { text: "Graphics Design / Content Creation /", value: true },
              { text: "Email Marketing(10,000) - $150.89", value: true },
              { text: "Website Management / Social Media Page Management", value: true },
              { text: "40,000 Sponsorship Impressions", value: true }
            ]}
            price={249999}
            background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
            shadow="#96e6a1"
            buttonContent="order now"
            subTitle="FOR ALL BUSINESSES"
            priceText="Making a great business compete globally."
            headerText="Gold"
          />
        </div>
      
        <div className="pricing-component">
          <PricingCard
            data={[
              { text: "ipsum", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              
            ]}
            price={900090}
            shadow="#96e6a1"
            buttonContent="order now"
            subTitle="dolor"
            priceText="dolor."
            headerText="dolor"
          />
        </div>
        <div className="pricing-component">
          <PricingCard
            data={[
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
            ]}
            price={700000}
            background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
            shadow="#96e6a1"
            buttonContent="order now"
            subTitle="dolor"
            priceText="dolor."
            headerText="dolor"
          />
        </div>
        <div className="pricing-component">
          <PricingCard
            data={[
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
            ]}
            price={120000}
            background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
            shadow="#96e6a1"
            buttonContent="dolor"
            subTitle="dolor"
            priceText="dolor."
            headerText="dolor"
          />
        </div>
        <div className="pricing-component">
          <PricingCard
            data={[
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
            ]}
            price={133250}
            buttonContent="order Now"
            subTitle="dolor"
            priceText="dolor."
            headerText="dolor"
            shadow="#96e6a1"
          />
        </div>
        <div className="pricing-component">
          <PricingCard
            data={[
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
            ]}
            price={368888}
            background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
            shadow="#96e6a1"
            buttonContent="order now"
            subTitle="dolor"
            priceText="dolor."
            headerText="dolor"
          />
        </div>
        <div className="pricing-component">
          <PricingCard
            data={[
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
              { text: "dolor", value: true },
            ]}
            price={79099}
            background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
            shadow="#96e6a1"
            buttonContent="order now"
            subTitle="dolor"
            priceText="dolor."
            headerText="dolor"
          />
        </div>
        
      </MainContainer>
      <Cta split />
    </>
  ); 
}

const MainContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
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