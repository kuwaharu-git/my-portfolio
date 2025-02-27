import React from 'react';
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { Qualification } from '../components/Skill/Qualification';
import { Technical } from '../components/Skill/Technical';
import breakpoints from '../breakpoints';

const Skill = () => {
    return (
        <>
            <Header />
            <main>
                <SkillWrapper>
                    <TitleWrapper>
                        Skill
                    </TitleWrapper>
                    <Technical />
                    <Qualification />
                </SkillWrapper>
            </main>
            <Footer />
        </>
    );
};

const SkillWrapper = styled.div`
    box-sizing: border-box;
    background-color: #DBE0E4;
    width: 100%;
    padding: 100px 20px;

`;

const TitleWrapper = styled.h1`
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    font-size: 64px;
    font-weight: bold;
    color: #000000;
    margin: 30px 0;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 42px;
`;

export default Skill;