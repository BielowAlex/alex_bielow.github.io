import React from 'react';

interface IProps{
    isShow:boolean
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Overlay: React.FC<IProps> = ({isShow,setIsShow}) => {


    return (
        <div className={`overlay ${isShow?'_show':''}`}>
                <div className="close" onClick={()=>setIsShow(false)}>X</div>
            {/*<div className="overlay_window">*/}
                <div className="form_section">
                    <div className="title">
                        <span className="anim_letter">C</span>
                        <span className="anim_letter">o</span>
                        <span className="anim_letter">n</span>
                        <span className="anim_letter">t</span>
                        <span className="anim_letter">a</span>
                        <span className="anim_letter">c</span>
                        <span className="anim_letter">t</span>
                        <span className="anim_letter">m</span>
                        <span className="anim_letter">e</span>
                    </div>
                    <p>
                        I’m interested in freelance opportunities
                         – especially ambitious or large projects.
                        However, if you have other request or question,
                        don’t hesitate to use the form.
                    </p>
                    <form className="form">
                        <div className="form_top">
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <input type="text" placeholder="subject"/>
                        <textarea name="msg" placeholder="Message"/>
                        <button className="neon_btn">
                            <span className="neon_line neon_line__top"/>
                            <span className="neon_line neon_line__bottom"/>
                            <span className="neon_line neon_line__left"/>
                            <span className="neon_line neon_line__right"/>
                            Send message!
                        </button>
                    </form>
                </div>

            {/*</div>*/}
        </div>
    );
};

export {Overlay};
