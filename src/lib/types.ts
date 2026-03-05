// ============================================================================
// Hero / Swiper Types (used in landing page carousel)
// ============================================================================

export interface HeroSlide {
  readonly backgroundImage: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly ctaHref: string;
}

export interface SwiperNavigationParams {
  prevEl?: HTMLButtonElement | HTMLElement | null;
  nextEl?: HTMLButtonElement | HTMLElement | null;
}

export interface ExtendedSwiperParams {
  navigation?: boolean | SwiperNavigationParams;
  [key: string]: unknown;
}

// ============================================================================
// Home Page Section Types
// ============================================================================

export interface ServiceGridCard {
  readonly title: string;
  readonly href: string;
  readonly description: string;
  readonly icon: string;
}

export interface IconLabelItem {
  readonly icon: string;
  readonly label: string;
}

export interface CoreValue {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}
