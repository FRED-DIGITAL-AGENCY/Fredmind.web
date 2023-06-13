import React from 'react'
import styled from 'styled-components'
import{ Wrapper, Container2, Left, Right, Desc, SubTitle} from  "../../style/usecases.style";

const Startup = () => {
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
     text-align:start;
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
  return (
    <>
    <HeroSection>
 
          <Container>
            <MainHeading>Start-Ups</MainHeading>
            <HeroText>
            Dear Entrepreneurs<br></br><br></br>

We are Bridging The Gap Between You & Your Customers by providing a glove-fit solution tailored towards your business growth & Sales 

Accelerating Growth formula for you. 

            </HeroText>
            <ButtonWrapper>
              {/* <Link to="#">
                <Button>Get Started</Button>
              </Link> */}
              <HeroButton>Start a Project</HeroButton>
            </ButtonWrapper>
          </Container>
        </HeroSection>
         
        <Container2>
      <Wrapper>
      <Left><SubTitle>THE PROBLEM</SubTitle> <br></br>
        {/* <Image src={Image2} /> */}
        African Businesses & Entrepreneurs are constantly faced with several business limitations ranging from Structure, Sales,  Growth and scalability. Entrepreneurs struggle with reaching larger audiences because of structure and Sales.
      </Left>
      <Right>
        <SubTitle>THE SOLUTION</SubTitle>
        <Desc>
        At FREDMIND, we constantly look for innovative ways to solve these problems. Accelerating the end-to-end growth formula for individuals and businesses is the core of what we do and why we exist. We provide powerful business tools to enable you to sell more to reach your customers anywhere in the world. Whatever service you provide. We make Sales possible for you.


        </Desc>
      </Right>
      </Wrapper>
    </Container2>
        
          {/* <Cta split /> */}
        </>
  )
}

export default Startup