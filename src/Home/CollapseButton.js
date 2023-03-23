import React, { useState } from 'react';
import classNames from 'classnames';
import './Home.css';
import 'tailwindcss/tailwind.css';

function CollapseButton(props) {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const buttonStyle = classNames(
        'border border-gray-300 w-full rounded-none p-0 bg-white',
        {
            'bg-gray-100': open || hover,
        }
    );

    return (
        <div className="collapse-button">
            <button
                className={buttonStyle}
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text"
                aria-expanded={open}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {props.buttonText}
            </button>
            <div
                className="overflow-hidden transition-all duration-300"
                style={{ height: open ? 'auto' : 0 }}
            >
                {props.children}
            </div>
        </div>
    );
}

export default CollapseButton;
