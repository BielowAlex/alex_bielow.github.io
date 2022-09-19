import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {Greeting} from "../Greeting";
import {ReactSVG} from "react-svg";

gsap.registerPlugin(ScrollTrigger);
const AboutMe: React.FC = () => {
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
        <div  className="about_me section">
            {/*<div className="about_me_title " ref={listRef}>*/}
            {/*    <h2 className="item">I love programing!</h2>*/}
            {/*    <h2 className="item">I like building websites, and solve</h2>*/}
            {/*    <h2 className="item">business problem. Now I studying at</h2>*/}
            {/*    <h2 className="item">"UMCS Lublin" in Poland on</h2>*/}
            {/*    <h2 className="item"> specialization of computer science</h2>*/}
            {/*    <h2 className="item"> for 2 years.</h2>*/}
            {/*</div>*/}
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

export {AboutMe};
