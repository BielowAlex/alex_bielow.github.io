import React from 'react';

import {NeonLinkButton} from "../CustomButtons";
import {ReactSVG} from "react-svg";


interface IProps {
    projectName: string,
    poster: string,
    desc: string,
    url: string,
    gitUrl: string
    projRef?: React.RefObject<HTMLDivElement>
}

const Project: React.FC<IProps> = ({projectName, poster, desc, url, gitUrl,projRef}) => {


    return (
        <div className="project _anim_item " ref={projRef}>
            <div className="project_cart">
                <div className="poster _anim_item ">
                    <div className="programing_languages">
                        <ReactSVG src="./images/skills/react.svg"/>
                        <ReactSVG src="./images/skills/sass.svg"/>
                        <ReactSVG src="./images/skills/html.svg"/>
                    </div>

                    <img width={400} height={250} src={`./images/projects/${poster}`}
                         alt="project poster"/>
                </div>
                <div className="other"/>
            </div>
            <div className="project_info">
                <h3>{projectName}</h3>

                <p>{desc}</p>
                <div className="buttons">
                    <NeonLinkButton url={url}>View Project</NeonLinkButton>
                    <NeonLinkButton url={gitUrl}>View Git repos.</NeonLinkButton>
                </div>
            </div>
        </div>
    );
};

export {Project};
