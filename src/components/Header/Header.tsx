import React from 'react';

const Header:React.FC = () => {
    const [letterId,setLetterId] = React.useState<number>(1);

    React.useEffect(()=>{
        if(letterId!==12){
            const startAnimation = setTimeout(()=>{
                setLetterId(letterId+1);
            },1000);
            return ()=> clearTimeout(startAnimation);
        }
    },[letterId])
    return (
        <header className="header">
            <div className="logo">
                <img height={100} width={100}    src="/images/other/logo.png" alt="logo"/>
            </div>
            <h1 className="header_title">
                <span className={`anim_letter ${letterId===1?'_active':''}`}>M</span>
                <span className={`anim_letter ${letterId===2?'_active':''}`}>Y</span>
                <span className={`anim_letter ${letterId===3?'_active':''}`}>P</span>
                <span className={`anim_letter ${letterId===4?'_active':''}`}>o</span>
                <span className={`anim_letter ${letterId===5?'_active':''}`}>r</span>
                <span className={`anim_letter ${letterId===6?'_active':''}`}>t</span>
                <span className={`anim_letter ${letterId===7?'_active':''}`}>f</span>
                <span className={`anim_letter ${letterId===8?'_active':''}`}>o</span>
                <span className={`anim_letter ${letterId===9?'_active':''}`}>l</span>
                <span className={`anim_letter ${letterId===10?'_active':''}`}>i</span>
                <span className={`anim_letter ${letterId===11?'_active':''}`}>o</span>
            </h1>
        </header>
    );
};

export {Header};
