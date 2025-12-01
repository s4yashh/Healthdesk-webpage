'use client';

import Image from 'next/image';
import styles from '@/styles/Hero.module.css';

const Hero = (): JSX.Element => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              Health Desk Clinic:<br />
              All Natural Supplements
            </h1>
            <p className={styles.description}>
              Health Care Desk is the premier choice for those seeking wellness
              through wholesome, superfood-enriched formulas that actually work.
              Our all-natural, organic health supplements are designed to give
              your body what it needs to thrive and optimize your health each
              day!
            </p>
            <button className={styles.ctaButton}>Shop Now</button>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/images/hero/doctor.png"
              alt="Health professional doctor"
              width={300}
              height={400}
              priority
              className={styles.doctorImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
