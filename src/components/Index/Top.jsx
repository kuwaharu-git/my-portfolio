/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import breakpoints from '../../breakpoints';
import MySkillsSwiper from './TopComponents/MySkillsSwiper';

export const Top = () => {
    return (
      <TopWrapper id="top">
        <MySkillsSwiper />
        <ContentWrapper>
          <TopTitle>kuwaharu's Portfolio</TopTitle>
          {/* <ImageIcon src='/icon.svg'></ImageIcon> */}
        </ContentWrapper>
      </TopWrapper>
    );
  };
  
  // Emotionでスタイル定義
  const TopWrapper = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; /* スライドを重ねるために親要素をrelativeに設定 */
  `;
  
  const ContentWrapper = styled.div`
    position: absolute; /* スライドの上にコンテンツを表示するため */
    z-index: 2; /* コンテンツをスライドより前面に表示 */
    text-align: center;
    pointer-events: none;
  `;
  
  const TopTitle = styled.h1`
    font-size: 64px;
    margin-top: 5px;
    color: #000000;
  
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 48px;
    }
  `;