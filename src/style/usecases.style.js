import styled from "styled-components";


export const Container2 = styled.div`
  margin: 40px;
  border-radius:10px;
  font-family: 'Merriweather Sans', sans-serif;
  }
`;
export const Wrapper = styled.div`

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
export const Left = styled.div`
width: 50%;
box-shadow:-10px 5px 20px 10px #000;
padding:50px;
border-radius:5px;
text-align:center;

@media only screen and (max-width: 480px) {
  padding: 30px 20px;
  width: 70%;
}
`;

export const Image = styled.img`
  margin-left:20%;
  width: 50%;
  border-radius: 20px;
`;

export const Right = styled.div`
width: 40%;
margin-left:5px;
text-align:center;
padding:50px;
border-radius:5px;
color:#000;
background-color:#34eb37;
@media only screen and (max-width: 480px) {
  margin-top:5px;
  width: 60%;
  
}
`;
export const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #fff;
  margin-top: 30px;
`;


export const Desc = styled.p`
  font-size: 20px;
  color: #;
  margin-top: 30px;
`;