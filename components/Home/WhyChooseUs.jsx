import coffeeBean from '/assets/home/desktop/icon-coffee-bean.svg';
import gift from '/assets/home/desktop/icon-gift.svg';
import truck from '/assets/home/desktop/icon-truck.svg';
import BoxItem from './BoxItem';

const WhyChooseUs = () => {
  return (
    <div className='box'>
      <div className='box-header'>
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className='box-content'>
        <BoxItem
          img={coffeeBean}
          alt='coffee-bean'
          heading='Best Quality'
          paragraph='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
        />
        <BoxItem
          img={gift}
          alt='gift'
          heading='Exclusive benefits'
          paragraph='Special offers and swag when you subscribe, including 30% off your first shipment.'
        />
        <BoxItem
          img={truck}
          alt='truck'
          heading='Free shipping'
          paragraph='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
