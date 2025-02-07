/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Card } from '../Card';
import { technicalData } from './technicalData';
import { TitleWrapper, CardsListWrapper } from './skillCommonStyles';


export const Technical = () => {
    return (
        <>
            <TitleWrapper>
            技術スキル
            </TitleWrapper>
            <CardsListWrapper>
                {Object.entries(technicalData).map(([title, contents], index) => (
                    <Card key={index} title={title} siteUrl={contents.siteUrl} imgUrl={contents.imgUrl} igmAlt={contents.imgAlt} description={contents.description} />
                ))}
            </CardsListWrapper>
        </>
    );
}




