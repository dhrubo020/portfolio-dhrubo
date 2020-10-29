import React from 'react';
import profileImage from '../../../../images/profileImage.png';
// import Skills from '../Skills/Skills';
import './Banner.css'

const Banner = () => {
    const tags = ['JavaScript-Development', 'Responsive-Design', 'PSD-to-Web', 'UI/UX', 'REST-API', 'E-commerce', 'MongoDB']
    return (
        <div>
            <div className="container mt-2">
                <div className="row ">
                    <div className="col-md-6 col-sm-12  ">
                        <div className=" d-flex  justify-content-center align-items-center">
                            <img src={profileImage} style={{borderRadius:'50%', maxWidth: '50%', boxShadow: 'green 0px 0px 23px 3px' }} className="img-fluid " alt="" />
                        </div>
                    </div>
                    <div className="col-md-6  col-sm-12 ">
                        <div className="mt-4">
                            <h3 className="text-brand transition-right-to-left"><span className="mern">M E R N</span> Stack Developer</h3>
                            <h5 className="text-brand">Javascript Lover & Problem Solver</h5> <br />
                            <div className="pr-4 text-white  text-bold-md">
                                {
                                    tags.map(each =>
                                        <>
                                            <span className="transition-right-to-left"> # {each} <br /></span>
                                        </>
                                    )
                                }
                            </div>
                            {/* <div>
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quidem natus cupiditate. Provident, nobis molestiae in eum sapiente beatae nam omnis, adipisci molestias minus officiis!</span>
                            </div> */}

                            <button className="btn-brand-fill">About Me</button>
                            {/* <Skills/> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;