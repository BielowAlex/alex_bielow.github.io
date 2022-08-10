import React from 'react';

interface IProps {
    children:React.ReactNode,
    url:string
}

const NeonButton:React.FC<IProps> = ({children, url}) => {
    return (
        <a href={url} target='_blank' rel="noreferrer" className="neon_btn">
            <span className="neon_line neon_line__top"/>
            <span className="neon_line neon_line__bottom"/>
            <span className="neon_line neon_line__left"/>
            <span className="neon_line neon_line__right"/>
            {children}
        </a>
    );
};

export {NeonButton};
