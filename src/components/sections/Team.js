import React from "react";
import styled from "styled-components";
import Image from '../../assets/images/staff1.jpg'

const Container = styled.div`
  padding: 5%;
  font-family: 'Merriweather Sans', sans-serif;
  font-weight:700;
  
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
`;

const Card = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  margin:5%;
  margin-top:60px;
  border-radius:10px;
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
  color: #fff;
  text-align: center;
  padding: 2% 2%;
`;

const TeamPosition = styled.div`
  color: #34eb37;
  margin-bottom:100px;
`;

const Team = () => {
  return (
    <>

    <Container>
      <Wrapper>

        <Card>
          <CardImage src={Image} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Marketing Specialist</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={Image} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Project Manager</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={Image} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Web Designer</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={Image} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Web Designer</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={Image} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Web Designer</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={Image} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Web Designer</TeamPosition>
          </TextWrapper>
        </Card>
      </Wrapper>
    </Container>
    </>
  );
};

export default Team;