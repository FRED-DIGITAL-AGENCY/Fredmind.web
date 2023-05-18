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
import {HeroSection, HeroBg, VideoBg, Container,MainHeading,MainHeading2, HeroText} from "../../src/style/mainStyle";

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
			</Container>
		</HeroSection>
		<Infosection />
		<hr></hr>
		  <MainHeading2>Meet our team</MainHeading2>
		  <HeroText>
		  At FREDMIND, We're a team of creative Leaders who believe in the power of the word “IDEAS DON’T RULE THE WORLD, EXECUTED IDEAS DO”. We are operating a decentralized system. No politics, or unnecessary title-hoarding. We are obsessed with growth and providing digital solutions for businesses.	
			</HeroText>
		    <Team />
		<br></br>
		<br></br>
     
     
    
      <Cta split />
    </>
  );
}
export default Company;


