import CoffeeGrid from '@/components/Home/CoffeeGrid';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
  return (
    <main>
      <Hero
        classes='hero'
        heading='Great coffee made simple.'
        paragraph='Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.'
        btnText='Create your plan'
      />
      <CoffeeGrid />
      <WhyChooseUs />
      <ProgressBar theme='light' />
    </main>
  );
}
