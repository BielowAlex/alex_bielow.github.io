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

    const root = React.useMemo(() => document.querySelector(':root') as HTMLDivElement, []);


    const parallax = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = (e.clientX - window.innerWidth / 2) / 50;
        const y = (e.clientY - window.innerHeight / 2) / 50;

        if (root !== null) {
            root.style.setProperty('--posX', `${-x}`);
            root.style.setProperty('--posY', `${-y}`);
        }
    }



    const handleScrolling = (event:WheelEvent) => {
        if (!isShow && wrapper.current !== null) {
            return
        }

        event.preventDefault()
        event.stopPropagation();
    }

    React.useEffect(() => {
        if (wrapper.current !== null) {
            wrapper.current.addEventListener('wheel', handleScrolling);

            return () => {
                if (wrapper.current!==null) {
                    wrapper.current.removeEventListener('wheel', handleScrolling);
                }
            }
        }
    }, [isShow])


    React.useEffect(() => {
        startAnimatedScroll();
    });

    return (
        <div className={`wrapper ${isShow ? 'no_scroll' : ''}`} ref={wrapper} onMouseMove={(e) => parallax(e)}>
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
