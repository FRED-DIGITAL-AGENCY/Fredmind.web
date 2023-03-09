import React from 'react'
// import Cta from '../components/sections/Cta';
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import Naira from 'react-naira';
import PropTypes from "prop-types";

const PricingCard = ({
    data,
    price,
    background,
    shadow = "#a0c5fa",
    buttonContent,
    subTitle,
    priceText,
    headerText,
  }) => {
    return (
        
      <MainContainer shadow={shadow}>
        <Header background={background}>{headerText}</Header>
        {price !== undefined && (
          <PricingContainer>
            <PriceContainer>
              {/* <CurrencyContainer>
                <span>{currency}</span>
              </CurrencyContainer> */}
              <Price>
                <span> <Naira>{price}</Naira></span>
              </Price>
            </PriceContainer>
            {subTitle && (
              <SubTitle>
                <h4>{subTitle}</h4>
              </SubTitle>
            )}
            {priceText && (
              <PriceText>
                <h5>{priceText}</h5>
              </PriceText>
            )}
          </PricingContainer>
        )}
       
        {data && (
          <DataContainer>
            <ul>
              {data.map((dt, index) => (
                <li key={index}>
                  {dt.value ? (
                    <FaCheck className="true" />
                  ) : (
                    <FaCheck className="true" />
                  )}
                  {dt.text}
                </li>
              ))}
            </ul>
          </DataContainer>
        )}
         {buttonContent && (
            <ButtonContainer>
              <Button>{buttonContent}</Button>
            </ButtonContainer>
          )}
      </MainContainer>

    //   
    );
    //  <Cta split />
  };
  
  
  const MainContainer = styled.div`
    width: 20rem;
    min-height: 40rem;
    height: max-content;
    // background-color: #ffffff;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    &:hover {
      box-shadow: 0 8px 26px -6px ${(props) => props.shadow};
      margin-bottom: 0.4rem;
    }
  `;
  
  const Header = styled.div`
    margin: 0.6rem;
    height: 4rem;
    // background-color: #ebf3fd;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
    font-weight: 600;
  `;
  
  const PricingContainer = styled.div`
    // height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // margin-top: 3rem;
  `;
  
  const PriceContainer = styled.div`
    display: flex;
    color:#5DD435;
  `;
  const Price = styled.div`
    span {
      font-size: 3rem;
    }
  `;
  const SubTitle = styled.div`
    text-transform: uppercase;
    text-align: center;
    margin: 0.4rem 0 1.3rem 0;
    
  `;
  
  const PriceText = styled.div`
    display: flex;
    justify-content: center;
    // width: 60%;
    text-align: center;
    font-weight: 100;
    color:#5DD435;
  `;
  
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  `;
  
  const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 0.5rem;
    border: 0.1rem solid #5DD435;
    width: 90%;
    height: 3.5rem;
    background-color: transparent;
    color:#fff;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color:#5DD435;
      color: #000;
    }
  `;
  
  const DataContainer = styled.div`
    ul {
      list-style-type: none;
      li {
        display: flex;
        align-items: center;
        .true {
          color: #34f034;
          font-size: 1rem;
        }
        .false {
          color: #f54343;
        }
        svg {
          margin-right: 0.5rem;
          font-size: 0.8rem;
        }
        margin-bottom: 1rem;
      }
    }
  `
  
  PricingCard.propTypes = {
    data: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.oneOf(["y", "m"]).isRequired,
    buttonContent: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
  };

export default PricingCard