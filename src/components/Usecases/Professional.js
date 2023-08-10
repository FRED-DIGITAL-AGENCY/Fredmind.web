import React from 'react'
import styled from 'styled-components'
import{ Wrapper, Container2, Left, Right, Desc, SubTitle} from  "../../style/usecases.style";

const Professional = () => {
     //STYLED COMPONENTS
     const MainHeading = styled.h1`
     font-size: clamp(1rem, 6vw, 3.5rem);
     margin-bottom: 2rem;
     width: 100%;
     letter-spacing: 4px;
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
     font-size:18px;
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
            <MainHeading>Professionals</MainHeading>
            <HeroText>
            Dear Professionals<br></br><br></br>
Small and Medium-sized Enterprises (SMEs) are powerful, profitable and sustainable when there's business structure. Digital Tools, Platforms and Channels  help you operate and manage your clients from anywhere, to enable focus on providing value.

            </HeroText>
            <ButtonWrapper>
            <a href="http://127.0.0.1:5501/index.html">
                <HeroButton>Ready to Scale</HeroButton>
              </a>
            </ButtonWrapper>
          </Container>
        </HeroSection>
        <Container2>
      <Wrapper>
      <Left><SubTitle>THE PROBLEM</SubTitle> <br></br>
        {/* <Image src={Image2} /> */}
        Your ability to intentionally track your daily expenses, draw a monthly budget and map out your revenue streams and operational cost with proper structuring is the beginning of sustainable and successful business anywhere across the world. The conventional way has always been a hassle to professionals. 
      </Left>
      <Right>
        <SubTitle>THE SOLUTION</SubTitle>
        <Desc>
        Professional, We set up proper management structure, increase your revenue and reduce operational cost, set up the right pricing for your product and services, coordinate your customer journey through sales funnels  and focus on providing tools that enable you to manage your growth journey anywhere in the world.

        </Desc>
      </Right>
      </Wrapper>
    </Container2>
         
        
          {/* <Cta split /> */}
        </>
  )
}

export default Professional