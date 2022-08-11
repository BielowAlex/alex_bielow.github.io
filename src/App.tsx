import React from 'react';
import './styles/style.css'
import {BlackHole, Background, Navigation, AboutMe, Projects, Experience} from "./components";
import {startAnimatedScroll} from "./hooks/startAnimatedScroll";


const App: React.FC = () => {
    const projects = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        startAnimatedScroll();
    });

    return (
        <div className="wrapper">
            <Background/>
            <Navigation projectsNode={projects}/>
            <BlackHole/>
            <AboutMe/>
            <Projects reference={projects}/>
            <Experience/>
            <AboutMe/>
        </div>
    );
}

export {App};
