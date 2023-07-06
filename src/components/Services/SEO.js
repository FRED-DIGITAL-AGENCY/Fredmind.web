import React from 'react'
import styled from 'styled-components';
import{ Wrapper, Container4, Left, Right, Desc } from  "../../style/mainStyle";
import Image from '../elements/Image';



const SEO = () => {
       //STYLED COMPONENTS
       const MainHeading = styled.h1`
       font-size: clamp(1rem, 2vw, 3rem);
       margin-bottom: 2rem;
       width: 100%;
       letter-spacing: 2px;
       color: #34eb37;
       text-align: start;
       font-family: 'Merriweather Sans', sans-serif;
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
       font-family: 'Merriweather Sans', sans-serif;
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
       text-align: start;
      //  letter-spacing: 2px;
       color: #7e807f;
     `;
     
      const ButtonWrapper = styled.div`
       width: 100%;
       display: flex;
       justify-content: start;
       flex-flow: wrap;
       gap: 0.5rem;
     `;
     
     const HeroButton = styled(Button)`
       color: #000;
       &:before {
         background-color: #34eb37;
         height: 500%;
         
       }
       &:hover:before {
         height: 0%;
       }
       &:hover {
         color: white;
       }
     `;
     const FeatureSection = styled.section`
     padding-top: clamp(70px, 25vh, 220px);
     display:flex;
     justify-content:space-between;
     margin:5%;
     @media only screen and (max-width: 480px) {
      display:flex;
      flex-direction :column;
      margin:0;
  
      
      }

   `;
   const FeatureContainer = styled.div`
   width: 100%;
   max-width: 1300px;
   margin-right: auto;
   margin-left: auto;
   font-family: 'Merriweather Sans', sans-serif;
   padding: 0 50px;
 `;
   const FeatureText  = styled.p`
   font-size: 30px;
   line-height: 26px;
   font-weight:600;
   text-align: center;
   margin-right:250px;
   letter-spacing: 1px;
   
 `;
 const FeatureText2  = styled.p`
 font-size: 16px;
 line-height:20px;
 text-align: start;
 letter-spacing: 1px;

`;
 const FeatureBoxContainer = styled.div`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction:row;
      height: auto;
  width: 100%;
  // margin:5%;
  margin-right:90px;
  align-items: center;

  @media only screen and (max-width: 480px) {
    // padding: 30px 20px;
    width: 180px;
    display:flex;
    flex-direction:row;
    margin-left:100px;
    
  }
 `;

 const FeatureBox = styled.div`
 width: 200px;
 height:200px;
  padding:50px;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  box-shadow:-10px 5px 20px 10px #000;
  text-align:center;
       margin:5px;
`;
const FeatureBox2 = styled.div`
width: 200px;
height:200px;
color:#000;
  background-color:#34eb37;
  padding:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-weight:600;
  border-radius:5px;
  text-align:center;
       margin:10px;
       
`;
  return (
    <>
    <HeroSection>
 
          <Container>
            <MainHeading><span style={{color:"#fff",}}>SEO Services</span> <br></br>Boost Your Online Visibility - Expert Search Engine Optimization (SEO) Services for Outstanding Results! 
</MainHeading>
            <HeroText>
            In a digital world driven by search engines, the key to success depends on securing top rankings, dominating search engine results, attract targeted traffic and skyrocket your online visibility.
            </HeroText>
            <ButtonWrapper>
            <a href="http://127.0.0.1:5501/index.html">
                <HeroButton>Start a project</HeroButton>
              </a>
            </ButtonWrapper>
          </Container>
        </HeroSection>
           <Container4>
      <Wrapper>
      <Left>
      Catapult Your Website to the Top - Unleash the Power of Search Engine Optimization!

      </Left>
      <Right>
        <Desc>
        -Our cutting-edge Search Engine Optimization (SEO) solutions are designed to propel your website to new heights.<hr></hr>  We understand that SEO is not just about optimizing for search engines; it's about delivering a remarkable user experience, providing valuable content, and outranking your competition

        </Desc>
      </Right>
      </Wrapper>
    </Container4>
    <FeatureSection>
          <FeatureContainer>
            <FeatureText> <span style={{color: "#34eb37"}}>Our </span>Services </FeatureText>
            <FeatureText2>
            With our team of SEO experts by your side, we'll dive deep into your website, conducting comprehensive keyword research and analyzing your competitors. Armed with this invaluable knowledge, we'll optimize your website's on-page elements, ensuring every tag, heading, and piece of content aligns with search engine algorithms and captivates your audience.

<span style={{color: "#34eb37"}}>Our SEO prowess extends beyond on-page optimization. We'll craft a strategic off-page SEO plan, building high-quality backlinks and establishing your brand as a trusted authority in your industry.
</span> Our white-hat techniques will bolster your online presence, boost your domain authority, and secure top rankings that attract organic traffic.

            </FeatureText2>
            {/* <HeroButton>Start a Project</HeroButton> */}
            </FeatureContainer>
            <FeatureBoxContainer>

            </FeatureBoxContainer>
         </FeatureSection>
         <FeatureSection>
          <FeatureContainer>
           
            </FeatureContainer>
            <FeatureBoxContainer>
            <FeatureText> <span style={{color: "#34eb37"}}>SEO </span>Services </FeatureText>
            <FeatureText2>
            Content is king, and we'll create engaging, informative, and keyword-optimized content that resonates with your target audience. Our content strategies will position you as an industry authority and help you rank higher in search results. We'll also leverage off-page SEO techniques, such as link building and social media integration, to enhance your website's credibility and visibility across the web.


<span style={{color: "#34eb37"}}>We provide meticulous monitoring and data analysis, we'll track the performance of your SEO campaigns, providing detailed reports and insights to measure success and drive continuous improvement. Our goal is to deliver measurable results, increase your organic traffic, and generate qualified leads that convert into loyal customers.
Don't let your website get lost in the vast digital landscape. Partner with us for expert SEO services, and together, we'll ignite your online presence, dominate search engine rankings, and fuel your business growth.

</span> Ready to unlock the full potential of SEO for your business? Contact us today, and let's embark on a transformative SEO journey that sets you apart from the competition and drives sustainable success.

            </FeatureText2>
            </FeatureBoxContainer>
         </FeatureSection>
          {/* <Cta split /> */}
        </>
        
  )
}

export default SEO