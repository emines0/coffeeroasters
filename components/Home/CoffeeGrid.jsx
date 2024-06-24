import Image from 'next/image';
import granEspresso from '/assets/home/desktop/image-gran-espresso.png';
import planalto from '/assets/home/desktop/image-planalto.png';
import piccollo from '/assets/home/desktop/image-piccollo.png';
import danche from '/assets/home/desktop/image-danche.png';

const CoffeeGrid = () => {
  return (
    <div className='our-collection'>
      <h2>our collection</h2>
      <div className='grid'>
        <div className='grid-item'>
          <Image alt='Gran Espresso' src={granEspresso} width={0} height={0} />
          <div className='text'>
            <h4>Gran Espresso</h4>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience.
            </p>
          </div>
        </div>
        <div className='grid-item'>
          <Image alt='Planalto' src={planalto} width={0} height={0} />
          <div className='text'>
            <h4>Planalto</h4>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts.
            </p>
          </div>
        </div>
        <div className='grid-item'>
          <Image alt='Piccollo' src={piccollo} width={0} height={0} />
          <div className='text'>
            <h4>Piccollo</h4>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry.
            </p>
          </div>
        </div>
        <div className='grid-item'>
          <Image alt='Danche' src={danche} width={0} height={0} />
          <div className='text'>
            <h4>Danche</h4>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeGrid;
