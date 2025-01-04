/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Card } from '../Card';
import { qualifications } from './qualificationData';


export const Qualification = () => {
    return (
        <>
            <TitleWrapper>
            合格したIT関連試験
            </TitleWrapper>
            <CardsWrapper>
                {Object.entries(qualifications).map(([title, contents], index) => (
                    <Card key={index} title={title} description={contents.description} />
                ))}
            </CardsWrapper>
        </>
    );
}


const TitleWrapper = styled.h1`
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font-size: 40px;
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

