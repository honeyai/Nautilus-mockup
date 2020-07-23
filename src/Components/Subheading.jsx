import React from 'react';
import './Styles/subheadings.css'
const Subheading = (props) => {
  return (
    <div>
      <p className={props.name}>{props.content}</p>
    </div>
  );
};

export default Subheading;