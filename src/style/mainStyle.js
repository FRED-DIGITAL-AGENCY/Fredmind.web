import styled from "styled-components";

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
	letter-spacing: 2px;
	font-weight:400;
	color: #fff;
`;