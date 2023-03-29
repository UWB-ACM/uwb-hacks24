import React from 'react';
import './Home.css';
import 'tailwindcss/tailwind.css';

{
    /* pass a unique buttonID attribute  if you want a button to correspond to one collapse item;
    use the same buttonID if you want two buttons to expand/collapse the same collapse item;
    text for the button goes into the buttonText attribute;
    text for the collapse item goes in between the CollapseButton tags;
*/}

function CollapseButton(props) {
    return (
      <div className="pt-2 pb-3">
        <p className="mb-3 space-y-1 md:space-x-1 md:space-y-0">
          <button
            className="rounded bg-purple px-6 pt-2.5 pb-2 text-2xl hover:bg-light-purple
            font-medium text-white w-full
            shadow-[0_4px_9px_-4px_#ac82ff] 
            transition duration-150 ease-in-out "
            type="button"
            data-te-collapse-init
            data-te-ripple-init
            data-te-ripple-color="light"
            data-te-target={"#" + props.buttonID} 
            aria-expanded="false"
            aria-controls={props.buttonID}
          >
            {props.buttonText}
          </button>
        </p>
        <div
          className="!visible hidden rounded-lg shadow-lg"
          id={props.buttonID}
          data-te-collapse-item
        >
          <div className="block rounded-lg bg-white p-6 dark:bg-neutral-700 dark:text-neutral-50">
            {props.children}
          </div>
        </div>
      </div>
    );
  }
  
  export default CollapseButton;