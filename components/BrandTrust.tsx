'use client';

import Image from 'next/image';
import styles from '@/styles/BrandTrust.module.css';

interface Feature {
  id: number;
  title: string;
  icon: string;
}

const BrandTrust = (): JSX.Element => {
  const features: Feature[] = [
    { id: 1, title: 'All Natural', icon: '/images/icons/leaves.png' },
    { id: 2, title: 'Cruelty-Free', icon: '/images/icons/rabbit.png' },
    { id: 3, title: 'Money-back Guarantee', icon: '/images/icons/90days.png' },
    { id: 4, title: 'Giving back', icon: '/images/icons/handonheart.png' },
    { id: 5, title: 'Non-GMO', icon: '/images/icons/dna.png' }
  ];

  return (
    <section className={styles.brandTrustSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>A Brand That You Can Trust</h2>
        <p className={styles.subtitle}>
          Our results-driven supplements are made with premium & safe ingredients
        </p>

        <div className={styles.featuresContainer}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className={styles.icon}
                />
              </div>
              <p className={styles.featureTitle}>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;
