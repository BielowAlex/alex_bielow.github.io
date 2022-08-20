import React from 'react';

const Overlay: React.FC<boolean> = (isShow) => {


    return (
        <div className={`overlay ${isShow?'_show':''}`}>
            <div className="overlay_window">
                <div className="close">X</div>
                <div className="form_section">
                    <h2>Contact me</h2>
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

            </div>
        </div>
    );
};

export {Overlay};
