import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {Greeting} from "../Greeting";
import {ReactSVG} from "react-svg";

gsap.registerPlugin(ScrollTrigger);
const Animation: React.FC = () => {
    const [isKilled,setIsKilled] = React.useState<boolean>(false);
    const listRef = React.useRef(null);
    const listSelector = gsap.utils.selector(listRef);

    React.useEffect(()=>{
        listSelector('.item').forEach((el)=>{
            gsap.fromTo(el,{opacity:0},{opacity:1,scrollTrigger:{
                    trigger:el,
                    scrub:true
                }});
        })

        const returnAstronaut = setTimeout(()=>{
            setIsKilled(false);
        },30000);
        return ()=>clearTimeout(returnAstronaut);
    },[isKilled, listSelector]);

    return (
        <div  className="animation section">
            <div className="content">
                <Greeting/>
                <div className={`astronaut _anim_item ${isKilled?'_kill':''}`}>
                    <ReactSVG src="./images/other/sky.svg"/>
                    <img src="/images/other/astronaut.png" alt="astronaut" onClick={()=>{setIsKilled(!isKilled)}}/>
                </div>
            </div>
        </div>
    );
};

export {Animation};
