import React from 'react';
import './styles/style.css'
import {AboutMe, Background, Navigation} from "./components";


const App: React.FC = () => {

    const messages = [
        {id:1,message:'I\'m 20 years old'},
        {id:2,message:'I\'m 20 years old'},
        {id:3,message:'Hi my name is Alexander'},
        {id:0,message:' I am a beginner frontend dev'},
    ]


    return (
        <div className="wrapper">
            <Background/>
            <Navigation/>
            <AboutMe/>
        </div>
    );
}

export {App};
