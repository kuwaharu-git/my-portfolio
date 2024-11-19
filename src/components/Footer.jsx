/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Footer = () => {
    return (
        <FooterWrapper>
            <p>© 2024 kuwaharu</p>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    box-sizing: border-box;
    background-color: #1F2937;
    color: #FFFFFF;
    padding: 10px 80px;
    height: 102.4px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
