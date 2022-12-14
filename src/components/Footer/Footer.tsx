import React from 'react';
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps{
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Footer:React.FC<IProps> = ({setIsShow}) => {
    return (
        <footer id="contact" className="footer">
            <div className="footer_info">
                <h3 className="title">Languages</h3>
                <div className="my_language">
                    <span className="bold">English:A2 Pre Intermediate</span>
                    <span className="bold">Polish:C2 Proficient</span>
                    <span className="bold">Ukrainian:Native</span>
                    <span className="bold">Russian:C2 Proficient</span>
                </div>
                <h3>EMAIL: drohomyretskyi.oleksandr@ukr.net</h3>
                <div className="links">
                    <a href="https://www.linkedin.com/in/oleksandr-drohomoretskyi-275600242/" target="_blank" rel="noreferrer">
                        <div className="link">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/alex_bielow/" target="_blank" rel="noreferrer">
                        <div className="link">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                    </a>
                    <a href="https://facebook.com/sasha.below.336" target="_blank" rel="noreferrer">
                        <div className="link">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </div>
                    </a>
                    <a href="https://github.com/BielowAlex" target="_blank" rel="noreferrer">
                        <div className="link">
                            <FontAwesomeIcon icon={faGithub}/>
                        </div>
                    </a>
                </div>
            </div>
            <div className="footer_img" onClick={()=>setIsShow(true)}>
                <img height={200} width={150} src="/images/other/contact.png" alt="astronaut"/>
                <h3 className="astronaut_msg">Click to Contact Me</h3>
            </div>
        </footer>
    );
};

export {Footer};
