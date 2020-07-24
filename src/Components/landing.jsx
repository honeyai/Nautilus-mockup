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
          <Subheading name="issue" content="issue 079" />
          <Heading name="landingCatalyst" content="Catalysts" />
          <Subheading name="tagLine" content="Agents of change" />
          <Subheading name="more" content="read more" />
          <Button name="landingButton" content="see full issue" />
        </div>
        <Button name="scrollDown"
          content={
            <div className="buttonContent">
              <div className="buttonImage"></div>
              <div className="buttonText">scroll down</div>
            </div>
          } />
      </div>
    </div>
  );
};

export default Landing;