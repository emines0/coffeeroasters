import React from 'react';

const HeroHome = ({ classes, heading, paragraph, btnText }) => {
  return (
    <>
      <div className={classes}>
        <div className='hero-content'>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          {btnText && <button className='btn btn-primary'>{btnText}</button>}
        </div>
      </div>
    </>
  );
};

export default HeroHome;
