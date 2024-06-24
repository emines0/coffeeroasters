import React from 'react';
import Button from './Button';

const HeroHome = ({ classes, heading, paragraph, btnText }) => {
  return (
    <>
      <div className={classes}>
        <div className='hero-content'>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          {btnText && (
            <Button url='/create-plan' color='primary' text={btnText} />
          )}
        </div>
      </div>
    </>
  );
};

export default HeroHome;
