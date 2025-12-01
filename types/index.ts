// Common types for the application

export interface NavLink {
  label: string;
  href: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export interface HeroTextProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface ColorOptions {
  primary: string;
  secondary: string;
  dark: string;
  light: string;
  background: string;
  accent: string;
  border: string;
}

export type BreakpointSize = 'mobile' | 'tablet' | 'ipad' | 'desktop';

export interface ResponsiveValue<T> {
  mobile?: T;
  tablet?: T;
  ipad?: T;
  desktop?: T;
}
