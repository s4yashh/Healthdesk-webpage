'use client';

import Image from 'next/image';
import styles from '@/styles/NutritionSection.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  icon: string;
  buttonText: string;
}

const NutritionSection = (): JSX.Element => {
  const products: Product[] = [
    {
      id: 1,
      title: 'Weight Loss',
      description: 'Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you',
      icon: '/images/icons/weightloss.png',
      buttonText: 'Buy now',
    },
    {
      id: 2,
      title: 'Nerve Pain',
      description: 'Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function',
      icon: '/images/icons/nervepain.png',
      buttonText: 'Buy now',
    },
    {
      id: 3,
      title: 'Skin Care',
      description: 'Explore premium skincare products that nourish, protect, and enhance your natural glow',
      icon: '/images/icons/skincare.png',
      buttonText: 'Buy now',
    },
    {
      id: 4,
      title: 'Men\'s Health',
      description: 'Discover men\'s health products designed to boost energy, strength, and overall well-being',
      icon: '/images/icons/medicalhistory.png',
      buttonText: 'Buy now',
    },
    {
      id: 5,
      title: 'Women\'s Health',
      description: 'Explore women\'s health products designed to support hormonal balance and overall wellness',
      icon: '/images/icons/femaledoctor.png',
      buttonText: 'Buy now',
    },
  ];

  return (
    <section className={styles.nutritionSection} id="shop">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Nutrition Solutions<br />
          for Your Complete Well-Being
        </h2>

        <div className={styles.productsGrid}>
          <div className={styles.marqueeContainer}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.iconContainer}>
                  <Image
                    src={product.icon}
                    alt={product.title}
                    width={60}
                    height={60}
                    className={styles.productIcon}
                  />
                </div>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <button className={styles.productButton}>{product.buttonText}</button>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {products.map((product) => (
              <div key={`${product.id}-duplicate`} className={styles.productCard}>
                <div className={styles.iconContainer}>
                  <Image
                    src={product.icon}
                    alt={product.title}
                    width={60}
                    height={60}
                    className={styles.productIcon}
                  />
                </div>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <button className={styles.productButton}>{product.buttonText}</button>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default NutritionSection;
