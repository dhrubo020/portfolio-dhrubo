import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsCard.css';



const ProjectsCard = ({ data }) => {

    return (
        <div>

            <div className="card m-3">
                <img className="card-img-top p-2" src={data.image} alt="Card cap" />
                <div className="card-body">
                    <h6 className="text-success">{data.title}</h6>
                    <small >
                        {
                            data.category.map(each => <span className="bg-info px-2 m-2 text-white rounded-pill">#{each} </span>)
                        }
                    </small>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <Link to={data.github}>
                        Github
                    </Link> &nbsp;
                        <Link to={data.link} >
                            Live
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default ProjectsCard;