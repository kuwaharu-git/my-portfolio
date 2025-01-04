/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Card } from '../Card';
import { qualificationsData } from './qualificationData';
import { TitleWrapper, CardsWrapper } from './skillCommonStyles';


export const Qualification = () => {
    return (
        <>
            <TitleWrapper>
            合格したIT関連試験
            </TitleWrapper>
            <CardsWrapper>
                {Object.entries(qualificationsData).map(([title, contents], index) => (
                    <Card key={index} title={title} description={contents.description} />
                ))}
            </CardsWrapper>
        </>
    );
}




