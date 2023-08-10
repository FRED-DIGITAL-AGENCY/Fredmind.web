import React from 'react'
import styled from 'styled-components'
import{ Wrapper, Container2, Left, Right, Desc, SubTitle} from  "../../style/usecases.style";

const Ecommerce = () => {
     //STYLED COMPONENTS
     const MainHeading = styled.h1`
     font-size: clamp(1rem, 6vw, 3.5rem);
     margin-bottom: 2rem;
     width: 100%;
     letter-spacing: 4px;
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
   `;
    const HeroText = styled.p`
     margin-bottom: 35px;
     font-size: 18px;
     line-height: 24px;
     text-align: start;
     letter-spacing: 2px;
   
   `;
   
    const ButtonWrapper = styled.div`
     width: 100%;
     display: flex;
     justify-content:start;
     flex-flow: wrap;
     gap: 0.5rem;
   `;
   
   const HeroButton = styled(Button)`
     color: #fff;
     &:before {
       background-color: #5DD435;
       height: 500%;
       
     }
     &:hover:before {
       height: 0%;
     }
     &:hover {
       color: white;
     }
   `;
  return (
    <>
    <HeroSection>
 
          <Container>
            <MainHeading>E-commerce</MainHeading>
            <HeroText>
            Dear Merchants<br></br><br></br>
Achieving an effective industry customer experience for your e-commerce store from anywhere. Shifting the consumer-brand relationship. The evolving customer experience will be driven not by the brand, but by a customer empowered in their choices.

            </HeroText>
            <ButtonWrapper>
            <a href="http://127.0.0.1:5501/index.html">
                <HeroButton>Sell like Crazy</HeroButton>
              </a>
            </ButtonWrapper>
          </Container>
        </HeroSection>
         
        <Container2>
      <Wrapper>
      <Left><SubTitle>THE PROBLEM</SubTitle> <br></br>
        {/* <Image src={Image2} /> */}
        People experience or user/customer experience is key to a successful e-Commerce website. Shoppers expect a similar if not same experience as one they would get in a brick and mortar store. The flow of the website, the segmentation of the website and the retail personalization of products based on the shopper’s preferences are imperative. Merchants and e-commerce stores now want to leverage the easy-to-use  tools and adopt borderless traffic.
      </Left>
      <Right>
        <SubTitle>THE SOLUTION</SubTitle>
        <Desc>
        At FREDMIND, We open your e-commerce store to a world of possibilities by providing the tools and framework to enjoy seamless traffic. With our easy-to-use tools and software,  Let your customers pay you the easy way with People's experience.
Providing tailored experiences based on geography or contextual placements is a great starting point to building more sophisticated use cases
    
        </Desc>
      </Right>
      </Wrapper>
    </Container2>
        
          {/* <Cta split /> */}
        </>
  )
}

export default Ecommerce