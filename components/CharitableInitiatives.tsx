'use client';

import Image from 'next/image';
import styles from '@/styles/CharitableInitiatives.module.css';

interface Charity {
  id: number;
  name: string;
  logo: string;
}

const CharitableInitiatives = (): JSX.Element => {
  const charities: Charity[] = [
    { id: 1, name: 'Prostate Cancer Foundation', logo: '/images/icons/prostatecancer.png' },
    { id: 2, name: 'American Tinnitus', logo: '/images/icons/americantinnitus.png' },
    { id: 3, name: 'U.S. Pain Foundation', logo: '/images/icons/uspain.png' },
    { id: 4, name: 'American Diabetes Association', logo: '/images/icons/americandiabetes.png' },
    { id: 5, name: 'American Heart Association', logo: '/images/icons/americanheart.png' }
  ];

  return (
    <section className={styles.charitableSection} style={{ backgroundImage: 'url(/images/icons/bg2.jpg)' }}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Our Charitable Initiatives</h2>
          <h3 className={styles.subtitle}>Health Care Desk Gives Back</h3>
          <p className={styles.description}>
            At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.
          </p>

          <div className={styles.charitiesContainer}>
            {charities.map((charity) => (
              <div key={charity.id} className={styles.charityLogo}>
                <Image
                  src={charity.logo}
                  alt={charity.name}
                  width={140}
                  height={80}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharitableInitiatives;
