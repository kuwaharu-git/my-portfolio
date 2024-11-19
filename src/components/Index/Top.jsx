/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import breakpoints from '../../breakpoints';

export const Top = () => {
    return (
        <TopWrapper id='top'>
                {/* <ImageIcon src='/icon.png'></ImageIcon> */}
                <TopTitle>kuwaharu's Portfolio</TopTitle>
        </TopWrapper>
    );
}

// Emotionでスタイル定義
const TopWrapper = styled.div`
    box-sizing: border-box;
    background-color: #F9FAFB;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;


const ImageIcon = styled.img`
    width: 270px;
    height: 270px;
    border-radius:50%; /* 画像を丸くする */
    background-color: #FFFFFF;
    
    // 画面幅がmobileの場合
    @media (max-width: ${breakpoints.mobile}) {
        width: 200px;
        height: 200px;
    }
`;

const TopTitle = styled.h1`
    font-size: 64px;
    margin-top: 5px;
    color: #000000;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 48px;
    }
`;