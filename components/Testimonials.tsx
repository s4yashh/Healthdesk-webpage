'use client';

import Image from 'next/image';
import styles from '@/styles/Testimonials.module.css';

interface Testimonial {
  id: number;
  productName: string;
  productImage: string;
  rating: number;
  text: string;
  customerName: string;
}

const Testimonials = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      productName: 'TestoBites',
      productImage: '/images/products/prostazen.png',
      rating: 5,
      text: 'TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.',
      customerName: '- Ryan R.'
    },
    {
      id: 2,
      productName: 'Vita Renew',
      productImage: '/images/products/vitarenew.png',
      rating: 5,
      text: 'My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.',
      customerName: '- Jamie Fields'
    },
    {
      id: 3,
      productName: 'Nerve Freedom',
      productImage: '/images/products/nervefreedom.png',
      rating: 5,
      text: 'I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.',
      customerName: '- Anonymous'
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Verified Customer Testimonials</h2>

        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.productHeader}>
                <div className={styles.productImage}>
                  <Image
                    src={testimonial.productImage}
                    alt={testimonial.productName}
                    width={60}
                    height={60}
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.productName}>{testimonial.productName}</h3>
              </div>

              <div className={styles.rating}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>

              <p className={styles.testimonialText}>{testimonial.text}</p>

              <p className={styles.customerName}>{testimonial.customerName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
