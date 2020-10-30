import React from 'react';
import './CategorySkills.css';


const CategorySkills = ({ category, data }) => {
    return (
        <div>
            <div className="proficient transition-right-to-left ">
                <ul >
                 <li><h4 className="font-color">{category} </h4></li> 
                <div className="d-flex flex-wrap">
                    {
                        data.map((each, i) => <span className="bg-text text-bold-md text-white rounded-pill px-4 my-1 mr-2">{each}</span>)
                    }
                </div>
                    
                </ul>

            </div>
        </div>
    );
};

export default CategorySkills;