import React, { useState } from 'react';
import './navbar.css';
import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
import ReadMoreReadLess from "./ReadMoreReadLess";


function Navbar(props) {

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
    <>
    <nav className="main-nav">
        {/* 1st menu part */}
        <div className="logo">
            <h2>
                <span>B</span>aby
                <span>N</span>ama
            </h2>
        </div>
             {/* 2nd menu part */}
        <div className= {showMediaIcons ? "menu-link mobile-menu-link": "menu-link" }>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Care Plans</a>
                </li>
               
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Our Doctors</a>
                </li>
            </ul>
        </div>
         {/* 3rd social media links */}
         <div className="social-media">
            <ul className="social-media-desktop">
                <li>
                    <a href="https://www.facebook.com/"><FaFacebookSquare className='facebook'/></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM"><FaInstagramSquare className="instagram"/></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM"><FaYoutubeSquare className="youtube"/></a>
                </li>
            </ul>
            <div className="hamburger-menu">

                        <a href="#" onClick={() =>setShowMediaIcons(!showMediaIcons) }><GiHamburgerMenu/></a>
            </div>
         </div>
    </nav>

 {/* hero section start */}
 <section className='hero-section'>
    <div className="plan-menu">
        <div className="plans">  <ReadMoreReadLess />  </div>
        <div className="plans"> <ReadMoreReadLess/> </div>
        <div className="plans">   <ReadMoreReadLess/></div>
       
    </div>

 </section>

            
            
    </>
    );
}

export default Navbar;