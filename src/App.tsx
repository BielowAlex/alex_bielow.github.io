import React from 'react';
import './styles/style.css'
import {BlackHole, Background, Navigation, AboutMe} from "./components";
import {startAnimatedScroll} from "./hooks/startAnimatedScroll";


const App: React.FC = () => {

    React.useEffect(() => {
        startAnimatedScroll();
    });

    return (
        <div className="wrapper">
            <Background/>
            <Navigation/>
            <BlackHole/>
            <AboutMe/>
            <AboutMe/>
        </div>
    );
}

export {App};
