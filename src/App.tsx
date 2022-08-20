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
    Constellation, Overlay
} from "./components";
import {startAnimatedScroll} from "./hooks/startAnimatedScroll";
import Footer from "./components/Footer/Footer";


const App: React.FC = () => {
    const [isShow,setIsShow] = React.useState<boolean>(false);

    const projects = React.useRef<HTMLDivElement>(null);
    const exp = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        startAnimatedScroll();
    });

    return (
        <div className="wrapper">
            <Overlay isShow={isShow} setIsShow={setIsShow}/>
            <Header/>
            <Background/>
            <Constellation/>
            <Navigation projectsNode={projects} experienceNode={exp}/>
            <BlackHole/>
            <AboutMe/>
            <Projects reference={projects}/>
            <Experience reference={exp}/>
            <Technologies/>
            <Footer setIsShow={setIsShow}/>
        </div>
    );
}

export {App};
