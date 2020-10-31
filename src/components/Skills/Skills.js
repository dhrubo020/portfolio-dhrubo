import React from 'react';
import ProgressBar from './ProgressBar';
import './Skills.css';

const Skills = () => {

    const skills = [
        {
            title: 'HTML5',
            percent: .9,
        },
        {
            title: 'CSS3',
            percent: .85,
        },
        {
            title: 'Bootstrap4',
            percent: .9,
        },
        {
            title: 'JavaScript / ES6',
            percent: .9,
        },
        {
            title: 'ReactJS',
            percent: .9,
        },
        {
            title: 'NodeJS',
            percent: .80,
        },
        {
            title: 'Firebase Auth',
            percent: .80,
        },
        {
            title: 'MongoDB',
            percent: .85,
        },
        {
            title: 'MySql',
            percent: .90,
        }
    ]
    return (
        <div className="">
            <div className="text-center text-brand">
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