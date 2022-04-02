/* import CSS*/
import '../../styles/components/Main/Carousel.css';
import leftArrow from '../../images/left_arrow.png';
import rightArrow from '../../images/right_arrow.png';
import pcImg1 from '../../images/slide1.png';
import mobileImg1 from '../../images/slide_Mobile1.png';
import pcImg2 from '../../images/slide2.png';
import mobileImg2 from '../../images/slide_Mobile2.png';
import pcImg3 from '../../images/slide3.png';
import mobileImg3 from '../../images/slide_Mobile3.png';
import pcImg4 from '../../images/slide4.png';
import mobileImg4 from '../../images/slide_Mobile4.png';
import pcImg5 from '../../images/slide5.png';
import mobileImg5 from '../../images/slide_Mobile5.png';

/* import Library */
import React, { Component, useRef, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Slider from 'react-slick';

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    height: 450px;
  }
  .slick-slide div {
    width: 100%;
    height: 450px;
    outline: none;
    cursor: pointer;
  }
  .slick-dots {
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 13px;
    line-height: 13px;
    position: absolute;
    top: 0;
    left: 0;
    width: 13px;
    height: 13px;
    content: '•';
    text-align: center;
    opacity: 0.25;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.9;
  }

  .slick-prev:before,
  .slick-next:before {
    width: 0;
    height: 0;
    border: 0;
    background: none;
    z-index: 1;
    cursor: pointer;
    content: '';
  }

  .slick-prev,
  .slick-next {
    font-size: 0;
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    background: none;
    z-index: 1;
    cursor: pointer;
    content: '';
  }

  .slick-prev {
    top: 50%;
    left: 20px;
  }

  .slick-next {
    top: 50%;
    right: 20px;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`;
const SlideTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  transform: translate(0%, -100%);
`;
const SlideTitle = styled.h1`
  padding: 0px;
  width: 100%;
  text-align: left;
  color: white;
  transform: translate(13%, 200px);
`;
const SlideText = styled.p`
  padding: 0px;
  width: 100%;
  text-align: left;
  color: white;
  transform: translate(13%, 210px);
`;

const pcImgs = [pcImg1, pcImg2, pcImg3, pcImg4, pcImg5];
const mobileImgs = [mobileImg1, mobileImg2, mobileImg3, mobileImg4, mobileImg5];

const items = [
  {
    id: 1,
    head: '러닝의 계절',
    main: '사뿐하게 CLOUD EX',
    pcImg: '../../images/slide1.png',
    mobileImg: '../../images/slide_Mobile1.png',
  },
  {
    id: 2,
    head: ' ',
    main: ' ',
    pcImg: '../../images/slide2.png',
    mobileImg: '../../images/slide_Mobile2.png',
  },
  {
    id: 3,
    head: '4월 나이키 정기세일',
    main: '51% 할인 + 즉시할인 만원 쿠폰 발급!',
    pcImg: '../../images/slide3.png',
    mobileImg: '../../images/slide_Mobile3.png',
  },
  {
    id: 4,
    head: '4월 아디다스 정기세일',
    main: '51% 할인 + 즉시할인 만원 쿠폰 발급!',
    pcImg: '../../images/slide4.png',
    mobileImg: '../../images/slide_Mobile4.png',
  },
  {
    id: 5,
    head: '~70% Off 로퍼, 슬립온',
    main: '가벼워지는 옷차림, 가격도 가볍게',
    pcImg: '../../images/slide5.png',
    mobileImg: '../../images/slide_Mobile5.png',
  },
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '30px',
        height: '30px',
      }}
      onClick={onClick}
    >
      <img
        className='arrow opacity'
        style={{ width: '100%', height: '100%' }}
        src={rightArrow}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '30px',
        height: '30px',
      }}
      onClick={onClick}
    >
      <img
        className='arrow opacity'
        style={{ width: '100%', height: '100%' }}
        src={leftArrow}
      />
    </div>
  );
}

export default function Carousel() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <StyledSlider {...settings}>
      {items.map((item, idx) => {
        return (
          <div key={item.id}>
            <SlideImg src={pcImgs[idx]} />
            <SlideTextWrapper>
              {/* <CSSTransition in={true} classNames='title' timeout={800}> */}
              <SlideTitle>{item.head}</SlideTitle>
              <SlideText>{item.main}</SlideText>
              {/* </CSSTransition> */}
            </SlideTextWrapper>
          </div>
        );
      })}
    </StyledSlider>
  );
}
