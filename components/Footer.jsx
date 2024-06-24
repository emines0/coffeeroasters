import Image from 'next/image';
import logoText from '@/assets/shared/desktop/coffeeroasters.svg';
import logoBean from '@/assets/shared/desktop/coffeebean.svg';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='logo'>
        <Image
          src={logoBean}
          alt='Coffeeroasters Logo Bean'
          width={0}
          height={0}
        />
        <Image
          src={logoText}
          alt='Coffeeroasters Logo Text'
          width={0}
          height={0}
        />
      </div>

      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='create-plan'>Create Your Plan</Link>
        </li>
      </ul>

      <div className='socials'>
        <Link href='https://www.facebook.com'>
          <FaFacebookSquare />
        </Link>
        <Link href='https://www.twitter.com'>
          <FaTwitter />
        </Link>
        <Link href='https://www.instagram.com'>
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
