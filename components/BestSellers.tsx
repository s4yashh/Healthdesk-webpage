'use client';

import Image from 'next/image';
import styles from '@/styles/BestSellers.module.css';

interface Product {
  id: number;
  name: string;
  rating: number;
  image: string;
  buttonText: string;
}

const BestSellers = (): JSX.Element => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Dent Pure',
      rating: 5,
      image: '/images/products/dentpure.png',
      buttonText: 'Shop Now',
    },
    {
      id: 2,
      name: 'True Fem',
      rating: 5,
      image: '/images/products/truefem.png',
      buttonText: 'Shop Now',
    },
    {
      id: 3,
      name: 'Vita Renew',
      rating: 5,
      image: '/images/products/vitarenew.png',
      buttonText: 'Shop Now',
    },
    {
      id: 4,
      name: 'ProstaZen',
      rating: 5,
      image: '/images/products/prostazen.png',
      buttonText: 'Shop Now',
    },
    {
      id: 5,
      name: 'Nerve Freedom',
      rating: 5,
      image: '/images/products/nervefreedom.png',
      buttonText: 'Shop Now',
    },
  ];

  return (
    <section className={styles.bestSellersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Best Sellers</h2>
        <p className={styles.description}>
          Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
        </p>

        <div className={styles.featuresContainer}>
          <div className={styles.feature}>
            <span className={styles.featureName}>Results-Driven</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureName}>All-Natural</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureName}>Non-GMO</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureName}>Cruelty-free</span>
          </div>
        </div>

        <div className={styles.productsContainer}>
          <div className={styles.marqueeContainer}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={240}
                    className={styles.productImage}
                  />
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.ratingContainer}>
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>
                <button className={styles.shopButton}>{product.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
