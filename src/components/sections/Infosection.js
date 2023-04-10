import React from 'react'
import styled from 'styled-components'

const Infosection
 = (LightBg,id,imgStart,topline,LightText, headline,darkText,desription,img,alt ) => {
  return ( 
    <>
        <InfoContainer LightBg={LightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine >{topline}</TopLine>
                            <Heading LightText={LightText}>{headline}</Heading>
                            <Subtitle darkText = {darkText}>{desription}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <Imgwrap>
                         <img src={img} alt={alt} />
                        </Imgwrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>   
    </>
  )
}


export default Infosection

//STYLED COMPONENT

const InfoContainer = styled.div`
    color:#fff;
    background: ${({LightBg}) =>
(LightBg ? '#f9f9f9' : '010606')};

@media screen and (max-width: 768px) {
    padding:100px 0;
}
` 
const InfoWrapper = styled.div`
    display:grid;
    z-index:1;
    height:860px;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding: 0 24px;
    justify-content: center;       
`
const InfoRow = styled.div`
   display: grid;
   grid-auto-column: minmax(auto, 1fr);
   align-items: center;
   grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'`: `'col1 col2'` )};

   @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2' `: `'col1' 'col1' 'col2' 'col2'` )};
}
`
const Column1 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area:col1;
`
const Column2 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area:col1;
`
const TextWrapper = styled.div`
   max-width:540px;
   padding-top:0;
   padding-bottom:60px;  
`
const TopLine = styled.p`
    color:#01bf71;
    font-size: 16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;
`
const Heading = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color: ${({LightText}) =>
(LightText ? '#f7f8fa' : '010606')};

@media screen and (max-width: 480px) {
    font-size:32px;
}
`
const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color: ${({darkText}) =>
    (darkText ? '#f7f8fa' : '010606')};   
`

// const Btnwrap = styled.div`
//     display:flex;
//     justify-content:flex-start;
// `
const Imgwrap = styled.div`
    max-width:555px;
    height:100%;
`
const Img = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    paddindg-right:0;
`