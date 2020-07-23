import React from 'react';
import './Styles/landing.css';
import Heading from './Heading';
import Subheading from './Subheading';
import Button from './Button';

const Landing = () => {
  return (
    <div>
      <div className="theLanding">
        <div className="textContainer">
          <Subheading name="issue" content="issue 088"/>
          <Heading name="landingCatalyst" content="Catalyst"/>
          <Subheading name="tagLine" content="Agents of change"/>
          <Subheading name="more" content="read more"/>
        </div>
        <Button name="see full issue"/>
      </div>
    </div>
  );
};

export default Landing;