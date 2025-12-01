'use client';

import Image from 'next/image';
import styles from '@/styles/NaturalComponents.module.css';

const NaturalComponents = (): JSX.Element => {
  return (
    <section className={styles.naturalComponentsSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/icons/fruitconnection.png"
              alt="100% Natural Components"
              width={350}
              height={350}
              className={styles.fruitImage}
            />
          </div>

          <div className={styles.textContainer}>
            <h2 className={styles.title}>100% Natural Components</h2>
            <p className={styles.subtitle}>Nature-Powered Wellness You Can Trust</p>

            <p className={styles.description}>
              We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Care Desk, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.
            </p>

            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalComponents;
