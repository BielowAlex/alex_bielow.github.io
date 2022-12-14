import React from 'react';

import './styles/style.css'
import {
    AboutMe,
    Background,
    Navigation,
    Animation,
    Projects,
    Experience,
    Technologies,
    Header,
    Constellation,
    Overlay,
    Footer
} from "./components";

import {startAnimatedScroll} from "./hooks/startAnimatedScroll";


const App: React.FC = () => {
    const [isShow, setIsShow] = React.useState<boolean>(false);

    const wrapper = React.useRef<HTMLDivElement>(null);
    const projects = React.useRef<HTMLDivElement>(null);
    const exp = React.useRef<HTMLDivElement>(null);



    React.useEffect(() => {
        const handleScrolling = (event:WheelEvent) => {
            if (!isShow && wrapper.current !== null) {
                return
            }

            event.preventDefault()
            event.stopPropagation();
        }

        if (wrapper.current !== null) {
            const wrapperDiv = wrapper.current;
            wrapperDiv.addEventListener('wheel', handleScrolling);

            return () => wrapperDiv.removeEventListener('wheel', handleScrolling);

        }
    }, [ isShow])

    React.useEffect(() => {
        startAnimatedScroll();
    });

    return (
        <div className={`wrapper ${isShow ? 'no_scroll' : ''}`} ref={wrapper} >
            <Overlay isShow={isShow} setIsShow={setIsShow}/>
            <Header/>
            <Background/>
            <Constellation/>
            <Navigation projectsNode={projects} experienceNode={exp}/>
            <AboutMe/>
            <Animation/>
            <Projects reference={projects}/>
            <Experience reference={exp}/>
            <Technologies/>
            <Footer setIsShow={setIsShow}/>
        </div>
    );
}

export {App};
