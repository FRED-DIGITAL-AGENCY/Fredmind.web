import React from 'react';
import Video from '../../src/assets/Video/video1.mp4'
import Infosection from '../components/sections/Infosection';
import Team from '../components/sections/Team';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import {HeroSection, HeroBg, VideoBg, Container,MainHeading,MainHeading2, HeroText, HeroText2, Line} from "../../src/style/mainStyle";

const Company = () => {

	
  return (
    <>
	
<HeroSection>
	<HeroBg>
		<VideoBg autoPlay loop muted src={Video} type='Video1/mp4' />
	</HeroBg>
			<Container>
				<MainHeading>Who We Are</MainHeading>
				<HeroText>
				Introducing Fredmind Digital AGENCY LTD – your gateway to dynamic digital excellence.<br></br>

We are a digital solutions powerhouse, specializing in the creation of impactful strategies that fuel the expansion of B2C and B2B brands through customer acquisition.
Our alliance extends to visionary leaders, encompassing Founders, Entrepreneurs, CEOs, C-level Executives, CMOs, and Growth Marketers. Together, we lay the groundwork and framework for a customer growth marketing strategy that stands strong.




				</HeroText>
			</Container>
		</HeroSection>
		  <MainHeading2>Team of Creatives</MainHeading2>
		  <HeroText2>
		  At FREDMIND, We're a team of creative Leaders who believe in the power of the word “IDEAS DON’T RULE THE WORLD, EXECUTED IDEAS DO”. We are operating a decentralized system. No politics, or unnecessary title-hoarding. We are obsessed with growth and providing digital solutions for businesses.	
			</HeroText2>
		    <Team />

			<Line></Line>
			<br></br>
			<Infosection />
		<br></br>
		<br></br>
     
     
    
      <Cta split />
    </>
  );
}
export default Company;


