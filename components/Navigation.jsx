'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/shared/desktop/logo.svg';
import close from '@/assets/shared/mobile/icon-close.svg';
import menu from '@/assets/shared/mobile/icon-hamburger.svg';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className='lg'>
        <div className='nav-left'>
          <Link href='/'>
            <Image src={logo} alt='Coffeeroasters' width={0} height={0} />
          </Link>
        </div>

        <div className='nav-right'>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              <Link href='/create-plan'>Create Your Plan</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className='sm'>
        <div className='nav-left'>
          <Link href='/' onClick={(prev) => setMenuOpen(!prev)}>
            <Image src={logo} alt='Coffeeroasters' width={0} height={0} />
          </Link>
        </div>
        <div className='nav-right'>
          {menuOpen && (
            <ul>
              <li>
                <Link href='/' onClick={(prev) => setMenuOpen(!prev)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' onClick={(prev) => setMenuOpen(!prev)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/create-plan'
                  onClick={(prev) => setMenuOpen(!prev)}
                >
                  Create Your Plan
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className='icons'>
          {menuOpen ? (
            <Image
              src={close}
              alt='close'
              width={0}
              height={0}
              onClick={(prev) => setMenuOpen(!prev)}
            />
          ) : (
            <Image
              src={menu}
              alt='menu'
              width={0}
              height={0}
              onClick={(prev) => setMenuOpen(prev)}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
