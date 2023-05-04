import React from 'react';
import Video from '../../src/assets/Video/video1.mp4'
import Infosection from '../components/sections/Infosection';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import {HeroSection, HeroBg, VideoBg, Container,MainHeading, HeroText} from "../../src/style/mainStyle";

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


