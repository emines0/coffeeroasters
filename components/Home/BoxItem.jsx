import Image from 'next/image';

const BoxItem = ({ img, alt, heading, paragraph }) => {
  return (
    <div className='box-item'>
      <Image src={img} alt={alt} width={0} height={0} />
      <div className='text'>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default BoxItem;
