'use client';

import Link from 'next/link';
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
            <div className={styles.logoIcon}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="8" fill="#0066CC" />
                <path d="M20 8L24 14H16L20 8Z" fill="white" />
                <rect x="14" y="15" width="12" height="10" rx="2" fill="white" />
                <circle cx="20" cy="32" r="4" fill="white" />
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.mainText}>HEALTH DESK</span>
              <span className={styles.subText}>Clinic</span>
            </div>
          </div>

          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
            <button className={styles.newsletterBtn} aria-label="Newsletter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4H18C19.1 4 20 4.9 20 6V14C20 15.1 19.1 16 18 16H2C0.9 16 0 15.1 0 14V6C0 4.9 0.9 4 2 4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M20 6L10 11L0 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
