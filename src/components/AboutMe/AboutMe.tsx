import React from 'react';

import {Greeting} from "../Greeting";
import {ReactSVG} from "react-svg";

const AboutMe: React.FC = () => {
    const [isKilled,setIsKilled] = React.useState<boolean>(false);

    React.useEffect(()=>{
        const returnAstronaut = setTimeout(()=>{
            setIsKilled(false);
        },30000);
        return ()=>clearTimeout(returnAstronaut);
    },[isKilled]);

    return (
        <div id="about_me" className="about_me section">
            <div className="about_me_title _anim_item">
                <h2 className="_anim_item">I love programing!</h2>
                <h2 className="_anim_item">I like building websites, and solve</h2>
                <h2 className="_anim_item">business problem. Now I studying at</h2>
                <h2 className="_anim_item">"UMCS Lublin" in Poland on</h2>
                <h2 className="_anim_item"> specialization of computer science</h2>
                <h2 className="_anim_item"> for 2 years.</h2>
            </div>
            <div className="content">
                <Greeting/>
                <div className={`astronaut _anim_item ${isKilled?'_kill':''}`}>
                    <ReactSVG src="./images/other/sky.svg"/>
                    <img src="/images/other/astronaut.png" alt="astronaut" onClick={()=>{setIsKilled(!isKilled)}}/>
                </div>
                {/*<h3 className="_anim_item">*/}
                {/*    Additionally studying at the "Okten web school" courses.*/}
                {/*    I get great satisfaction from what I do.*/}
                {/*</h3>*/}

            </div>
        </div>
    );
};

export {AboutMe};
