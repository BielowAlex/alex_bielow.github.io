import React from 'react';
import {NeonButton} from "../CustomButtons";

interface IProps{
    reference: React.RefObject<HTMLDivElement>,
}

const Projects:React.FC<IProps> = ({reference}) => {

    return (
        <div className="projects" ref={reference}>
            <div className="projects_top">
                <h2 className="_anim_item _anim_no_hide">My works</h2>

                <div className="underline _anim_item ">
                    <div className="line"/>
                    <div className="fire"/>
                </div>
            </div>
            <div className="projects_list">
                <div className="project _anim_item">
                    <div className="project_cart">
                        <div className="poster _anim_item">
                            <img width={400} height={250} src="./images/projects/react_sneakers.png"
                                 alt="project poster"/>
                        </div>
                        <div className="other"/>
                    </div>
                    <div className="project_info">
                        <h3>Sneakers Shop</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium at autem fuga impedit quod saepe sequi vitae!
                            Accusantium, corporis cum earum excepturi nemo nesciunt omnis
                            provident qui quibusdam, quos sunt?
                        </p>
                        <div className="buttons">
                            <NeonButton url="#">View Project</NeonButton>
                            <NeonButton url="#">View Git repos.</NeonButton>
                        </div>
                    </div>
                </div>
                <div className="project _anim_item _reverse">
                    <div className="project_cart">
                        <div className="poster _anim_item">
                            <img width={400} height={250} src="./images/projects/react_sneakers.png"
                                 alt="project poster"/>
                        </div>
                        <div className="other"/>
                    </div>
                    <div className="project_info ">
                        <h3>Sneakers Shop</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium at autem fuga impedit quod saepe sequi vitae!
                            Accusantium, corporis cum earum excepturi nemo nesciunt omnis
                            provident qui quibusdam, quos sunt?
                        </p>
                        <div className="buttons">
                            <NeonButton url="#">View Project</NeonButton>
                            <NeonButton url="#">View Git repos.</NeonButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Projects};
