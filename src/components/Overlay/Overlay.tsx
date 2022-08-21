import React from 'react';
import emailjs from 'emailjs-com'

import {Constellation} from "../Constellation";
import {ReactSVG} from "react-svg";

interface IProps {
    isShow: boolean
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Overlay: React.FC<IProps> = ({isShow, setIsShow}) => {
    const svg = React.useRef(null);

    const [isSuccess, setIsSucces] = React.useState<boolean>(false);
    const [message, setMessage] = React.useState<string>('Success');

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID, REACT_APP_USER_ID} = process.env;

        emailjs.sendForm(`${REACT_APP_SERVICE_ID}`, `${REACT_APP_TEMPLATE_ID}`, e.currentTarget, `${REACT_APP_USER_ID}`)
            .then((result) => {
                setIsSucces(true);
                console.log(result.text)
                e.currentTarget.reset()
            },(error)=>{
                console.log(error)
            })
    }

    React.useEffect(() => {
        if (isSuccess) {
            const closeWindow = setTimeout(() => {
                setIsSucces(false);
                setIsShow(false);
            }, 2000);
            return () => clearTimeout(closeWindow)
        }
    }, [isSuccess])

    return (
        <div className={`overlay ${isShow ? '_show' : ''}`}>
            <Constellation/>
            <div className="close" onClick={() => setIsShow(false)}>X</div>
            <div className={`alert ${isSuccess ? '_active' : ''}`}>
                <div className="icon">
                    <ReactSVG src="./images/other/like.svg"/>
                </div>
                <span>The email was sent successfully</span>
            </div>
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
                    It is very important for me to receive feedback,
                    evaluation of my project.
                    Also I’m interested in freelance opportunities
                    – especially ambitious or large projects.
                    However, if you have other request or question,
                    don’t hesitate to use the form.
                </p>
                <form className="form" onSubmit={(e) => sendMessage(e)}>
                    <div className="form_top">
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="email" placeholder="Email" name="email"/>
                    </div>
                    <input type="text" placeholder="Subject" name="subject"/>
                    <textarea name="message" placeholder="Message"/>
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
