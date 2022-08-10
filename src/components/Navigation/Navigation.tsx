import React from 'react';

interface IProps{
    projectsNode: React.RefObject<HTMLDivElement>,
}

const Navigation: React.FC<IProps> = ({projectsNode}) => {
    const [activeCategory,setActiveCategory] = React.useState<number>(1);


    const checkActiveCategory = ()=>{
        console.log(window.scrollY);
        if(projectsNode.current!==null){

            if(window.scrollY>=0 && window.scrollY<=projectsNode.current?.offsetHeight){
                setActiveCategory(1)
            } else if(window.scrollY>=(projectsNode.current?.offsetTop - 660)
                && window.scrollY<(projectsNode.current.offsetTop+projectsNode.current.offsetHeight - 600)){
                setActiveCategory(2);
            }else if(window.scrollY>(projectsNode.current.offsetTop+projectsNode.current.offsetHeight - 600)){
                setActiveCategory(3);
            }
        }
    }

    React.useEffect(()=>{
        window.addEventListener('scroll',checkActiveCategory)
    });
    
    return (
        <nav>
                <a href={"#about_me"} className={`nav_item _first_item ${activeCategory===1?'_active':''}`}>
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">About me</span>
                </a>
            <a href={"#projects"} className={`nav_item ${activeCategory===2?'_active':''}`}>
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">My projects</span>
                </a>
            <span className={`nav_item ${activeCategory===3?'_active':''}`}>
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">about</span>
                </span>
            <span className={`nav_item _last_item ${activeCategory===4?'_active':''}`}>
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">about</span>
            </span>
            <div className="nav_title">
                Navigation
            </div>
        </nav>
    );
};

export {Navigation};
