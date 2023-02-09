import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ematchLogo from '../public/Logo.svg';
import dutchFlag from '../public/Flag_of_the_Netherlands.svg';
import britishFlag from '../public/Flag_of_the_United_Kingdom.svg';
import { Button } from '@/components/button/Button';

import styles from './layout.module.scss';

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className={styles.navbarWrapper}>
        <div className={`${styles.navbar} wrapper`}>
          <Link href={'/'}>
            <Image
              src={ematchLogo}
              alt="Logo"
              width={300}
              className={styles.logo}
            />
          </Link>
          <div className={styles.flagWrapper}>
            <Button></Button>
          </div>
        </div>
      </nav>

      <div className={styles.layout}>{children}</div>
    </>
  );
}
