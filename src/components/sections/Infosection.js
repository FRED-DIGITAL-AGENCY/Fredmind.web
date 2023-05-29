import React from "react";
import styled from "styled-components";
import Image2 from '../../assets/images/vision.jpg'
import Image3 from '../../assets/images/vision.jpg'

const Container = styled.div`
margin-top: 100px;
margin-bottom: 150px;
// background-color:#fff;
margin: 40px;
  display: flex;
  border-radius:10px;
  font-family: 'Merriweather Sans', sans-serif;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
    
  }
`;
const Wrapper = styled.div`

  display: flex;
  border-radius:10px;
  font-family: 'Merriweather Sans', sans-serif;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
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
  @media only screen and (max-width: 480px) {J
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
        Applying Our time, talent, tools and strategies to create systems, products and building brands people will love and use.
        </Desc>
      </Right>
      <Left>
        <br></br>
      <Image src={Image3} />
      </Left>
      <Right>
      <SubTitle>Our Vision</SubTitle>
       <Desc>
        Our vision is to be a household digital agency in Africa leading the frontier of technological advancement.
        </Desc>
     
     
      </Right>
      </Wrapper>
    </Container>
    </>
  );
};

export default Infosection


