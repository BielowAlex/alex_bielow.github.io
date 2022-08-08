import React from 'react';

const AboutMe: React.FC = () => {


    return (
        <div className="about_me">
            <div className="about_me_title">
                <h2 className="_anim_item">I love programing!</h2>
                <h2 className="_anim_item">I like building websites, and solve</h2>
                <h2 className="_anim_item">business problem. Now I studying at</h2>
                <h2 className="_anim_item">"UMCS Lublin" in Poland on</h2>
                <h2 className="_anim_item"> specialization of computer science</h2>
                <h2 className="_anim_item"> for 2 years.</h2>
            </div>
            <div className="content">
                <div className='obj _anim_item'>
                    Alex
                </div>

                <h3 className="_anim_item">
                    Additionally studying at the "Okten web school" courses.
                    I get great satisfaction from what I do.
                </h3>

            </div>
        </div>
    );
};

export {AboutMe};
