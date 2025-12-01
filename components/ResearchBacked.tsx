'use client';

import Image from 'next/image';
import styles from '@/styles/ResearchBacked.module.css';

const ResearchBacked = (): JSX.Element => {
  return (
    <section className={styles.researchBackedSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Research-Backed Formulations</h2>
            <p className={styles.subtitle}>Formulated with Clinically Tested Ingredients</p>

            <p className={styles.description}>
              We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.
            </p>

            <button className={styles.learnMoreButton}>Learn More</button>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/icons/laboratory.jpg"
              alt="Research-Backed Formulations"
              width={400}
              height={300}
              className={styles.labImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchBacked;
