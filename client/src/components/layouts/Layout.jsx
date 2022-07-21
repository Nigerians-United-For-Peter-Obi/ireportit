import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {

    return (
        <React.Fragment>
            <Helmet>
                <base href="https://nupo-ireportit.herokuapp.com/" />
                <script type="script" src="/assets/js/jquery-3.6.0.min.js"></script>
                <script type="script" src="/assets/js/asyncloader.min.js"></script>
                <script type="script" src="/assets/js/bootstrap.min.js"></script>
                <script type="script" src="/assets/js/owl.carousel.min.js"></script>
                <script type="script" src="/assets/js/jquery.waypoints.min.js"></script>
                <script type="script" src="/assets/js/jquery.counterup.min.js"></script>
                <script type="script" src="/assets/js/popper.min.js"></script>
                <script type="script" src="/assets/js/swiper-bundle.min.js"></script>
                <script type="script" src="/assets/js/isotope.pkgd.min.js"></script>
                <script type="script" src="/assets/js/jquery.magnific-popup.min.js"></script>
                <script type="script" src="/assets/js/slick.min.js"></script>
                <script type="script" src="/assets/js/streamlab-core.js"></script>
                <script type="script" src="/assets/js/script.js"></script>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}
export default Layout;