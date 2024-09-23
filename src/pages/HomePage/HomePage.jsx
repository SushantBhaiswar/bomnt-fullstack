import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Crousel/Crousel';
import { useSelector } from 'react-redux';
// import Feeds from './components/Feeds';
// import Footer from './components/Footer';
function HomePage() {
    const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated)
    console.log("sss", isAuthenticated)
    return (
        <div className='home_main' >

            {isAuthenticated && <Header />}
            {/* <div className="carousel-container"> */}
            {/* <Carousel /> */}
            {/* </div> */}
            {/* <div className="feeds-container">
        <Feeds />
      </div> */}
            {/* <Footer /> */}
        </div>
    );
}

export default HomePage;
