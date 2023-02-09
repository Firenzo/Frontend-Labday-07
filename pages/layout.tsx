import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ematchLogo from '../public/Logo.svg';
import dutchFlag from '../public/Flag_of_the_Netherlands.svg';
import britishFlag from '../public/Flag_of_the_United_Kingdom.svg';

import styles from './layout.module.scss';

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href={'/'}>
          <Image src={ematchLogo} alt="Logo" />
        </Link>
        <div>
          <Link href={'https://example.com/'}>About</Link>
          <Link href={'https://example.com/'}>Download</Link>
        </div>
        <div>
          <Link href={'/?lang=nl'}>
            <Image src={dutchFlag} alt="Dutch version" width={60} />
          </Link>
          <Link href={'/?lang=en'}>
            <Image src={britishFlag} alt="English version" width={60} />
          </Link>
        </div>
      </nav>
      <div className={styles.layout}>{children}</div>
    </>
  );
}
