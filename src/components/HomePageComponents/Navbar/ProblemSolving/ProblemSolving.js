import React from 'react';
import CountUp from 'react-countup';

import './ProblemSolving.css'
import ProblemSolvingCard from './ProblemSolvingCard';

const ProblemSolving = () => {
    const oj = [
        {
            oj:'Codeforces',
            solved:250
        },
        {
            oj:'UVA',
            solved:120
        },
        {
            oj:'LightOJ',
            solved:60
        },
        {
            oj:'Others',
            solved:100
        },
        {
            oj:'Almost',
            solved:500
        }
    ]
    
    return (
        <div>
            <div className="problem-solving-container text-center mt-5">
                <h3>Problem Solving Experience</h3>
            </div>
            <div className="d-flex flex-wrap justify-content-center mt-3">
            {
                oj.map(each => <ProblemSolvingCard data={each} />)
            }
        </div>
        </div>
        
    );
};

export default ProblemSolving;