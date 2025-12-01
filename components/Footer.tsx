'use client';

import Image from 'next/image';
import SocialIcons from '@/components/SocialIcons';
import styles from '@/styles/Footer.module.css';
import socialStyles from '@/styles/SocialIcons.module.css';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      {/* Top Section - Logo and Social */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <Image
              src="/images/icons/healthdesk.png"
              alt="Health Desk"
              width={150}
              height={50}
              className={styles.logo}
            />
          </div>

          <div className={styles.followSection}>
            <button className={styles.followButton}>Follow Us</button>
            <SocialIcons className={socialStyles.socialIcons} iconSize={24} />
          </div>
        </div>
      </div>

      {/* Middle Section - Three Columns */}
      <div className={styles.middleSection}>
        <div className={styles.container}>
          <div className={styles.columnsWrapper}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Have a Question?</h3>
              <p className={styles.columnDescription}>Check out our FAQs where we answer the most commonly asked questions</p>
              <button className={styles.readFaqsButton}>Read FAQs</button>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Connect With Us</h3>
              <p className={styles.columnDescription}>Enjoy free shipping for all orders.</p>
              <p className={styles.phone}>1-800-822-7777</p>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>We're Social</h3>
              <p className={styles.columnDescription}>Like us, love us, follow us!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterWrapper}>
            <div className={styles.newsletterText}>
              <h2 className={styles.newsletterTitle}>Let's Grow Together</h2>
              <p className={styles.newsletterSubtitle}>We'll keep it simple. Only the news and updates you need.</p>
            </div>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Please Enter Your Email"
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section - Company Info and Products */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomWrapper}>
            <div className={styles.companyInfo}>
              <p className={styles.infoTitle}>
                <Image
                  src="/images/icons/healthdesk.png"
                  alt="Health Desk"
                  width={80}
                  height={30}
                  className={styles.miniLogo}
                />
              </p>
              <p className={styles.address}>Address: 7823 Red Oak Trail, Austin, TX, 78745, United States</p>
              <p className={styles.phone}>Phone: (512) 555-2376</p>
              <p className={styles.email}>Email: Eforce@outlook.com</p>
            </div>

            <div className={styles.productsSection}>
              <h4 className={styles.productsTitle}>Our Products</h4>
              <div className={styles.productsList}>
                <div className={styles.productColumn}>
                  <a href="#">Vita Renew</a>
                  <a href="#">Testobites</a>
                  <a href="#">Audizen</a>
                  <a href="#">Nerve Flow</a>
                  <a href="#">Uro flow</a>
                </div>
                <div className={styles.productColumn}>
                  <a href="#">Vita Renew</a>
                  <a href="#">Testobites</a>
                  <a href="#">Audizen</a>
                  <a href="#">Nerve Flow</a>
                  <a href="#">Memof</a>
                </div>
                <div className={styles.productColumn}>
                  <a href="#">Vita Renew</a>
                  <a href="#">Testobites</a>
                  <a href="#">Audizen</a>
                  <a href="#">Nerve Flow</a>
                  <a href="#">Derma care</a>
                </div>
                <div className={styles.productColumn}>
                  <a href="#">Vita Renew</a>
                  <a href="#">Testobites</a>
                  <a href="#">Audizen</a>
                  <a href="#">Nerve Flow</a>
                  <a href="#">TestoZen</a>
                </div>
                <div className={styles.productColumn}>
                  <a href="#">Vita Renew</a>
                  <a href="#">Testobites</a>
                  <a href="#">Audizen</a>
                  <a href="#">Nerve Flow</a>
                  <a href="#">True Fem</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <div className={styles.container}>
          <div className={styles.disclaimer}>
            <p>These statements have not been evaluated by the Food and Drug Administration.</p>
            <p>These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.</p>
          </div>

          <div className={styles.paymentMethods}>
            <Image
              src="/images/icons/cards.png"
              alt="Payment Methods"
              width={200}
              height={40}
              className={styles.paymentImage}
            />
          </div>

          <div className={styles.footerLinks}>
            <p className={styles.copyright}>© 2025, Health Desk Clinic. All Rights Reserved.</p>
            <div className={styles.links}>
              <a href="#">Terms And Conditions</a>
              <span className={styles.divider}>|</span>
              <a href="#">Privacy Policy</a>
              <span className={styles.divider}>|</span>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
