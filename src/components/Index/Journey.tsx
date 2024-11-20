/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import breakpoints from '../../breakpoints';

const timelineData = [
  { date: '2022-11', content: 'Javascriptを初めて触る' },
  { date: '2023-3', content: 'ITパスポート合格' },
  { date: '2023-4', content: '専門学校入学\nPython, MySQLを初めて触る' },
  { date: '2023-6', content: 'paiza Bランク獲得' },
  { date: '2023-9', content: 'Javaを初めて触る' },
  { date: '2023-12', content: '基本情報技術者試験合格' },
  { date: '2024-4', content: 'ドロカツ全国大会\n自律飛行スキルクラス優勝' },
  { date: '2024-5', content: 'paiza Aランク獲得' },
  { date: '2024-7', content: '応用情報技術者試験合格' },
  { date: '2024-5', content: '自動運転AIチャレンジ予選敗退' },
]

export const Journey = () => {
  return (
    <JourneyWrapper id='journey'>
        <Title>My Engineering Journey</Title>
        <Main>
            <Line />
            <EventsUL>
                {timelineData.map((data, index) => (
                    <Eventli key={index}>
                        <YearMonth>
                            <Year>{data.date.split('-')[0]}年</Year>
                            <Month>{data.date.split('-')[1]}月</Month>
                        </YearMonth>
                        <Circle />
                        <Content>{data.content}</Content>
                    </Eventli>
                ))}
            </EventsUL>
        </Main>
    </JourneyWrapper>
  )
}

const JourneyWrapper = styled.div`
    background-color: #C8E0F5;
`;

const Title = styled.h1`
    font-size: 64px;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 38px;
    }
`;

const Main = styled.div`
    padding: 20px;
    padding-top: 60px;
    position: relative;
    padding-bottom: 30px;
`;

const Line = styled.div`
    position: absolute;
    top: 0;
    left: 20%;
    height: 100%;
    width: 10px; /* 縦の直線の幅 */
    background-color: #FFFFFF; /* 直線の色 */
`;

const EventsUL = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Eventli = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    position: relative;
    
`;

const YearMonth = styled.p`
    font-size: 24px;
    font-weight: bold;
    width: 15%; /* 日付の幅を調整 */
    text-align: right;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    @media (max-width: ${breakpoints.mobile}) {
        margin-left: calc(20% + 20px);
    }
`;


const Year = styled.span`
    font-size: 24px; /* 年のフォントサイズ */
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
        white-space: nowrap
    }
`;

const Month = styled.span`
    font-size: 20px; /* 月のフォントサイズ */
    color: #555; /* 月の色を少し薄く */
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 15px;
    }
`;

const Circle = styled.div`
    position: absolute;
    left: calc(20% - 7.5px); /* Lineの位置と一致させる */
    transform: translateX(-50%);
    width: 80px; /* 円の直径 */
    height: 80px; /* 円の直径 */
    border-radius: 50%;
    border: 7px solid #FFF;
    background-color: #C8E0F5; /* 円の色 */
    box-sizing: border-box; /* ボーダーを含めたサイズ計算 */
    @media (max-width: ${breakpoints.mobile}) {
        width: 40px; /* 円の直径 */
        height: 40px; /* 円の直径 */
`;

const Content = styled.p`
    font-size: 36px;
    font-weight: bold;
    margin-left: 5%; /* 内容の左余白 */
    width: 60%; /* 内容の幅を調整 */
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
    }
`;