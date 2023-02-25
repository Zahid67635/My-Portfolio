import React from 'react';
import Navbar from '../../Shared/Navbar';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;