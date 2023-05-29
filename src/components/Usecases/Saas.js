import React from 'react'
import styled from 'styled-components'
import{ Wrapper, Container2, Left, Right, Desc, SubTitle} from  "../../style/usecases.style";

const Saas = () => {
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
     justify-content: start;
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
            <MainHeading>SaaS
               <br></br>
               <br></br> (Software as a Service) </MainHeading>
            <HeroText>
            Dear Software Providers,
Roadmaps to Scaling your products and softwares with easy-to-use solutions crucial for product-led business growth, Position & Scale your product in the market providing borderless transactions.

            </HeroText>
            <ButtonWrapper>
              {/* <Link to="#">
                <Button>Get Started</Button>
              </Link> */}
              <HeroButton>Start your Journey</HeroButton>
            </ButtonWrapper>
          </Container>
        </HeroSection>
        <Container2>
      <Wrapper>
      <Left><SubTitle>THE PROBLEM</SubTitle> <br></br>
        {/* <Image src={Image2} /> */}
        African Products & Businesses have experienced challenges on product visibility, Reach and revenue. From bookkeeping to managing multiple transactions and financial affairs of your business. 
      </Left>
      <Right>
        <SubTitle>THE SOLUTION</SubTitle>
        <Desc>
        At FREDMIND, We are disciplined and focus on providing end-to-end financial structure that enable you to monitor and secure your growth journey anywhere in the world.   
        </Desc>
      </Right>
      </Wrapper>
    </Container2>
         
        
          {/* <Cta split /> */}
        </>
  )
}

export default Saas