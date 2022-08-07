import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav>
                <span className="nav_item _first_item _active">
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">About me</span>
                </span>
            <span className="nav_item">
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">about</span>
                </span>
            <span className="nav_item">
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">about</span>
                </span>
            <span className="nav_item _last_item">
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">about</span>
            </span>
            <div className="nav_title">
                Navigation
            </div>
        </nav>
    );
};

export {Navigation};
