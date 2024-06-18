import Link from 'next/link';
import Hero from '@/components/Hero';

const About = () => {
  return (
    <div>
      <Hero
        classes='hero hero-about'
        heading='About Us'
        paragraph='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'
      />
      <Link href='/'>Back</Link>
    </div>
  );
};

export default About;
