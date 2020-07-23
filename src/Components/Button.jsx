import React from 'react';
import './Styles/button.css'

const Button = (props) => {
  return (
    <div>
      <button className={props.name}>{props.content}</button>
    </div>
  );
};

export default Button;