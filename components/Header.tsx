'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';

interface NavLink {
  label: string;
  href: string;
}

const Header = (): JSX.Element => {
  const navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'About Us', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Image
              src="/images/hero/logo.png"
              alt="Health Desk Clinic Logo"
              width={100}
              height={78}
              priority
              className={styles.logoImage}
            />
          </div>

          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
            <div className={styles.contactImage}>
              <Image
                src="/images/hero/contact.png"
                alt="Contact"
                width={40}
                height={40}
                className={styles.contactImg}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
