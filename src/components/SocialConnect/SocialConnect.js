import React from 'react';
import './SocialConnect.css';


const SocialConnect = () => {
    return (
        <div className="social-icon">
            <div className="text-center" style={{ width: '4px', height: '150px', background: 'green', marginLeft: '20px' }}>

            </div>
            <a href="https://www.facebook.com/DiptonilSingha/"   className="fa fa-facebook">&nbsp;</a> <br />
            <a href="https://twitter.com/dhrubosinghabd" target="_blank" className="fa fa-twitter"></a><br />
            <a href="https://mailto:dhrubo9250@gmail.com/" target="_blank" className="fa fa-google"></a><br />
            <a href="https://www.linkedin.com/in/diptonil-singho-dhrubo-048305158/" target="_blank" className="fa fa-linkedin"></a><br />
            
            <a href="https://www.github.com/dhrubo020/" style={{color:'white'}}  target="_blank" className="fa fa-github"> </a> <br />
        </div>
    );
};

export default SocialConnect;