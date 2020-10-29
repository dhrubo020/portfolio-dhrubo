import React from 'react';
import Skills from './Skills';

const SkillsPage = () => {

    const proficient = ["Javascript", "ES6", "ReactJS", "BootStrap4", "HTML5", "CSS3", "C++"]
    const comfortable = ["NodeJS", "ExpressJS", "REST API", "MongoDB", "Firebase"]
    const concepts = ["SDLC", "Problem Solving", "Data Structure", "Algorithm", "OOP", "NLP"]
    const tools = ["Git", "Heroku", "Netlify", "VS Code", "Chrome Dev Tool", "CodeBlocks", "Eclipse", "Slack"]

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <Skills />
                </div>

                <div className="col-md-6 col-sm-12">
                    <div className="proficient transition-right-to-left">
                        <h4>Proficient </h4>
                        {
                            proficient.map((each, i) => <span className="bg-success text-white rounded-pill px-2 mr-2">{each}</span>)
                        }
                    </div>
                    <div className="comfortable transition-right-to-left">
                        <h4>Comfortable </h4>
                        {
                            comfortable.map((each, i) => <span className="bg-success text-white rounded-pill px-2 mr-2">{each}</span>)
                        }
                    </div>
                    <div className="concepts transition-right-to-left">
                        <h4>Concepts </h4>
                        {
                            concepts.map((each, i) => <span className="bg-success text-white rounded-pill px-2 mr-2">{each}</span>)
                        }
                    </div>
                    <div className="tools transition-right-to-left">
                        <h4>Tools </h4>
                        {
                            tools.map((each, i) => <span className="bg-success text-white rounded-pill px-2 mr-2">{each}</span>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkillsPage;