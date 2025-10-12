/**
 * Shared type definitions for the Omnia application
 */

// ============================================================================
// Component Props Types
// ============================================================================

export interface BaseComponentProps {
  className?: string;
}

export interface IconProps {
  icon: string;
  iconClass?: string;
}

// ============================================================================
// Service & Feature Types
// ============================================================================

export interface ServiceItem {
  iconClass: string;
  title: string;
  href: string;
  description: string;
}

export interface ManagedService {
  image: string;
  title: string;
  description: string;
  href: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

// ============================================================================
// Hero/Slider Types
// ============================================================================

export interface HeroSlide {
  backgroundImage: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaHref: string;
}

// ============================================================================
// Navigation Types
// ============================================================================

export interface NavigationElement {
  prevEl: HTMLButtonElement | null;
  nextEl: HTMLButtonElement | null;
}

export interface SwiperNavigationParams {
  prevEl?: HTMLButtonElement | null;
  nextEl?: HTMLButtonElement | null;
}

// ============================================================================
// SEO/Metadata Types
// ============================================================================

export interface JsonLdService {
  '@context': string;
  '@type': string;
  name: string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  areaServed: string;
  url: string;
  description: string;
  offers?: {
    '@type': string;
    itemOffered: {
      '@type': string;
      name: string;
    };
  };
}

// ============================================================================
// Form Types
// ============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

// ============================================================================
// Utility Types
// ============================================================================

export type PropsWithClassName<T = Record<string, never>> = T & { className?: string };

export type IconName = `fa-${string}` | `fas ${string}` | `far ${string}` | string;

// Type guard helpers
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
