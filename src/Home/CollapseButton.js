import React, { useState } from 'react';
import classNames from 'classnames';
import './Home.css';
import 'tailwindcss/tailwind.css';

function CollapseButton(props) {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const buttonStyle = classNames(
        'bg-purple hover:bg-purple2 text-white font-bold py-2 px-4 rounded w-100',
        {
            'bg-gray-100': open || hover,
        }
    );

    return (
        <div class="collapse-button text-purple2 text-2xl">
            <button
                class={buttonStyle}
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text"
                aria-expanded={open}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {props.buttonText}
            </button>
            <div
                className="overflow-hidden"
                style={{ height: open ? 'auto' : 0 }}
            >
                {props.children}
            </div>
        </div>
    );
}

export default CollapseButton;