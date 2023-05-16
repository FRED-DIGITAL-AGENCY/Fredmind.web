import styled from "styled-components";

//STYLED COMPONENTS
export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	width: 100%;
	letter-spacing: 4px;
  	color: #5DD435;
	text-align: center;
`;
export const MainHeading2 = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	width: 100%;
	letter-spacing: 4px;
  	color: #5DD435;
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
	background:#232a34
`
export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	position:relative;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;


export const HeroSection = styled.section`
	height: 100vh;
  font-weight:700;
	padding-top: clamp(70px, 25vh, 220px);
`;
 export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;