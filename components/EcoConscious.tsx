'use client';

import Image from 'next/image';
import styles from '@/styles/EcoConscious.module.css';

const EcoConscious = (): JSX.Element => {
  return (
    <section className={styles.ecoConsciousSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/icons/eco.jpg"
              alt="Eco-Conscious Manufacturing"
              width={400}
              height={300}
              className={styles.ecoImage}
            />
          </div>

          <div className={styles.textContainer}>
            <h2 className={styles.title}>Eco-Conscious Manufacturing</h2>
            <p className={styles.subtitle}>Sustainable from Source to Shelf</p>

            <p className={styles.description}>
              Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you.
            </p>

            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoConscious;
