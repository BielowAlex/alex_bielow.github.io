import React from 'react';
import './styles/style.css'
import {BlackHole, Background, Navigation, AboutMe, Projects} from "./components";
import {startAnimatedScroll} from "./hooks/startAnimatedScroll";
// import {rotateOnScroll} from "./hooks/rotateOnScroll";


const App: React.FC = () => {

    React.useEffect(() => {
        startAnimatedScroll();
        // rotateOnScroll();
    });

    return (
        <div className="wrapper">
            <Background/>
            <Navigation/>
            <BlackHole/>
            <AboutMe/>
            <Projects/>
        </div>
    );
}

export {App};
