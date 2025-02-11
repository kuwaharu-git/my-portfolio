/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import breakpoints from '../../breakpoints'; // ブレイクポイントをインポート
import { motion } from "framer-motion";
import { timelineData } from './journeyData'; // タイムラインデータをインポート


// メインコンポーネント
export const Journey = () => {
  return (
    <JourneyWrapper id='journey'>
        <Title>My Engineering Journey</Title>
        <Main>
            <Line />
            <EventsUL>
                {/* タイムラインデータを動的に表示 */}
                {timelineData.map((data, index) => (

                    <Eventli key={index}>
                        <YearMonth>
                            {/* 年と月を分割して表示 */}
                            <Year>{data.date.split('-')[0]}年</Year>
                            <Month>{data.date.split('-')[1]}月</Month>
                        </YearMonth>
                        <Circle />
                        <motion.div
                            initial={{ opacity: 0, x: '5%' }} // 初期状態（右に100pxずれて透明）
                            whileInView={{ opacity: 1, x: 0 }} // 表示されたら左にスライドしてフェードイン
                            transition={{ duration: 0.8, ease: "easeOut" }} // アニメーションの速度とイージング
                            style={{ width: '60%', marginLeft: '5%' }}
                        >
                            <Content>{data.content}</Content>
                        </motion.div>
                    </Eventli>
                ))}
            </EventsUL>
        </Main>
    </JourneyWrapper>
  )
}

// スタイル設定

// 全体のラッパー（背景色と全体の配置）
const JourneyWrapper = styled.div`
    background-color: #C8E0F5;
    padding-top: 100px;
`;

// タイトルスタイル
const Title = styled.h1`
    font-size: 64px;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    margin: 0;
    margin-bottom: 50px;

    // モバイル画面サイズ対応
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 38px;
    }
`;

// メインコンテンツのラッパー
const Main = styled.div`
    padding: 20px;
    padding-top: 60px; /* 上部の余白 */
    position: relative; /* Lineを絶対位置で配置するため */
    padding-bottom: 30px;
`;

// 縦のライン（タイムラインの中心）
const Line = styled.div`
    position: absolute; /* 親要素を基準に絶対位置 */
    top: 0;
    left: 20%; /* 画面幅の20%の位置 */
    height: 100%; /* 親要素全体の高さ */
    width: 10px; /* ラインの幅 */
    background-color: #FFFFFF; /* ラインの色 */
`;

// タイムライン全体のリスト
const EventsUL = styled.ul`
    list-style: none; /* リストの装飾を消す */
    padding: 0;
    margin: 0;
`;

// 各タイムライン要素（1行分）
const Eventli = styled.li`
    display: flex; /* 横並び配置 */
    align-items: center; /* 要素を縦中央揃え */
    margin-bottom: 50px; /* 各要素の間隔 */
    position: relative; /* Circleの絶対配置用 */
`;

// 年月部分のスタイル
const YearMonth = styled.p`
    font-size: 24px;
    font-weight: bold;
    width: 15%; /* 固定幅で揃える */
    text-align: right; /* 右揃え */
    margin-right: 5%; /* 円との余白 */
    display: flex;
    flex-direction: column; /* 年と月を縦に並べる */

    // モバイル画面サイズ対応
    @media (max-width: ${breakpoints.mobile}) {
        margin-left: calc(20% + 20px); /* モバイルでは左に寄せる */
    }
`;

// 年のスタイル
const Year = styled.span`
    font-size: 24px;

    // モバイル画面サイズ対応
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
        white-space: nowrap; /* 改行を防ぐ */
    }
`;

// 月のスタイル
const Month = styled.span`
    font-size: 20px; /* 月のフォントサイズ */
    color: #555; /* 薄い色にする */

    // モバイル画面サイズ対応
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 15px;
    }
`;

// タイムラインの円スタイル
const Circle = styled.div`
    position: absolute; /* Lineを基準に絶対位置 */
    left: calc(20% - 7.5px); /* ラインの中心に配置 */
    transform: translateX(-50%);
    width: 80px; /* 円の直径 */
    height: 80px;
    border-radius: 50%; /* 円形にする */
    border: 7px solid #FFF; /* 円のボーダー */
    background-color: #C8E0F5; /* 背景色 */
    box-sizing: border-box; /* ボーダーを含めたサイズ計算 */

    // モバイル画面サイズ対応
    @media (max-width: ${breakpoints.mobile}) {
        width: 40px; /* 小さい円 */
        height: 40px;
    }
`;

// コンテンツ部分のスタイル
const Content = styled.p`
    font-size: 36px; /* テキストサイズ */
    font-weight: bold;
    margin-left: 5%; /* 左の余白 */
    width: 95%;

    // モバイル画面サイズ対応
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
    }
`;