import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsCard.css';



const ProjectsCard = ({ data }) => {
    
    return (
        <div>

            <div className="card m-3 mt-2">
                <img className="card-img-top p-2" src={data.image} alt="Card cap" />
                <div className="card-body">
                    <h6 className="text-success">{data.title}</h6>
                    <small className="d-flex flex-wrap">
                        {
                            data.category.map(each => <span className="bg-info px-2 m-2 text-white rounded-pill">#{each} </span>)
                        }
                    </small>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <a href={data.github} target="_blank">
                        Github
                    </a> &nbsp;
                        <a href={data.link} target="_blank">
                        Live
                    </a>

                </div>

            </div>

        </div>
    );
};

export default ProjectsCard;