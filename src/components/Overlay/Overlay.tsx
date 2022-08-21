import React from 'react';
import {Constellation} from "../Constellation";
import emailjs from 'emailjs-com'

interface IProps {
    isShow: boolean
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Overlay: React.FC<IProps> = ({isShow, setIsShow}) => {
    const svg = React.useRef(null);
    // @ts-ignore
    if (svg.current !== null) {
        // @ts-ignore
        console.log(svg.current.getTotalLength());

    }

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
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="612.002px" height="612.002px" viewBox="0 0 612.002 612.002"
                         style={{fill: 'none', stroke: "red", strokeWidth: "4px"}}
                         xmlSpace="preserve">
                        <g>
                            <path ref={svg} d="M589.794,94.066c-13.016-12.167-30.001-18.865-47.819-18.865c-19.357,0-38.037,8.106-51.255,22.244L241.278,364.551
		l-119.952-128.43c-13.202-14.137-31.873-22.247-51.222-22.247c-17.822,0-34.824,6.71-47.877,18.89
		C8.553,245.531,0.675,262.868,0.042,281.584c-0.638,18.716,6.052,36.55,18.832,50.212l170.255,182.297
		c10.979,11.787,25.51,19.168,41.704,21.309c0.22,0.037,0.439,0.066,0.684,0.09c0.124,0.021,0.248,0.381,0.368,0.395
		c3.354,0.393,6.11,0.914,8.686,0.914h0.575h0.477v-0.344c4.14,0,5.46-0.348,8.858-0.744c0.129-0.018,0.349-0.117,0.48-0.137
		c0.129-0.018,0.364-0.084,0.41-0.092c16.451-2.182,30.99-9.584,42.011-21.365L593.16,193.141
		C619.539,164.92,618.04,120.466,589.794,94.066z M581.067,181.835L281.302,502.797c-8.366,8.949-19.457,14.568-32.171,16.252
		c-0.115,0.018-0.476,0.037-0.658,0.066c-2.699,0.314-2.715,0.795-6.855,0.795v0.344h-0.472h-0.571
		c-1.896,0-3.925-0.477-6.562-0.777c-0.207-0.033-0.431-0.236-0.688-0.266c-12.655-1.676-23.746-7.373-32.083-16.324L30.97,320.531
		c-9.758-10.436-14.866-24.072-14.382-38.363c0.484-14.291,6.5-27.542,16.94-37.287c9.973-9.307,22.964-14.444,36.576-14.444
		c14.995,0,28.888,6.032,39.122,16.99l126,134.905c3.13,3.357,8.971,3.354,12.101,0l255.49-273.578
		c10.241-10.962,24.151-16.994,39.158-16.994c13.607,0,26.574,5.113,36.514,14.398C600.061,126.328,601.22,160.275,581.067,181.835z
		"/>
                        </g>
                    </svg>

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
