import React from 'react';
import styled, { keyframes } from 'styled-components';

const transition = keyframes`
  1%, 20% {opacity: 1;}
  20%, 25% {opacity: .7;}
  25%, 30% {opacity: .1;}
  30%, 33% {opacity: 0;}
  33%, 100% {opacity: 0;}
  `;

const Container = styled.div`
`;

const Slide = styled.div`
  position: absolute;
  display:block;
  color:white;
  opacity: 0;
  height: 100%;
  width: 95%;
  justify-content: center;
  text-align: center;
  animation: 48s ${transition} linear infinite 0s; /* 6 second per slide, 3 slides, total 18s */
  animation-delay: ${props => props.order * 12 + 's'}; /* use the order prop as a multiplicator to have each slide appear/disappear successively */
`;

const fontFamilyForTitle = "'Montserrat', 'Times New Roman', serif";
const fontFamilyForTopText = "'Alegreya', 'Times New Roman', serif";

let BottomText = {};
let TopText = {};
let Title = {};

if (window.screen.availWidth < 991){
  TopText = styled.div`
    margin-bottom: 3px;
    font-size: 26px !important;
    font-weight: 300 !important;
    letter-spacing: 6px !important;
    font-style: italic !important;
    font-family: ${fontFamilyForTopText} !important;
  `;

  Title = styled.div`
    font-size: 36px !important;
    font-weight: 400 !important;
    letter-spacing: 6px !important;
    line-height: 52px !important;
    font-family: ${fontFamilyForTitle} !important;
  `;

  BottomText = styled.div`
    margin-top: 10px;
    font-size: 17px !important;
    font-weight: 300 !important;
    font-style: italic !important;
    font-family: ${fontFamilyForTopText} !important;
  `;


} else {
  TopText = styled.div`
    margin-bottom: 3px;
    font-size: 28px !important;
    font-weight: 400 !important;
    letter-spacing: 11px !important;
    font-style: italic !important;
    font-family: ${fontFamilyForTopText} !important;
  `;

  Title = styled.div`
    font-size: 76px !important;
    font-weight: 400 !important;
    letter-spacing: 11px !important;
    line-height: 91px !important;
    font-family: ${fontFamilyForTitle} !important;
  `;

  BottomText = styled.div`
    margin-top: 10px;
    font-size: 28px !important;
    font-weight: 400 !important;
    font-style: italic !important;
    font-family: ${fontFamilyForTopText} !important;
  `;

}



const Splash = function(props){
  const slides = props.slides.map((slide,i) => {
    return <Slide key={i} background={slide.background} order={i}>
         <TopText>{slide.topText}</TopText>
         <Title>{slide.title}</Title>
         <BottomText>{slide.bottomText}</BottomText>
      </Slide>;
  });
  return <Container>{slides}</Container>;
};


export {Splash};
