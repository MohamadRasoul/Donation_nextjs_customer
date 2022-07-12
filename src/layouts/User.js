import React from 'react';

// components

import Navbar from '../components/Navbars/Navbar.js';
import Footer from '../components/Footers/Footer.js';

export default function Admin({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
