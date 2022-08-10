import React from 'react';
import {NeonButton} from "../CustomButtons";

interface IProps {
    projectName:string,
    poster:string,
    desc:string,
    url:string,
    gitUrl:string
}

const Project:React.FC<IProps> = ({projectName,poster,desc,url,gitUrl}) => {
    return (
        <div className="project _anim_item">
            <div className="project_cart">
                <div className="poster _anim_item">
                    <img width={400} height={250} src={`./images/projects/${poster}`}
                         alt="project poster"/>
                </div>
                <div className="other"/>
            </div>
            <div className="project_info">
                <h3>{projectName}</h3>

                <p>{desc}</p>
                <div className="buttons">
                    <NeonButton url={url}>View Project</NeonButton>
                    <NeonButton url={gitUrl}>View Git repos.</NeonButton>
                </div>
            </div>
        </div>
    );
};

export {Project};
