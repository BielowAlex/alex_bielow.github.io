import React from 'react';

import './styles/style.css'
import {BlackHole, Background, Navigation, AboutMe, Projects, Experience, Technologies, Header} from "./components";
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
