import React from 'react';
import {ReactSVG} from "react-svg";

const Constellation: React.FC = () => {
    const [translateCount, setTranslateCount] = React.useState<number>(0);
    const mainDiv = React.useRef<HTMLDivElement>(null)

    const root = React.useMemo(() => document.querySelector(':root') as HTMLDivElement, []);


    const parallax = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = (e.clientX - window.innerWidth / 2) / 50;
        const y = (e.clientY - window.innerHeight / 2) / 50;

        if (root !== null) {
            root.style.setProperty('--posX', `${-x}`);
            root.style.setProperty('--posY', `${-y}`);
        }
    }


    return (
        <div className="constellation _anim_item"
             style={{transform: `translateY(-${translateCount}px)`}}
             ref={mainDiv}
             onMouseMove={(e) => parallax(e)}>
            <ReactSVG src="./images/constellation/ursa.svg" className="constellation_ursa"/>
            <ReactSVG src="./images/constellation/Virgo.svg" className="constellation_virgo"/>
            <ReactSVG src="./images/constellation/Aries.svg" className="constellation_aries"/>

            <ReactSVG src="./images/constellation/stars.svg" className="stars"/>

        </div>
    );
};

export {Constellation};
