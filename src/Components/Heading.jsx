import React from 'react';
import './Styles/headings.css';

const Heading = (props) => {
  return (
    <div>
      <p className={props.name}>{props.content}</p>
    </div>
  );
};

export default Heading;