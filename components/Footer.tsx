'use client';

import styles from '@/styles/Footer.module.css';

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} Health Desk Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
