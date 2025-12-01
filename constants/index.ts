// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'About Us', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
] as const;

// Color palette
export const COLORS = {
  primary: '#0066CC',
  secondary: '#0052A3',
  dark: '#333333',
  light: '#555555',
  background: '#FFFFFF',
  accent: '#F8F9FB',
  border: '#F0F0F0',
  shadow: 'rgba(0, 0, 0, 0.1)',
} as const;

// Spacing system
export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  xxl: '4rem',
} as const;

// Typography
export const TYPOGRAPHY = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
  lineHeight: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.7,
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '640px',
  ipad: '768px',
  desktop: '1024px',
} as const;

// Container
export const CONTAINER_MAX_WIDTH = '1200px';

// Animation durations
export const ANIMATIONS = {
  fast: '0.15s',
  normal: '0.3s',
  slow: '0.5s',
} as const;

// Border radius
export const BORDER_RADIUS = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '50px',
} as const;
