import React from 'react'
import styled from 'styled-components';
import{ Wrapper, Container4, Left, Right, Desc } from  "../../style/mainStyle";
import Image from '../elements/Image';

// import sections
// import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
// import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';

const AppDev = () => {
  
    
    //STYLED COMPONENTS
    const MainHeading = styled.h1`
    font-size: clamp(1rem, 2vw, 3rem);
      margin-bottom: 2rem;
      width: 100%;
      letter-spacing: 1px;
      color: #34eb37;
      text-align:start;
      font-family: 'Merriweather Sans', sans-serif;
    `;
    
    const Button = styled.button`
      border-radius: 4px;
      background: none;
      white-space: nowrap;
      padding: 10px 20px;
      font-size: 16px;
      font-weight:600;
      color: #fff;
      outline: none;
      border:none;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        transition: all 0.6s ease;
        width: 100%;
        height: 0%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:hover:before {
        height: 500%;
      }
      &:hover {
        border:2px solid #fff;
        color: black;
      }
    `;
    
    const Container = styled.div`
      width: 100%;
      max-width: 1300px;
      margin-right: auto;
      margin-left: auto;
      font-family: 'Merriweather Sans', sans-serif;
      padding: 0 50px;
      @media screen and (max-width: 960px) {
        padding: 0 30px;
      }
    `;
    
    
    const HeroSection = styled.section`
      height: 100vh;
      font-weight:700;
      padding-top: clamp(70px, 25vh, 220px);
      color:#7e807f;
    `;
     const HeroText = styled.p`
      margin-bottom: 35px;
      font-size: 20px;
      line-height: 24px;
      text-align: start;
      // letter-spacing: 2px;
      // color: #fff;
    `;
    
     const ButtonWrapper = styled.div`
      width: 100%;
      display: flex;
      justify-content: start;
      flex-flow: wrap;
      gap: 0.5rem;
    `;
    
    const HeroButton = styled(Button)`
      color:#000;
      &:before {
        background-color: #34eb37;
        height: 500%;
        
      }
      &:hover:before {
        height: 0%;
      }
      &:hover {
        color: white;
      }
    `;
    const FeatureSection = styled.section`
     padding-top: clamp(70px, 25vh, 220px);
     display:flex;
     justify-content:space-between;
     margin:5%;
     @media only screen and (max-width: 480px) {
      display:flex;
      flex-direction :column;
      margin:0;
  
      
      }

   `;
   const FeatureContainer = styled.div`
   width: 100%;
   max-width: 1300px;
   margin-right: auto;
   margin-left: auto;
   font-family: 'Merriweather Sans', sans-serif;
   padding: 0 50px;
 `;
   const FeatureText  = styled.p`
   font-size: 30px;
   line-height: 26px;
   font-weight:600;
   text-align: center;
   margin-right:250px;
   letter-spacing: 1px;
   
 `;
 const FeatureText2  = styled.p`
 font-size: 16px;
 line-height:20px;
 text-align: start;
 letter-spacing: 1px;
 
`;
 const FeatureBoxContainer = styled.div`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction:row;
      height: auto;
  width: 100%;
  // margin:5%;
  margin-right:90px;
  align-items: center;

  @media only screen and (max-width: 480px) {
    // padding: 30px 20px;
    width: 180px;
    display:flex;
    flex-direction:row;
    margin-left:100px;
    
  }
 `;

 const FeatureBox = styled.div`
 width: 200px;
 height:200px;
 box-shadow:-10px 5px 20px 10px #000;
  padding:50px;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
       margin:5px;
`;
const FeatureBox2 = styled.div`
width: 200px;
height:200px;
color:#000;
  background-color:#34eb37;
  padding:50px;
  font-weight:600;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
       margin:10px;
       
`;

  return (
    <>
    <HeroSection>
 
          <Container>
            <MainHeading> <span style={{color:"#fff",}}>App Development </span> <br></br>Crafting Next-Generation Digital products and Applications Tailored Just for You
</MainHeading>
            <HeroText>
            We build highly responsive and thoroughly functional websites tailored to organizational or personal needs. We help organizations achieve more with a global class website suited for both branding and sales.
            </HeroText>
            <ButtonWrapper>
              {/* <Link to="#">
                <Button>Get Started</Button>
              </Link> */}
              <HeroButton>Start a project</HeroButton>
            </ButtonWrapper>
            
          </Container>
        </HeroSection>
        <br></br> <br></br><br></br>
        <Container4>
      <Wrapper>
      <Left>
      Unlock Your Potential with Engaging and Productive Applications - Say Goodbye to Boring Apps!

      </Left>
      <Right>
        <Desc>
        Supercharge Your Business Growth with Custom App Development Solutions!<hr></hr> In today's fast-paced digital landscape, harnessing the power of mobile technology is essential for driving business growth.

        </Desc>
      </Right>
      </Wrapper>
    </Container4>
    <FeatureSection>
          <FeatureContainer>
            <FeatureText> <span style={{color: "#34eb37"}}>App Development</span> </FeatureText>
            <FeatureText2>
            Our team of expert app developers will collaborate closely with you to understand your business goals, target market, and specific requirements. We'll design and develop a cutting-edge app that reflects your brand identity, captivates users, and drives tangible results.<span style={{color: "#34eb37"}}> Whether you're looking to create an intuitive e-commerce app, a seamless customer service platform, a productivity-boosting internal tool, or a data-driven business solution, we have the technical prowess and industry expertise to bring your vision to life.
</span> Our focus is not only on creating visually appealing and user-friendly apps but also on optimizing performance, ensuring cross-platform compatibility, and integrating advanced features that enhance user engagement and satisfaction.

            </FeatureText2>
            </FeatureContainer>
            <FeatureBoxContainer>
            
              <FeatureBox><Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />Android App Development</FeatureBox>
              <FeatureBox2><Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />Web App Development</FeatureBox2>
              <FeatureBox><Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />IOS App Development</FeatureBox>
              <FeatureBox2><Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />Cross Platform Apps</FeatureBox2>
              
              
            </FeatureBoxContainer>
         </FeatureSection>
          {/* <Cta split /> */}
        </>
  )
}

export default AppDev