import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Footer />
        </React.Fragment>
    )
}
export default Layout;