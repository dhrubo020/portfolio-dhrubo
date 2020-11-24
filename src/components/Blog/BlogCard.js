import React from 'react';

const BlogCard = ({ blogData }) => {
    return (
        <div> 
            <div className="m-4 pt-5 ">
                <div className="card zoom">
                    <div className="card-body">
                        <div className="card-footer d-flex justify-content-between">
                            <h6 className="text-success">{blogData.title}</h6>
                        </div>

                        <p className="text-muted">
                            {blogData.text} &nbsp;
                            
                        </p>
                        <a href={blogData.link} target="_blank">
                                <strong>more...</strong>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogCard;