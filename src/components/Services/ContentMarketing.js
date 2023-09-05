import React from 'react'
import styled from 'styled-components';
import{ Wrapper, Container4, Left, Right, Desc } from  "../../style/mainStyle";
import Image from '../elements/Image';


const DigitalMarketing = () => {
       //STYLED COMPONENTS
       const MainHeading = styled.h1`
       font-size: clamp(1rem, 2vw, 3rem);
       margin-bottom: 2rem;
       width: 100%;
       letter-spacing: 2px;
       color: #34eb37;
       text-align: start;
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
      
     `;
      const HeroText = styled.p`
       margin-bottom: 35px;
       font-size: 20px;
       line-height: 24px;
       text-align: start;
      //  letter-spacing: 2px;
       color: #7e807f;
     `;
     
      const ButtonWrapper = styled.div`
       width: 100%;
       display: flex;
       justify-content: start;
       flex-flow: wrap;
       gap: 0.5rem;
     `;
     
     const HeroButton = styled(Button)`
       color: #000;
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
  padding:50px;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  box-shadow:-10px 5px 20px 10px #000;
  text-align:center;
       margin:5px;
`;
const FeatureBox2 = styled.div`
width: 200px;
height:200px;
color:#000;
  background-color:#34eb37;
  padding:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-weight:600;
  border-radius:5px;
  text-align:center;
       margin:10px;
       
`;
  return (
    <>
    <HeroSection>
 
          <Container>
          <MainHeading><span style={{color:"#fff",}}>Content Marketing </span> <br></br>Nurturing Online Business Expansion through Content Marketing</MainHeading>
            <HeroText>
            In the digital realm, content reigns supreme. While certain content may be uninteresting, dull, or unreliable, others are captivating, enlightening, and enjoyable. 

            </HeroText>
            <ButtonWrapper>
      
                <a href="https://calendly.com/fredminddigital/30min?month=2023-02">
                <HeroButton>Start a project</HeroButton>
              </a>
              
            </ButtonWrapper>
          </Container>
        </HeroSection>
        <Container4>
      <Wrapper>
      <Left>
      Then there's extraordinary content – inspiring, impactful, and geared towards driving sales. 

      </Left>
      <Right>
        <Desc>
        Are you ready to take your business to new heights and leave your competitors in the dust?Look no further!<hr></hr>We specialize in crafting top-notch content.


        </Desc>
      </Right>
      </Wrapper>
    </Container4>
         <FeatureSection>
          <FeatureContainer>
            <FeatureText> <span style={{color: "#34eb37"}}>Content marketing</span> </FeatureText>
            <FeatureText2>Content marketing has transitioned from a novel and intriguing marketing approach to an indispensable force that empowers businesses across all sectors. 


            <span style={{color: "#34eb37"}}> <br></br>Content is the atomic particle of all digital marketing ~ Rebecca Lieb</span>
            </FeatureText2>
            </FeatureContainer>
            <FeatureBoxContainer>
            <FeatureBox> <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />Search Engine Optimization (SEO)</FeatureBox>
              <FeatureBox2>
              <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />Email Marketing</FeatureBox2>
            
              <FeatureBox> <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} /> Content Writing/Creation</FeatureBox>
           
           <FeatureBox2>
              <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />Copywriting </FeatureBox2>
              
            </FeatureBoxContainer>
         </FeatureSection>
        
          {/* <Cta split /> */}
        </>
  )
}

export default DigitalMarketing