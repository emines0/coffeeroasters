import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import '@/styles/global.scss';

export const metadata = {
  title: 'Coffeereoasters Site',
  description: 'Get your freshly brewed coffee from us!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='container'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
