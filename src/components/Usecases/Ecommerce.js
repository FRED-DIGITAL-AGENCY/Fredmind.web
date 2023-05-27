import React from 'react'
import styled from 'styled-components'

const Ecommerce = () => {
     //STYLED COMPONENTS
     const MainHeading = styled.h1`
     font-size: clamp(2.3rem, 6vw, 4.5rem);
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
     font-size: 20px;
     line-height: 24px;
     text-align: start;
     letter-spacing: 2px;
     color: #fff;
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tellus ut purus sodales interdum. Suspendisse condimentum sem mi, quis
            </HeroText>
            <ButtonWrapper>
              {/* <Link to="#">
                <Button>Get Started</Button>
              </Link> */}
              <HeroButton>Find more</HeroButton>
            </ButtonWrapper>
          </Container>
        </HeroSection>
         
         
        
          {/* <Cta split /> */}
        </>
  )
}

export default Ecommerce