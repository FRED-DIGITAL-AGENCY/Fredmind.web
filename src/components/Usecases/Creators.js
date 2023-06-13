import React from 'react'
import styled from 'styled-components'
import{ Wrapper, Container2, Left, Right, Desc, SubTitle} from  "../../style/usecases.style";

const Creators = () => {
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
            <MainHeading>Creators</MainHeading>
            <HeroText>
            Dear Digital Creators <br></br><br></br>
Unlock creator monetization on your platform.
<br></br>
Whether you want to become a creator using content, video, audio, photos or even text in blog articles. We develop unique content specific for you. Our team of highly-skilled creators  know how to spin the right words, spot the audience for you & put you out they for peak performance
Share your thoughts, creativity. Unlock your Inner-Passion, Grow your community across Social Media to reach a larger audience. Build your Brand & business. 
Saving you time, money and stress.
<br></br>
Where Creators build the future.

            </HeroText>
            <ButtonWrapper>
              {/* <Link to="#">
                <Button>Get Started</Button>
              </Link> */}
              <HeroButton>Become a Creator</HeroButton>
            </ButtonWrapper>
          </Container>
        </HeroSection>
        <br></br><br></br><br></br><br></br>
        <Container2>
      <Wrapper>
      <Left>
        <SubTitle>THE PROBLEM</SubTitle> <br></br>
        {/* <Image src={Image2} /> */}
        African Creators are constantly faced with limitations of Consistently creating Quality Content be it on Youtube, Facebook, Instagram, Linkedin, Tiktok, etc ranging from content, video, audio, photos or even text in blog articles. Doing what you love without geographical restriction.
      </Left>
      <Right>
        <SubTitle>THE SOLUTION</SubTitle>
        <Desc>
        Become a creator leveraging on  easy-to-use tools and strategies workable globally. As a creator, your location should not be the reason you lose opportunities. With us, We Provide our time, talent & expertise, enjoy the accolade, you can achieve this from  anywhere
We go beyond enabling content creation for you, but make sure your clients stay

        </Desc>
      </Right>
      </Wrapper>
    </Container2>
              
        
          {/* <Cta split /> */}
        </>
  )
}

export default Creators