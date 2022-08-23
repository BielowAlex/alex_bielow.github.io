import React from 'react';
import emailjs from 'emailjs-com'
import {ReactSVG} from "react-svg";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {formValidator} from "../../validators";
import {NeonButton} from "../CustomButtons";

interface IProps {
    isShow: boolean
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>,
}

const Overlay: React.FC<IProps> = ({isShow, setIsShow}) => {
    const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

    const formRef = React.useRef<HTMLFormElement>(null);

    const {handleSubmit, reset, register, formState: {errors}} = useForm({
        resolver: joiResolver(formValidator),
        mode: "onTouched"
    })

    const sendMessage = () => {

        const {REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID, REACT_APP_USER_ID} = process.env;

        if (formRef.current !== null) {
            emailjs.sendForm(`${REACT_APP_SERVICE_ID}`, `${REACT_APP_TEMPLATE_ID}`, formRef.current, `${REACT_APP_USER_ID}`)
                .then((result) => {
                    setIsSuccess(true);
                    console.log(result.text)
                    reset();

                }, (error) => {
                    console.log(error.text);
                })
        }
    }

    React.useEffect(() => {
        if (isSuccess) {
            const closeWindow = setTimeout(() => {
                setIsSuccess(false);
                setIsShow(false);
            }, 2000);
            return () => clearTimeout(closeWindow)
        }
    }, [isSuccess, setIsShow])

    return (
        <div className={`overlay ${isShow ? '_show' : ''}`}>
            <div className="close" onClick={() => setIsShow(false)}>X</div>
            <div className={`alert ${isSuccess ? '_active' : ''}`}>
                <div className="icon">
                    <ReactSVG src="./images/other/like.svg"/>
                </div>
                <span>The email was sent successfully</span>
            </div>
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
                <form className="form" onSubmit={handleSubmit(sendMessage)} ref={formRef}>
                    <div className="form_top">
                        <input type="text" placeholder="Name" {...register("name")}
                               className={errors.name && '_invalid'}/>
                        <input type="email" placeholder="Email" {...register("email")}
                               className={errors.email && '_invalid'}/>
                    </div>
                    <input type="text" placeholder="Subject" {...register("subject")}
                           className={errors.subject && '_invalid'}/>
                    <textarea {...register("message")} placeholder="Message" className={errors.message && '_invalid'}/>
                    <NeonButton>
                        Send message
                    </NeonButton>
                </form>
            </div>
        </div>
    );
};

export {Overlay};
