import React from 'react';
import {Project} from "../Project";

interface IProps {
    reference: React.RefObject<HTMLDivElement>,
}

const Projects: React.FC<IProps> = ({reference}) => {

    return (
        <div id="projects" className="projects" ref={reference}>
            <div className="projects_top">
                <h2 className="_anim_item _anim_no_hide">My works</h2>

                <div className="underline _anim_item ">
                    <div className="line"/>
                </div>
            </div>
            <div className="projects_list">
                <Project projectName="Sneakers Shop"
                         poster="react_sneakers.png"
                         desc="The online sneakers-shop is written on the library react/Redux/Axios.
                                Instead of the database, used json.
                                Slider, sorting,filters, adaptive."
                         url="https://sneakers-shop-vert.vercel.app"
                         gitUrl="https://github.com/BielowAlex/sneakers_shop"/>
                <Project projectName="React/Redux pizza shop"
                         poster="react_pizza.png"
                         desc="  The online pizzeria is written on the library react/Redux/Axios.
                                Instead of the database, used json.
                                Different categories, sorting of order execution."
                         url="https://react-pizza-xi.vercel.app"
                         gitUrl="https://github.com/BielowAlex/react_pizza"/>
                <Project projectName="React AlexFilms"
                         poster="alex_films.png"
                         desc="A multi-page movie search site written in the React/Redux/Axios library.
                                Used the TMDB API.
                                Sort by genre, search, trailers, sliders."
                         url="https://alex-films-react.vercel.app"
                         gitUrl="https://github.com/BielowAlex/alex_films_react"/>
            </div>
        </div>
    );
};

export {Projects};
