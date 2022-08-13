import React from 'react';

import './styles/style.css'
import {
    BlackHole,
    Background,
    Navigation,
    AboutMe,
    Projects,
    Experience,
    Technologies,
    Header,
    Constellation
} from "./components";
import {startAnimatedScroll} from "./hooks/startAnimatedScroll";
import Footer from "./components/Footer/Footer";


const App: React.FC = () => {
    const projects = React.useRef<HTMLDivElement>(null);
    const exp = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        startAnimatedScroll();
    });

    return (
        <div className="wrapper">
            <Header/>
            <Background/>
            <Constellation/>
            <Navigation projectsNode={projects} experienceNode={exp}/>
            <BlackHole/>
            <AboutMe/>
            <Projects reference={projects}/>
            <Experience reference={exp}/>
            <Technologies/>
            <Footer/>
        </div>
    );
}

export {App};
