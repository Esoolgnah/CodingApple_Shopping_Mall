/* import CSS*/
import '../../styles/components/Main/Carousel.css';
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
import React, { Component } from 'react';
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

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
    };
    return (
      <StyledSlider {...settings}>
        {items.map((item, idx) => {
          return (
            <div key={item.id}>
              <SlideImg src={pcImgs[idx]} />
              <SlideTextWrapper>
                <SlideTitle>{item.head}</SlideTitle>
                <SlideText>{item.main}</SlideText>
              </SlideTextWrapper>
            </div>
          );
        })}
      </StyledSlider>
    );
  }
}
