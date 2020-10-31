import React, { useEffect, useState } from 'react';
import './ProgressBar.css';


const ProgressBar = (props) => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(100 * props.percent)
    }, [])

    return (
        <div>
            <div className="progress-div mt-2" style={{ width: '100%' }}>
                <div className="progress p-3 text-white" style={{ width: `${value}%` }} >
                    <p className="" style={{fontSize:'18px'}}> {props.title} </p>
                    <span className="px-1" style={{marginLeft: 'auto' }}>{value}%</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;