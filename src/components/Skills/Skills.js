import React from 'react';
import ProgressBar from './ProgressBar';
import './Skills.css';

const Skills = () => {

    const skills = [
        {
            title: 'HTML5',
            percent: .8,
        },
        {
            title: 'CSS3',
            percent: .75,
        },
        {
            title: 'Bootstrap4',
            percent: .8,
        },
        {
            title: 'JavaScript / ES6',
            percent: .78,
        },
        {
            title: 'ReactJS',
            percent: .75,
        },
        {
            title: 'NodeJS',
            percent: .70,
        },
        {
            title: 'Firebase Auth',
            percent: .70,
        },
        {
            title: 'MongoDB',
            percent: .75,
        },
        {
            title: 'MySql',
            percent: .75,
        }
    ]
    return (
        <div className="">
            <div className="text-center">
                <h4>Web Development Skills</h4>
            </div>
            <div className="p-3">
                {
                    skills.map(each => <ProgressBar width={"90%"} title={each.title} percent={each.percent} />)
                }
            </div>

        </div>
    );
};

export default Skills;