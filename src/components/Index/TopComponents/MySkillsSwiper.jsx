/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from './Icon';
import { svgPaths }  from './Icon'
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
        // Object.entriesでsvgPathsを展開して、Iconコンポーネントに渡す
        {Object.entries(svgPaths).map(([key, value], index) => (
          <SwiperSlide key={index}>
              <SlideContent>
                <Icon iconName={key} svgChildren={value} />
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

