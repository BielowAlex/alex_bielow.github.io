import React from 'react';

import {Project} from "../Project";
import {OtherProject} from '../OtherProject';
import {NeonButton} from "../CustomButtons";

interface IProps {
    reference: React.RefObject<HTMLDivElement>,
}

const Projects: React.FC<IProps> = ({reference}) => {
    const [isOtherShow, setIsOtherShow] = React.useState<boolean>(false);

    const toggle = () => {
        setIsOtherShow(!isOtherShow)
    }

    return (
        <div id="projects" className="projects section" ref={reference}>
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
                <Project projectName="Online pizza shop"
                         poster="react_pizza.png"
                         desc="  The online pizzeria is written on the library react/Redux/Axios.
                                Instead of the database, used json.
                                Different categories, sorting of order execution."
                         url="https://react-pizza-xi.vercel.app"
                         gitUrl="https://github.com/BielowAlex/react_pizza"/>
                <Project projectName="AlexFilms"
                         poster="alex_films.png"
                         desc="A multi-page movie search site written in the React/Redux/Axios library.
                                Used the TMDB API.
                                Sort by genre, search, trailers, sliders."
                         url="https://alex-films-react.vercel.app"
                         gitUrl="https://github.com/BielowAlex/alex_films_react"/>
                {isOtherShow
                    ?
                        <OtherProject projectName={'Portfolio DN'}
                                      poster={'denis_novak.png'}
                                      desc={'Landing page written in pure HTML/SCSS/js. Fully adaptive + mobile versions, animation, popup, multilingual.'}
                                      url={'https://bielowalex.github.io/portfolio/denis_novak.html'}
                                      gitUrl={'https://github.com/BielowAlex/Landing_page_Denis_Novak'}/>
                    : null
                }
                {
                    isOtherShow?
                        <OtherProject projectName={'NFT marketplace'}
                                      poster={'nft_marketplace.png'}
                                      desc={'Landing page written in pure HTML/SCSS/js. Fully adaptive + mobile versions, animation, popup.'}
                                      url={'https://bielowalex.github.io/nft_marketplace/'}
                                      gitUrl={'https://github.com/BielowAlex/nft_marketplace'}/>
                        :null
                }
            </div>
            <NeonButton onClickHandler={toggle}>
                {isOtherShow ? 'Hide' : 'Other'}
            </NeonButton>
        </div>
    );
};

export {Projects};
