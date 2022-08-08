import React from 'react';

const BlackHole: React.FC = () => {
    const [activeItem, setActiveItem] = React.useState<number>(0);

    const messages = [
        {id: 1, message: 'Hi my name is Alexander!'},
        {id: 2, message: 'I\'m 20 years old'},
        {id: 3, message: 'And I\'m a web developer'},
    ];

    React.useEffect(() => {
        const showMessage = setTimeout(()=>{
            setActiveItem(activeItem===3?1:activeItem+1)
        },4000);
        return ()=>clearTimeout(showMessage);
    }, [activeItem])

    return (
        <div className="black_hole">
            <div className="oval _anim_item">
                <div className="list">
                    {messages.map(msg => <span
                        key={msg.id}
                        className={activeItem === msg.id ? '_active' : ''}>{msg.message}</span>)}
                </div>
            </div>


        </div>
    );
};

export {BlackHole};
