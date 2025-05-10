/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import breakpoints from '../breakpoints';

// 説明文のスタイル
export const Description = styled.div`
    font-size: 16px;
    color: #000;
    text-align: left;
    width: 254px;
    margin: 0 auto;
    white-space: pre-line;   // 改行を反映
`;

export const DescriptionUl = styled.ul`
    font-size: 16px;
    color: #000;
    text-align: left;
    padding-left: 20px;
`;

// カードコンポーネント
export const Card = ({title, siteUrl, imgUrl, igmAlt, description}) => {
    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            {imgUrl && <a href={siteUrl}><CardImage src={imgUrl} alt={igmAlt} /></a>}
            <Delimiter />
            {description}  {/* 説明文はjsxで受け取る */}
        </CardWrapper>
    );
}

const CardWrapper = styled.li`
    // box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 100%;
    height: 450px;
    border: 8px solid #454E5A;
    list-style: none;
`;

const CardTitle = styled.h3`
    font-size: 24px;
    color: #000;
    text-align: center;
    width: 100%;
    line-height: 1.2;
    height: calc(1.2em * 2);;
    margin: 20px 0;
    white-space: pre-line;   // 改行を反映
`;

const Delimiter = styled.hr`
    border: 0;
    height: 5px;
    background: #454E5A;
    width: 254px;
    margin: 20px auto;
`;

const CardImage = styled.img`
    width: 90%;
    height: 134px;
    display: block;
    margin: 0 auto;
    object-fit: contain;
`;

export const CardsListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 284px);
  gap: 40px;
  list-style: none;
  padding: 0;
  justify-content: space-evenly; // 左右均等配置
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fit, 284px);
  }
`;