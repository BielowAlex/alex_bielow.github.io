import React from 'react';
import {ReactSVG} from "react-svg";

const Constellation: React.FC = () => {
    return (
        <div className="constellation _anim_item">
            <ReactSVG src="./images/constellation/ursa.svg" className="constellation_ursa"/>
            <ReactSVG src="./images/constellation/Virgo.svg" className="constellation_virgo"/>
            <ReactSVG src="./images/constellation/Aries.svg" className="constellation_aries"/>
            <ReactSVG src="./images/constellation/stars.svg" className="stars"/>
        </div>
    );
};

export {Constellation};
