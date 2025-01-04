/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Card } from '../Card';
import { qualifications } from './qualificationData';
import { TitleWrapper, CardsWrapper } from './skillCommonStyles';


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




