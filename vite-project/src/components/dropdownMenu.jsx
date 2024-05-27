import React, { useState } from 'react';


const DropdownMenu = () => {
    const [isClick, setIsClick] = useState(false);

    const clickButtonHandler = () => {
        setIsClick(!isClick);
    }

    return (
        <div className="dropdown">
            <p className="drop-button" onClick={clickButtonHandler}>
                ☰
            </p>
            <div className={`dropdown-container ${isClick ? 'open' : ''}`}>
                <a>Home</a>
                <a>category</a>
                <a>Contact</a>
            </div>
        </div>
    );
}

export default DropdownMenu;
