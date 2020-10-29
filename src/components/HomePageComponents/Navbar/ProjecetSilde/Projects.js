import React from 'react';
import redOnion from '../../../../images/projects/redOnion.PNG';
import creativeAgency from '../../../../images/projects/creativeAgency.PNG';
import volunteer from '../../../../images/projects/volunteer.png';
import travel from '../../../../images/projects/travelGuru.PNG';
import buddy from '../../../../images/projects/buddy.PNG';
import chromeHome from '../../../../images/projects/myHome.PNG';
import eSchool from '../../../../images/projects/eSchool.PNG';
import lyricsSearch from '../../../../images/projects/lyricsSearch.PNG';
import weather from '../../../../images/projects/weather.PNG';
import hotGadgets from '../../../../images/projects/hotGadgets.PNG';
import pandaCommerce from '../../../../images/projects/pandaCommerce.PNG';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Projects.css';
import ProjectsCard from './ProjectsCard';
import { Link } from 'react-router-dom';

const Projects = () => {
    const allProjects = [
        {
            title: 'Creative Agency',
            responsive: true,
            category: ['React', 'Node', 'Bootstrap', 'MongoDB', 'Firebase'],
            image: creativeAgency,
            link: 'https://crea1ive-agency.web.app/',
            github: 'https://github.com/dhrubo020/creative-agency-client'
        },
        {
            title: 'Red Onion Restaurant',
            responsive: true,
            category: ['React', 'Node', 'Bootstrap', 'MongoDB', 'Firebase'],
            image: redOnion,
            link: 'https://hot-onion-ffd33.web.app/',
            github: 'https://github.com/dhrubo020/red-onion-client'
        },
        {
            title: 'Volunteer Network',
            responsive: false,
            category: ['React', 'Node', 'Bootstrap', 'MongoDB', 'Firebase'],
            image: volunteer,
            link: 'https://volunteer-network-a5800.web.app/',
            github: 'https://github.com/dhrubo020/volunteer-client-private'
        },
        {
            title: 'Travel BD',
            responsive: false,
            category: ['React', 'Node', 'Bootstrap', 'MongoDB', 'Firebase'],
            image: travel,
            link: 'https://travel-guru-807b6.web.app/',
            github: 'https://github.com/dhrubo020/travel-guru'
        },
        {
            title: 'Social Buddy',
            responsive: false,
            category: ['React', 'Node', 'Bootstrap', 'MongoDB', 'Firebase'],
            image: buddy,
            link: 'https://mybuddy.netlify.app/',
            github: 'https://github.com/dhrubo020/buddy'
        },
        {
            title: 'Chrome Home Tab',
            responsive: false,
            category: ['HTML', 'CSS', 'Javascript'],
            image: chromeHome,
            link: 'https://github.com/dhrubo020/chrome-homepage',
            github: 'https://dhrubo020.github.io/chrome-homepage/index.html'
        },
        {
            title: 'e-School',
            responsive: false,
            category: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
            image: eSchool,
            link: 'https://dhrubo020.github.io/e-school/index.html',
            github: 'https://github.com/dhrubo020/e-school'
        },
        {
            title: 'Lyrics Search',
            responsive: false,
            category: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'API'],
            image: lyricsSearch,
            link: 'https://dhrubo020.github.io/hard-rock-lyrics/index.html',
            github: 'https://github.com/dhrubo020/hard-rock-lyrics'
        },
        {
            title: 'Weather Forecast',
            responsive: false,
            category: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'API'],
            image: weather,
            link: 'https://dhrubo020.github.io/weather/',
            github: 'https://github.com/dhrubo020/weather'
        },
        {
            title: 'Hot Gadgets',
            responsive: false,
            category: ['HTML', 'CSS', 'Bootstrap'],
            image: hotGadgets,
            link: 'https://dhrubo020.github.io/hot-gadgets1/',
            github: 'https://github.com/dhrubo020/hot-gadgets1'
        },
        {
            title: 'Hot Gadgets',
            responsive: false,
            category: ['HTML', 'CSS', 'Bootstrap'],
            image: pandaCommerce,
            link: 'https://dhrubo020.github.io/panda-commerce/',
            github: 'https://github.com/dhrubo020/panda-commerce'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="project-slides">
            <div className=" text-center ">
                <h2 className="text-success">Portfolio</h2>
                <h4 className="text-white mb-5 ">Some of the projects I worked on</h4>
            </div>
            {/* <div className="card-columns">
                {
                    allProjects.map(each => <ProjectsCard data={each} />)
                }
            </div> */}

            <Slider className="mx-2 bg-slider" {...settings}>

                {
                    allProjects.map((each, index) => <ProjectsCard data={each}/>)
                }

            </Slider>
            <div className="mt-5 text-center">
                <Link to='/projects'>
                    <button className="btn-brand-fill">See More ...</button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;