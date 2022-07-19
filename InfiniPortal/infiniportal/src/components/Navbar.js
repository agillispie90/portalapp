import React from 'react';
import logo from '../logos/colorlogotp.png';

 export default Navbar => {
    return(
        <nav>
        <div className="navContain">
            <img className="navLogo" src={logo}
                alt="InfiniPortal - Your employee portal solution."/>
            <div className="navLinks-container">
                <ul className="navLinks">
                <a href='/'> <li>Home</li></a>
                <a href='about'><li>About</li></a>
                <a href='pricing'><li>Pricing</li></a>
                <a href='faq'><li>FAQ</li></a>
                <a href='login'><li>Login</li></a>
                    <a href='./signup'><button className="signUpBtn">Sign Up</button></a>
                </ul>
            </div>
        </div>
    </nav>
 )}