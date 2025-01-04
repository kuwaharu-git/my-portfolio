/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import breakpoints from '../../breakpoints';

export const TitleWrapper = styled.h1`
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font-size: 40px;
    font-weight: bold;
    color: #000000;
    margin: 30px 0;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 30px;
    }
`;

export const CardsWrapper = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
`;