import React from 'react';
import styled from 'styled-components';
import { useState, CSSProperties } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader"
import Image from '../components/elements/Image';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const override: CSSProperties = {
  display: "flex",
  margin: "0 auto",
  marginTop:"10px"
};
const Products = () => {
	const [loading, setLoading] = useState(true);
  return (
    <>
	
<HeroSection>
<Button
onClick={()=> setLoading(!loading)}></Button>
			<Container>
      {/* <Image
                className="has-shadow"
                src={require('./../assets/images/hero-pattern-bg.png')}
                alt="Hero"
                width={896}
                height={504} /> */}
      {/* <HeroImage className="pattern" src="./.././../../assets/images/hero-pattern=bg.png" /> */}
				<MainHeading>Product</MainHeading>
				<HeroText>Coming soon
					<PacmanLoader
					loading={loading}
					size={60}
					cssOverride={override}
					color="white"
					
				/>

				</HeroText>
				
				<ButtonWrapper>
					{/* <Link to="#">
						<Button>Get Started</Button>
					</Link> */}
					{/* <HeroButton></HeroButton> */}
				</ButtonWrapper>
			</Container>
		</HeroSection>
     
     
    
      {/* <Cta split /> */}
    </>
  );
}

export default Products;



//STYLED COMPONENTS
const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	width: 100%;
	letter-spacing: 4px;
  color: #5DD435;
	text-align: center;
`;

const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
  font-weight:600;
	color: #fff;
	outline: none;
  border:none;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
    border:2px solid #fff;
		color: black;
	}
`;

const Container = styled.div`
	width: 100%;
	max-width: 1300px;
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
// const Image = styled.img`
// 	z-index: 10;
// 	width: 100%;
// 	position: absolute;
// 	left: 0;
// 	object-fit: cover;
// 	&.pattern {
// 		height: 100%;
// 		max-height: 100%;
// 		top: 0;
// 	}
// `;
 const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;

 const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

const HeroButton = styled(Button)`
	color: #fff;
	&:before {
		background-color: #5DD435;
		height: 500%;
    
	}
	&:hover:before {
		height: 0%;
	}
	&:hover {
		color: white;
	}
`;


