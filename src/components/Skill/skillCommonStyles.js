/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import breakpoints from '../../breakpoints';

export const TitleWrapper = styled.h1`
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    text-align: left;
    font-size: 40px;
    font-weight: bold;
    color: #000000;
    margin: 30px 0;
    text-align: center;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 30px;
    }
`;
