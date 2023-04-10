import React from 'react';
import styled from 'styled-components';
import Video from '../../src/assets/Video/video1.mp4'
import Infosection from '../components/sections/Infosection';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Company = () => {

  return (
    <>
<HeroSection>
	<HeroBg>
		<VideoBg autoPlay loop muted src={Video} type='Video1/mp4' />
	</HeroBg>
			<Container>
				<MainHeading>Company</MainHeading>
				<HeroText>
        We Are Africa's Digital Marketing "Silicon Valley, accelerating conscious growth marketing strategies by leveraging the use of technology and innovatively building financial funnels for African millennial and sharpening the global space by minting social currency for business and brands We help your business, Brand or organization go viral, Gain traction and drive conversion, implement Proven marketing strategies for peak profit .
				</HeroText>
				{/* <ButtonWrapper>
					
					<HeroButton>Find more</HeroButton>
				</ButtonWrapper> */}
				
			</Container>

		</HeroSection>
		{/* <Infosection
        
          /> */}
		<br></br>
		<br></br>
     
     
    
      <Cta split />
    </>
  );
}
export default Company;


//STYLED COMPONENTS
const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	width: 100%;
	letter-spacing: 4px;
  	color: #5DD435;
	text-align: center;
`;
const HeroBg = styled.div`
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	width:100%;
	height:100%;
	overflow:hidden;
`
const VideoBg = styled.video`
	width:100%;
	height:100%;
	-o-bject-fit:cover;
	object-fit:cover;
	background:#232a34
`
// const Button = styled.button`
// 	border-radius: 4px;
// 	background: none;
// 	white-space: nowrap;
// 	padding: 10px 20px;
// 	font-size: 16px;
//   font-weight:600;
// 	color: #fff;
// 	outline: none;
//   border:none;
// 	cursor: pointer;
// 	overflow: hidden;
// 	position: relative;
// 	&:before {
// 		content: '';
// 		position: absolute;
// 		top: 50%;
// 		left: 50%;
// 		transform: translate(-50%, -50%);
// 		z-index: -1;
// 		transition: all 0.6s ease;
// 		width: 100%;
// 		height: 0%;
// 		transform: translate(-50%, -50%) rotate(45deg);
// 	}
// 	&:hover:before {
// 		height: 500%;
// 	}
// 	&:hover {
//     border:2px solid #fff;
// 		color: black;
// 	}
// `;

const Container = styled.div`
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


const HeroSection = styled.section`
	height: 100vh;
  font-weight:700;
	padding-top: clamp(70px, 25vh, 220px);
`;
 const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;

//  const ButtonWrapper = styled.div`
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	flex-flow: wrap;
// 	gap: 0.5rem;
// `;

// const HeroButton = styled(Button)`
// 	color: #fff;
// 	background-color: #5DD435;
// 	&:before {
// 		height: 500%;
    
// 	}
// 	&:hover:before {
// 		height: 0%;
// 	}
// 	&:hover {
// 		color: white;
// 	}
// `;

