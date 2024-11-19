import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { Top } from '../components/Index/Top';
import { Profile } from '../components/Index/Profile';

const Index = () => {
    return (
        <div>
            <Header />
            <main>
                <Top />
                <Profile />
            </main>
            <Footer />
        </div>
    );
};

export default Index;