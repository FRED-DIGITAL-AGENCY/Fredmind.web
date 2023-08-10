import React from 'react';
import styled from 'styled-components';
import { useState, } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader"

// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';


const Services = () => {
	const [loading, setLoading] = useState(true);
  return (
    <>
	
<HeroSection>
			<Container>
				<MainHeading>What We Do</MainHeading>
				<HeroText>Coming soon
				</HeroText>
				<PacmanLoader
					loading={loading}
					size={40}
					color="#34eb37"	
				/>
				
			</Container>
		</HeroSection>
     
     
    
      <Cta split />
    </>
  );
}

export default Services;



//STYLED COMPONENTS
const MainHeading = styled.h1`
	font-size: clamp(2rem, 6vw, 3.5rem);
	margin-bottom: 2rem;
	width: 100%;
	letter-spacing: 4px;
  color: #34eb37;
  font-family: 'Merriweather Sans', sans-serif;
	text-align: center;
`;
const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	flex-direction: column;
	align-items: center;
	font-family: 'Merriweather Sans', sans-serif;
	justify-content: center;
	display: flex;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
const HeroSection = styled.section`
	height: 100vh;

	padding-top: clamp(60px, 25vh, 200px);
`;
 const HeroText = styled.p`
	font-weight:400;
	font-size: 25px;
	line-height: 2px;
	text-align: center;
	letter-spacing: 1px;
	color: #fff;
	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  	display: flex;
`;



