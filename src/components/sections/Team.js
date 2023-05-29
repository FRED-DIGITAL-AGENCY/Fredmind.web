import React from "react";
import styled from "styled-components";
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import Image1 from '../../assets/images/Yomi.jpg'
import Image2 from '../../assets/images/emmy.jpg'
import Image3 from '../../assets/images/Tomi.jpg'
import Image4 from '../../assets/images/Fred.jpg'
import Image5 from '../../assets/images/richard.jpg'
import Image6 from '../../assets/images/K.jpg'


const Container = styled.div`
  padding: 5%;
  font-family: 'Merriweather Sans', sans-serif;
  
  
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
`;
const Icon = styled.div`
  // width: '1.4rem';
  margin-left:5px;
  display:flex;
  &:hover{
    cursor:pointer;
  }
  
`

const Card = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  margin:5%;
  margin-top:60px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius:20px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // background:red;
  margin:-8.5px;
`;
const MemberName = styled.div`
  // color: #fff;
  text-align: center;
  padding: 2% 2%;
`;

const TeamPosition = styled.div`
  color: #34eb37;
  margin-bottom:20px;
  text-align: center;
`;

const Team = () => {
  return (
    <>

    <Container>
      <Wrapper>

        <Card>
          <CardImage src={Image1} />
          <TextWrapper>
            <MemberName> Yomi Richard</MemberName>
            
            <TeamPosition>Digital Marketer</TeamPosition>
          </TextWrapper>
  
            <Icon>
								<FaTwitter />
								<FaLinkedin />
							</Icon>

        </Card>
        <Card>
          <CardImage src={Image2} />
          <TextWrapper>
            <MemberName> Emmanuel Ochigbo</MemberName>
            <TeamPosition>Senior Software Engineer</TeamPosition>
          </TextWrapper>
          <Icon>
								<FaTwitter />
								<FaLinkedin />
							</Icon>
        </Card>
        <Card>
          <CardImage src={Image3} />
          <TextWrapper>
            <MemberName>Tominiyi Alabi</MemberName>
            <TeamPosition>Digital Marketer</TeamPosition>
          </TextWrapper>
          <Icon>
								<FaTwitter />
								<FaLinkedin />
							</Icon>
        </Card>
        <Card>
          <CardImage src={Image4} />
          <TextWrapper>
            <MemberName>Fred Ogbole</MemberName>
            <TeamPosition>Founder + CEO</TeamPosition>
          </TextWrapper>
          <Icon>
								<FaTwitter />
								<FaLinkedin />
							</Icon>
        </Card>
        <Card>
          <CardImage src={Image5} />
          <TextWrapper>
            <MemberName>Richard Dexter</MemberName>
            <TeamPosition>Chief Technology Officer</TeamPosition>
          </TextWrapper>
          <Icon>
								<FaTwitter />
								<FaLinkedin />
							</Icon>
        </Card>
        <Card>
          <CardImage src={Image6} />
          <TextWrapper>
            <MemberName>Olusegun Caleb</MemberName>
            <TeamPosition>Software Engineer</TeamPosition>
          </TextWrapper>
          <Icon>
								<FaTwitter />
								<FaLinkedin />
							</Icon>
        </Card>
      </Wrapper>
    </Container>
    </>
  );
};

export default Team;