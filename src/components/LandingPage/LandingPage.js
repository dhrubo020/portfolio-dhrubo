import React from 'react';
import Banner from '../HomePageComponents/Navbar/Banner/Banner';
import Footer from '../HomePageComponents/Navbar/Footer/Footer';
import GetInTouch from '../HomePageComponents/Navbar/GetInTouch/GetInTouch';
import Navbar from '../HomePageComponents/Navbar/Navbar';
import ProblemSolving from '../HomePageComponents/Navbar/ProblemSolving/ProblemSolving';
import Projects from '../HomePageComponents/Navbar/ProjecetSilde/Projects';

const LandingPage = () => {
    return (
        <div>
            <div className="container" >
                
                <Banner />
            </div>

            <div className="container mt-5">
                <ProblemSolving className="bg-light" />
            </div>

            <div className="container bg-projects">
                    <Projects/>
            </div>

            <div className="container text-center mt-5" >
                <GetInTouch/>
            </div>

           
        </div>
    );
};

export default LandingPage;