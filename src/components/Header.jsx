/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Burger from './Burger';
import { Link } from 'react-router-dom'; // Link は NavLink と同じように使えるが、NavLink を利用します
import { HashLink } from 'react-router-hash-link';

// メインコンポーネント
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    // 初期状態とリサイズ時にウィンドウ幅をチェック
    const checkMobileView = () => {
        setIsMobile(window.innerWidth < 1057);
    };

    useEffect(() => {
        checkMobileView(); // 初期状態を設定
        window.addEventListener('resize', checkMobileView); // リサイズ時にチェック
        return () => window.removeEventListener('resize', checkMobileView); // クリーンアップ
    }, []);

    return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

// Desktop用のHeaderコンポーネント
export const DesktopHeader = () => {
    return (
        <HeaderWrapper>
            <ImageIcon src="/icon.svg" alt='icon image'/>
            <Nav>
                <NavHashLink to="/#top">Top</NavHashLink>
                <NavHashLink to="/#profile">Profile</NavHashLink>
                <NavHashLink to="/#journey">Journey</NavHashLink>
                <NavLink to="/skill">Skill</NavLink>
                <NavLink to="/product">Product</NavLink>
                {/* <NavHashLink to="/#study">Study</NavHashLink> */}
                <NavA href="https://tech.kuwaharu.com" target="_blank">Blog</NavA>
            </Nav>
        </HeaderWrapper>
    );
};

// Mobile用のHeaderコンポーネント
export const MobileHeader = () => {
    return (
        <MobileHeaderWrapper>
            <MobileIconImage src="/icon.svg" alt='icon image'/>
            <Burger />
        </MobileHeaderWrapper>
    );
};

// Emotionでスタイル定義
const HeaderWrapper = styled.header`
    box-sizing: border-box;
    position: fixed;
    background-color: #1F2937;
    justify-content: space-between;
    color: #FFFFFF;
    padding: 10px 80px;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    opacity: 0.8;
    z-index: 1000; /* 一番上に表示 */
`;

const ImageIcon = styled.img`
    width: 83px;
    height: 83px;
    border-radius: 50%;
    background-color: #FFFFFF;
`;

const Nav = styled.nav`
    display: flex;
    gap: 25px;

    @media (max-width: 1057px) {
        flex-direction: column;
        gap: 15px;
    }
`;

const baseNavStyle =`
    color: white;
    text-decoration: none;
    font-size: 36px;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 1057px) {
        font-size: 20px;
    }
`;

const NavA = styled.a`
    ${baseNavStyle}
`;

const NavHashLink = styled(HashLink)`
    ${baseNavStyle}
`;

const NavLink = styled(Link)`
    ${baseNavStyle}
`;

const MobileHeaderWrapper = styled.header`
    box-sizing: border-box;
    position: fixed;
    background-color: #1F2937;
    color: #FFFFFF;
    height: 100px;
    width: 100%;
    opacity: 0.8;
    padding: 0;
    width: 100%;
    z-index: 1000; /* 一番上に表示 */
`;

const MobileIconImage = styled.img`
    position: absolute; /* 他の要素に影響を与えないように絶対位置で配置 */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /* 中央揃え */
    pointer-events: none; /* アイコンがクリック可能な要素に干渉しないようにする */
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #FFFFFF;

`;
export default Header;