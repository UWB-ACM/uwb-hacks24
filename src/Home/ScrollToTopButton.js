import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowButton(currentScrollPos > 1);
  };

  const handleClick = () => {
    animateScroll.scrollToTop({duration:200, smooth:'easeInOutQuint' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      className={`fixed z-20 bottom-4 right-4 bg-purple border-1 border-black text-white rounded-full p-2 hover:bg-light-purple 
      ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
