import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { Qualification } from '../components/Skill/Qualification';

const Skill = () => {
    return (
        <>
            <Header />
            <main>
                <Qualification />
            </main>
            <Footer />
        </>
    );
};

export default Skill;