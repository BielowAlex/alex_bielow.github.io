import React from 'react';

interface IProps{
    projectsNode: React.RefObject<HTMLDivElement>,
    experienceNode: React.RefObject<HTMLDivElement>,
}

const Navigation: React.FC<IProps> = ({projectsNode,experienceNode}) => {
    const [activeCategory,setActiveCategory] = React.useState<number>(1);


    const checkActiveCategory = ()=>{
        console.log(window.scrollY);
        if(projectsNode.current!==null && experienceNode.current!==null){

            if(window.scrollY>=0 && window.scrollY<=projectsNode.current?.offsetHeight){
                setActiveCategory(1)
            } else if(window.scrollY>=(projectsNode.current?.offsetTop - 660)
                && window.scrollY<(projectsNode.current.offsetTop+projectsNode.current.offsetHeight - 600)){
                setActiveCategory(2);
            }else if(window.scrollY>(projectsNode.current.offsetTop+projectsNode.current.offsetHeight - 600)
                && window.scrollY<(experienceNode.current.offsetTop+experienceNode.current.offsetHeight - 300)){
                setActiveCategory(3);
            }else if(window.scrollY>(experienceNode.current.offsetTop+experienceNode.current.offsetHeight - 300)){
                setActiveCategory(4);
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
            <a href={"#experience"} className={`nav_item ${activeCategory===3?'_active':''}`}>
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">Experience</span>
                </a>
            <a href={"#contact"} className={`nav_item _last_item ${activeCategory===4?'_active':''}`}>
                    <div className="line"/>
                    <div className="circle"/>
                    <div className="line"/>
                    <span className="text">Contact</span>
            </a>
            <div className="nav_title">
                Navigation
            </div>
        </nav>
    );
};

export {Navigation};
