import React from 'react';
import './Mern.css';

import react from '../../images/mern/react.gif';
import node from '../../images/mern/node-removebg-preview.png';
import mongo from '../../images/mern/mongo-removebg-preview.png';
import express from '../../images/mern/express-removebg-preview.png';

const Mern = () => {
    return (
        <div>
            <div className="mern-img">
                <img src={react} height='40' alt=""/> <br/><br/> 
                <img src={node} height='40' alt=""/> <br/><br/> 
                <img src={mongo} height='40' alt=""/> <br/><br/> 
                <img src={express} height='40' alt=""/> <br/><br/> 
                <div className="text-center" style={{width:'4px', height:'150px', background:'darkgreen', marginLeft:'15px'}}>

                </div>
            </div>
        </div>
    );
};

export default Mern;