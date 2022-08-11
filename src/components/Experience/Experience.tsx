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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad, animi distinctio dolore eaque earum est molestiae neque nisi
                        nobis possimus quaerat reiciendis repudiandae sint sunt ut.
                        Aperiam exercitationem ipsa optio.
                    </p>
                </div>

            </div>
        </div>
    );
};

export {Experience};
