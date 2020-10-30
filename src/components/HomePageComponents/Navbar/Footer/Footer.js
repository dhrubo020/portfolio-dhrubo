import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div style={{marginTop:"100px"}}>
            <div className="text-light text-brand text-center my-4">
                <p>Designed & Developed By Dhrubo</p>
                <div>
                    <a href="https://www.facebook.com/DiptonilSingha/" style={{ color: 'white' }} target="_blank" >&nbsp;facebook </a> 
                    <a href="https://twitter.com/dhrubosinghabd" style={{ color: 'white' }} target="_blank"> twitter </a>
                    <a href="https://www.linkedin.com/in/diptonil-singho-dhrubo-048305158/" style={{ color: 'white' }} target="_blank"> linkedIn </a>

                    <a href="https://www.github.com/dhrubo020/" style={{ color: 'white' }} target="_blank"> github </a>

                </div>
                <span> Copyright &copy; 2020</span>
            </div>
        </div>
    );
};

export default Footer;