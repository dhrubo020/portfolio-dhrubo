import React from 'react';
import CountUp from 'react-countup';
import './ProblemSolving.css'

const ProblemSolvingCard = ({ data }) => {
    return (
        <div >
            <div className="mx-4 text-center">
                <div className="">
                    <span className="p-1 text-white text-bold-md">{data.oj}</span>
                    <div className="bg-warning" style={{ height: '3px', width: 'auto', borderRadius: '3px' }}>
                    </div>
                    <CountUp start={1} duration={5} end={data.solved} style={{ fontWeight: '700', fontSize: '30px' }} />
                     <span style={{ fontWeight: '700', fontSize: '30px' }}>+</span>   
                </div>
            </div>
            
        </div>
    );
};

export default ProblemSolvingCard;