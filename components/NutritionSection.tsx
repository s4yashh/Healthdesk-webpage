'use client';

import styles from '@/styles/NutritionSection.module.css';

const NutritionSection = (): JSX.Element => {
  return (
    <section className={styles.nutritionSection} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Nutrition Solutions<br />
          for Your Complete Well-Being
        </h2>
      </div>
    </section>
  );
};

export default NutritionSection;
