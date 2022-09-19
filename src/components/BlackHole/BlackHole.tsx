import gsap from 'gsap';
import React from 'react';
import {ReactSVG} from "react-svg";

const BlackHole: React.FC = () => {
    const [slideId, setSlideId] = React.useState<number>(1)

    const slide1Ref = React.useRef<HTMLDivElement>(null);
    const slide2Ref = React.useRef<HTMLDivElement>(null);
    const titleRef = React.useRef(null);

    React.useEffect(() => {
        const keepScrolling = setTimeout(() => {
            if(slideId===1){
                gsap.fromTo(slide1Ref.current,{x:'-100%',opacity:0},{duration:1,x:0,opacity:1});
                gsap.to(slide2Ref.current,{x:'100%',opacity:0});
                setSlideId(slideId+1);
            }else{
                gsap.fromTo(slide2Ref.current,{x:'-100%',opacity:0},{duration:1,x:0,opacity:1});
                gsap.to(slide1Ref.current,{x:'100%',opacity:0});
                setSlideId(1);
            }
        }, 5000);
        return ()=>clearTimeout(keepScrolling)
    }, [slideId])

    React.useEffect(() => {
        gsap.fromTo(slide1Ref.current,{x:'-100%',opacity:0},{duration:1,x:0,opacity:1})
        setSlideId(slideId+1)
    },[])



    return (
        <div id="about_me" className="black_hole">
            <div className="title_slider" ref={titleRef} >
                <div className="slider_window" style={{}}>
                    <div className="slide" ref={slide1Ref}>
                        <div className="title_text">
                            <h2>Hi,</h2>
                        </div>
                        <div className="title_text">
                            <h2>My name is Alex,</h2>
                        </div>
                        <div className="title_text">
                            <h2>I'm web developer</h2>
                        </div>
                    </div>
                    <div className="slide" ref={slide2Ref}>
                        <div className="title_text">
                            <h2>I love programing!</h2>
                        </div>
                        <div className="title_text">
                            <h2>I like building websites,</h2>
                        </div>
                        <div className="title_text">
                            <h2>And solve business problem.</h2>
                        </div>
                    </div>

                </div>


            </div>
            <ReactSVG src='/images/constellation/Rocket.svg' className='rocket'/>
            <ReactSVG src='/images/constellation/Moon.svg' className='moon'/>
        </div>
    );
};

export {BlackHole};
