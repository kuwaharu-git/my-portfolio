/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Card } from '../Card';
import { qualificationsData } from './qualificationData';
import { TitleWrapper, CardsListWrapper } from './skillCommonStyles';


export const Qualification = () => {
    return (
        <>
            <TitleWrapper>
            合格したIT関連試験
            </TitleWrapper>
            <CardsListWrapper>
                {Object.entries(qualificationsData).map(([title, contents], index) => (
                    <Card key={index} title={title} description={contents.description} />
                ))}
            </CardsListWrapper>
        </>
    );
}




