import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects_top">
                <h2>My works</h2>

                <div className="underline">
                    <div className="line"/>
                    <div className="fire"/>
                </div>
            </div>
            <div className="projects_list">
                <div className="project">
                    <div className="project_cart">
                        <div className="project_poster">
                            <img src="./images/react_sneakers" alt="project poster"/>
                        </div>
                        <div className="other"/>
                    </div>
                    <div className="project_info">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium at autem fuga impedit quod saepe sequi vitae!
                            Accusantium, corporis cum earum excepturi nemo nesciunt omnis
                            provident qui quibusdam, quos sunt?
                        </p>
                        <div className="buttons">
                            <button>Show Website</button>
                            <button>Show Git repos.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Projects};
