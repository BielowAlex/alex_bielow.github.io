import React from 'react';

const Header:React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img height={100} width={100}    src="/images/other/logo.png" alt="logo"/>
            </div>
            <h1 className="header_title">
                <span className="anim_letter">M</span>
                <span className="anim_letter">Y</span>
                <span className="anim_letter">P</span>
                <span className="anim_letter">o</span>
                <span className="anim_letter">r</span>
                <span className="anim_letter">t</span>
                <span className="anim_letter">f</span>
                <span className="anim_letter">o</span>
                <span className="anim_letter">l</span>
                <span className="anim_letter">i</span>
                <span className="anim_letter">o</span>
            </h1>
        </header>
    );
};

export {Header};
