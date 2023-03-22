import React, { useState } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function CollapseButton(props) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    border: '1px solid #ced4da',
    width: '100%',
    borderRadius: 0,
    margin: 0,
    boxShadow: 'none',
    backgroundColor: open || hover ? '#f2f2f2' : '#fff',
    transition: 'background-color 0.15s ease-in-out',
  };

  return (
    <div className="collapse-button">
      <Button
        variant="btn-custom"
        size="lg"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
        block
        style={buttonStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {props.buttonText}
      </Button>
      <Collapse in={open} style={{transition: 'height 0.3s ease-in-out'}}>
        <div id="collapse-text" style={{height: open ? 'auto' : 0, overflow: 'hidden', transition: 'height 0.3s ease-in-out'}}>
          {props.children}
        </div>
      </Collapse>
    </div>
  );
}

export default CollapseButton;