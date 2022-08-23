import React from 'react';

interface IProps {
    children:React.ReactNode,
    onClickHandler?: ()=> void
}

const NeonButton:React.FC<IProps> = ({children,onClickHandler}) => {
    return (
        <button  className="neon_btn" onClick={onClickHandler}>
            <span className="neon_line neon_line__top"/>
            <span className="neon_line neon_line__bottom"/>
            <span className="neon_line neon_line__left"/>
            <span className="neon_line neon_line__right"/>
            {children}
        </button>
    );
};

export {NeonButton};
