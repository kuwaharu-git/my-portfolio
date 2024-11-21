/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PythonIcon, ReactIcon, NextJsIcon, HtmlIcon, CssIcon, JavascriptIcon, MysqlIcon, GitIcon, GitHubIcon, LinuxIcon, FlaskIcon, FastApiIcon, DjangoIcon, CloudflareIcon, AwsIcon } from './Icons';

const iconList = [
    <PythonIcon />,
    <ReactIcon />,
    <NextJsIcon />,
    <HtmlIcon />,
    <CssIcon />,
    <JavascriptIcon />,
    <MysqlIcon />,
    <GitIcon />,
    <GitHubIcon />,
    <LinuxIcon />,
    <FlaskIcon />,
    <FastApiIcon />,
    <DjangoIcon />,
    <CloudflareIcon />,
    <AwsIcon />
];



// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';


export default function MySkillsSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay,　Navigation]}
        speed={2000}
        className="mySwiper"
        css={css`
          height: 100vh; /* Swiperの高さを画面いっぱいに設定 */
          width: 100%;   /* 横幅を100%に */
          background-color: #DBE0E4; /* 背景色を設定 */
        `}
      >
        {iconList.map((icon, index) => (
          <SwiperSlide key={index}>
              <SlideContent>
                {icon}
              </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const SlideContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    font-weight: bold;
    color: white;
    background-color: #DBE0E4;
    height: 100%;
    `;

