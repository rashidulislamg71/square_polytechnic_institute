
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const OutLet = () => {
    return (
        <>
        <Header />
        <NavBar />
        <Outlet />
        <Footer />
        </>
    );
};

export default OutLet;