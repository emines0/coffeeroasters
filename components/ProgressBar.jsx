import React from 'react';
import ProgressStep from './ProgressStep';
import Button from './Button';

const ProgressBar = ({ theme }) => {
  return (
    <div className={`progress ${theme === 'light' ? 'light' : 'dark'}`}>
      <h4>How it works</h4>
      <div className='progress-bar'>
        <div className='progress-line'></div>
        <div className='progress-circle'></div>
        <div className='progress-circle'></div>
        <div className='progress-circle'></div>
        <div className='progress-circle'></div>
      </div>
      <div className='progress-steps'>
        <ProgressStep
          step='01'
          title='Pick your coffee'
          paragraph='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        />

        <ProgressStep
          step='02'
          title='Choose the frequency'
          paragraph='Customize your order frequency, quantity, even your roast style 
and grind type. Pause, skip or cancel your subscription with 
no commitment through our online portal.'
        />

        <ProgressStep
          step='03'
          title='Receive and enjoy!'
          paragraph='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
        />
      </div>
      <Button url='/plan' color='primary' text='Create your plan' />
    </div>
  );
};

export default ProgressBar;
