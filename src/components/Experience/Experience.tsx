import React from 'react';

const Experience: React.FC = () => {
    return (
        <div className="experience">
            <div className="experience_title">
                <h2 className="_anim_item">Experience</h2>
                <div className="underline ">
                    <div className="line"/>
                </div>
            </div>
            <div className="experience_list">
                <div className="experience_list_item _anim_item">
                    <span className="date">
                        Oct 2020-Today
                    </span>
                    <p className="exp_info">
                        I started my studies at <a href="https://www.umcs.pl"
                                                   target='_blank'
                                                   rel="noreferrer"
                                                   className="link">Maria Składowska Curie University</a> in Lublin.
                        In the direction of Informatics, mathematics and physics.
                        Where I study to this day. It was here that
                        I got basic knowledge about web programming, databases and learned Java.
                        And began to learn frontend independently.
                    </p>
                </div>
                <div className="experience_list_item _anim_item">
                    <span className="date">
                        Feb 2021-Today
                    </span>
                    <p className="exp_info">

                        I entered the Lviv <a href="https://owu.com.ua"
                                              target='_blank'
                                              rel="noreferrer"
                                              className="link">IT school Okten</a> for web programming,
                        where I received a lot of basic knowledge,
                        began to study React JS, SCRUM, Git, etc..
                        I created the front-end part of sites in HTML, SCSS, JS {'=>'}  .
                    </p>
                </div>
                <div className="experience_list_item _anim_item">
                    <div className="date">
                        Apr 2022-Future
                    </div>
                    <div className="exp_info">
                        Now I'm studying NodeJs and English. I also improve my knowledge of ReactJS,
                        create various projects(
                        <a href="https://sneakers-shop-vert.vercel.app"
                           target='_blank'
                           rel="noreferrer"
                           className="link">Sneakers Shop</a>, <a href="https://alex-films-react.vercel.app"
                           target='_blank'
                           rel="noreferrer"
                           className="link">AlexFilms</a>, <a href="https://react-pizza-xi.vercel.app"
                           target='_blank'
                           rel="noreferrer"
                           className="link">React Pizza</a>)
                        and take courses. I'm looking for a company to join,
                        if you like my works and think I'm a suitable candidate, contact me.
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Experience};
