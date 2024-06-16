import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <h1 className='title'>Title</h1>
      {/* Generate from h2 to h4 random titles */}
      <h2>Subtitle</h2>
      <h3>Subtitle</h3>
      <h4>Subtitle</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        minima veritatis nulla, doloribus autem explicabo nemo. Similique
        adipisci omnis aliquid!
      </p>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href=''>Contact</Link>
    </main>
  );
}
