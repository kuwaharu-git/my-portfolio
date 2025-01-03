/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Card = ({title, imgUrl, igmAlt, description}) => {
    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            <CardImage src={imgUrl} alt={igmAlt}/>
            <Delimiter />
            <CardText>{description}</CardText>
        </CardWrapper>
    );
}

const CardWrapper = styled.li`
    // box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 30px;
    width: 284px;
    height: 387px;
    border: 8px solid #454E5A;
    list-style: none;
    margin: 20px 45px 20px 0;
`;

const CardTitle = styled.h3`
    font-size: 24px;
    color: #000;
    text-align: center;
    width: 100%;
    height: 2em;
    margin: 20px 0;
`;

const Delimiter = styled.hr`
    border: 0;
    height: 5px;
    background: #454E5A;
    width: 254px;
    margin: 20px auto;
`;

const CardImage = styled.img`
    width: 134px;
    height: 134px;
    display: block;
    margin: 0 auto;
`;

const CardText = styled.p`
    font-size: 16px;
    color: #000;
    text-align: left;
    width: 254px;
    margin: 0 auto;
`;