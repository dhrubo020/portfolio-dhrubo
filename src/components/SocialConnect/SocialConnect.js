import React from 'react';
import './SocialConnect.css';


const SocialConnect = () => {
    return (
        <div className="social-icon">
            <div className="text-center" style={{ width: '4px', height: '150px', background: 'green', marginLeft: '20px' }}>

            </div>
            <a href="#" className="fa fa-facebook">&nbsp;</a> <br />
            <a href="#" className="fa fa-twitter"></a><br />
            <a href="#" className="fa fa-google"></a><br />
            <a href="#" className="fa fa-linkedin"></a><br />

        </div>
    );
};

export default SocialConnect;