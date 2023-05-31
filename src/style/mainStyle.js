import styled from "styled-components";
// SERVICE AND USECASE STYLED COMPONENTS

export const Container4 = styled.div`
 
  font-family: 'Merriweather Sans', sans-serif;
  }
`;
export const Wrapper = styled.div`
  margin:5px;
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
  border:2px solid #fff;
  padding:50px;
  border-radius:5px;
  text-align:center;
 
  @media only screen and (max-width: 480px) {
	padding: 30px 20px;
	width: 70%;
  }
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
  color: #34eb37;

`;

export const Desc = styled.p`
  font-size: 20px;
  margin-top: 30px;
`;

//STYLED COMPONENTS
export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 3.5rem);
	margin-bottom: 1rem;
	letter-spacing: 2px;
  	color:#34eb37;
	text-align: center;
	font-family: 'Merriweather Sans', sans-serif;
	font-weight:600;
`;
export const MainHeading2 = styled.h1`
	font-size: clamp(2rem, 6vw, 2rem);
	margin-bottom: 1rem;
	letter-spacing: 1px;
  	color: #34eb37;
	  font-family: 'Merriweather Sans', sans-serif;
	text-align: center;
	
`;
export const HeroBg = styled.div`
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	width:100%;
	height:100%;
	overflow:hidden;
`
export const VideoBg = styled.video`
	width:100%;
	height:100%;
	-o-bject-fit:cover;
	object-fit:cover;
`
export const Container = styled.div`
	width: 90%;
	max-width: 1200px;
	position:relative;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	font-family: 'Merriweather Sans', sans-serif;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;


export const HeroSection = styled.section`
  height:100vh;
	padding-top: clamp(70px, 25vh, 220px);
	align-items:center;
	position:relative;


`;
 export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: 20px;
	line-height: 24px;
	font-family: 'Merriweather Sans', sans-serif;
	text-align: center;
	font-weight:600;
	// color: #fff;
`;
export const HeroText2 = styled.p`
margin-bottom: 35px;
font-size: 22px;
line-height: 34px;
font-family: 'Merriweather Sans', sans-serif;
font-weight:400;
`;
export const Line = styled.hr`
border: 0;
height: 1px;
background: #333;
background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;
