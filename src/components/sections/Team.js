import React from "react";
import styled from "styled-components";
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import Image1 from '../../assets/images/Yomi.jpg'
import Image2 from '../../assets/images/emmy.jpg'
import Image3 from '../../assets/images/Tomi.jpg'
import Image4 from '../../assets/images/Fred.jpg'
import Image5 from '../../assets/images/richard.jpg'
import Image6 from '../../assets/images/K.jpg'
import Image7 from '../../assets/images/zaza.jpg'


const Container = styled.div`
  padding: 5%;
  font-family: 'Merriweather Sans', sans-serif;
  
  
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
`;
const IconBox = styled.div`
  display:flex;
  justify-content: center;
`
;
const Icon = styled.div`
  // width: '1.4rem';
  margin:20px;
  display:flex;
  justify-content: center;
 align-items:cnter;
  &:hover{
    cursor:pointer;
  }
  
`;
const Card = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  margin:5%;
  margin-top:80px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  margin-bottom:10px;
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
          <IconBox>
               <Icon>
								<FaTwitter />
                </Icon>
                <Icon>
								<FaLinkedin />
                </Icon>
							</IconBox>
        </Card>
        <Card>
          <CardImage src={Image2} />
          <TextWrapper>
            <MemberName> Emmanuel Ochigbo</MemberName>
            <TeamPosition>Senior Software Engineer</TeamPosition>
          </TextWrapper>
            <IconBox>
               <Icon>
								<FaTwitter />
                </Icon>
                <Icon>
								<FaLinkedin />
                </Icon>
							</IconBox>
        </Card>
        <Card>
          <CardImage src={Image3} />
          <TextWrapper>
            <MemberName>Tominiyi Alabi</MemberName>
            <TeamPosition>Digital Marketer</TeamPosition>
          </TextWrapper>
          <IconBox>
               <Icon>
								<FaTwitter />
                </Icon>
                <Icon>
								<FaLinkedin />
                </Icon>
							</IconBox>
        </Card>
        <Card>
          <CardImage src={Image4} />
          <TextWrapper>
            <MemberName>Fred Ogbole</MemberName>
            <TeamPosition>Founder + CEO</TeamPosition>
          </TextWrapper>
            <IconBox>
               <Icon>
								<FaTwitter />
                </Icon>
                <Icon>
								<FaLinkedin />
                </Icon>
							</IconBox>
        </Card>
        <Card>
          <CardImage src={Image5} />
          <TextWrapper>
            <MemberName>Richard Dexter</MemberName>
            <TeamPosition>Chief Technology Officer</TeamPosition>
          </TextWrapper>
          <IconBox>
               <Icon>
								<FaTwitter />
                </Icon>
                <Icon>
								<FaLinkedin />
                </Icon>
							</IconBox>
        </Card>
        <Card>
          <CardImage src={Image6} />
          <TextWrapper>
            <MemberName>Olusegun Caleb</MemberName>
            <TeamPosition>Software Engineer</TeamPosition>
          </TextWrapper>
          <IconBox>
               <Icon>
								<FaTwitter />
                </Icon>
                <Icon>
								<FaLinkedin />
                </Icon>
							</IconBox>
        </Card>
        <Card>
          <CardImage src={Image7} />
          <TextWrapper>
            <MemberName>Mark Johnson</MemberName>
            <TeamPosition>Video Content Creator</TeamPosition>
          </TextWrapper>
          <IconBox>
               <Icon>
								<FaTwitter />
                </Icon>
                <Icon>
								<FaLinkedin />
                </Icon>
							</IconBox>
        </Card>
<<<<<<< HEAD
        <Card>
          <CardImage src={Image7} />
          <TextWrapper>
            <MemberName>Mark Johnson</MemberName>
            <TeamPosition>Video Content Creator</TeamPosition>
          </TextWrapper>
          <IconBox>
               <Icon>
								<FaTwitter />
                </Icon>
                <Icon>
								<FaLinkedin />
                </Icon>
							</IconBox>
        </Card>
        <Card>
          <CardImage src={Image7} />
          <TextWrapper>
            <MemberName>Mark Johnson</MemberName>
            <TeamPosition>Video Content Creator</TeamPosition>
          </TextWrapper>
          <IconBox>
               <Icon>
								<FaTwitter />
                </Icon>
                <Icon>
								<FaLinkedin />
                </Icon>
							</IconBox>
        </Card>
      </Wrapper>

=======
      </Wrapper>
>>>>>>> f0ac14a1db66c5af0b0da2d790230ef24fb787ca
    </Container>
    </>
  );
};

export default Team;