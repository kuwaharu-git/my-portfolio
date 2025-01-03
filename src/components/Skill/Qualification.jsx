/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Card } from '../Card';

export const Qualification = () => {
    return (
        <QualificationsWrapper>
            <TitleWrapper>
                資格
            </TitleWrapper>
            <CardsWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardsWrapper>
        </QualificationsWrapper>
    );
}

const QualificationsWrapper = styled.div`
    box-sizing: border-box;
    background-color: #DBE0E4;
    width: 100%;
    padding: 100px 20px;

`;

const TitleWrapper = styled.h1`
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font-size: 64px;
    font-weight: bold;
    color: #000000;
    margin: 30px 0;
`;

const CardsWrapper = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
`;

