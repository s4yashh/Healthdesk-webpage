'use client';

import Image from 'next/image';
import styles from '@/styles/SocialIcons.module.css';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons = ({ className, iconSize = 40 }: SocialIconsProps): JSX.Element => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', image: '/images/icons/facebook.png' },
    { name: 'Twitter', url: 'https://twitter.com', image: '/images/icons/twitter.png' },
    { name: 'Telegram', url: 'https://t.me', image: '/images/icons/telegram.png' },
    { name: 'LinkedIn', url: 'https://linkedin.com', image: '/images/icons/linkedin.png' }
  ];

  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <a 
          key={social.name}
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          title={social.name} 
          aria-label={social.name}
          className={styles.socialLink}
        >
          <Image
            src={social.image}
            alt={social.name}
            width={24}
            height={24}
            className={styles.socialImage}
            priority={false}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
