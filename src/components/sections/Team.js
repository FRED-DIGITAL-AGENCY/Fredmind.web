import React from "react";
import styled from "styled-components";
import Image from '../../assets/images/staff1.jpg'

const Container = styled.div`
  padding: 5%;
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
  margin: 5%;
  border-radius:10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
//   -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
//   box-shadow: 0px 0px 0px -5px #a8a4a4;
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
`;
const MemberName = styled.div`
  color: #fff;
  text-align: center;
  padding: 2% 2%;
`;

const TeamPosition = styled.div`
  color: #34eb37;
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