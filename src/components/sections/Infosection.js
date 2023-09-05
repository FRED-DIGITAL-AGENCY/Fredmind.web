import React from "react";
import styled from "styled-components";
import Image2 from '../../assets/images/vision.jpg'
import Image3 from '../../assets/images/vision.jpg'


const Container = styled.div`
  margin: 40px;
  border-radius:10px;
  font-family: 'Merriweather Sans', sans-serif;
  }
`;
const Wrapper = styled.div`

  display: flex;
  border-radius:10px;
  font-family: 'Merriweather Sans', sans-serif;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
    
  }
`;
const Left = styled.div`
  width: 50%;
  text-align:center;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  margin-left:20%;
  width: 50%;
  border-radius: 20px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column ;
  align-items:center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 200px;
    margin-top:15px;
    height:50%;
    box-shadow:-10px 5px 20px 10px #000;
     padding:50px;
     border-radius:5px;
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     text-align:center;
       
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #34eb37;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #;
  margin-top: 30px;
`;

const Infosection = () => {
  return (
    <>
    <Container>
      <Wrapper>
      <Left>
        <Image src={Image2} />
      </Left>
      <Right>
        <SubTitle>Our Mission</SubTitle>
        <Desc>
        Applying Our time, talent, tools and strategies to Accelerating Business Growth for Peak Profit. Establish Your Online Presence: Attract, Nurture, Convert & Sustain Your Brand
        </Desc>
      </Right>
      <Left>
        <br></br>
      <Image src={Image3} />
      </Left>
      <Right>
      <SubTitle>Our Vision</SubTitle>
       <Desc>
       Our vision is to be a household Creative agency in Africa leading the frontier of Business Growth & technological advancement 
        </Desc>
     
     
      </Right>
      </Wrapper>
    </Container>
    </>
  );
};

export default Infosection


