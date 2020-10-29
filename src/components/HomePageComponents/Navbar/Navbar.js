import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light ">
                <Link className="navbar-brand px-3 rounded-pill font-weight-bold" to="/">
                    <h3 className="name">Diptonil Singho Dhrubo</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto transition-ttb">

                    <li className="nav-item mx-md-4">
                            <Link className="nav-link  " to="/skills"> Skills </Link>
                        </li>
                        <li className="nav-item mx-md-4">
                            <Link className="nav-link  " to="/projects"> Projects </Link>
                        </li>
                        <li className="nav-item mx-md-4">
                            <Link className="nav-link text-white" to="#"> Blog </Link>
                        </li>
                        
                        <li className="nav-item mx-md-4">
                            <Link className="nav-link text-white " to="#" > About Me </Link>
                        </li>
                        <li className="nav-item mx-md-4">
                            <Link className="nav-link text-white " href="#" > Resume </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;