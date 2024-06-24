import React from 'react';

const ProgressStep = ({ step, title, paragraph }) => {
  return (
    <div className='progress-step'>
      <h1>{step}</h1>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default ProgressStep;
