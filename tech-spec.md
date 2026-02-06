# Semler Premium Website - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React + TypeScript + Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| State Management | React useState/useRef |
| Carousel | Embla Carousel (via shadcn) |

## 2. Tailwind Configuration Extensions

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        'semler-black': '#000000',
        'semler-dark': '#111111',
        'semler-gray': '#333333',
        'semler-light': '#F5F5F5',
        'semler-green': '#2D5A3D',
        'semler-gold': '#C9A962',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['80px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section-mobile': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button (customize: rounded-full variant)
- Card
- Input
- Sheet (for mobile menu)
- Carousel (Embla-based)

### Custom Components

#### Layout Components
| Component | Props | Description |
|-----------|-------|-------------|
| `Header` | - | Fixed navigation header |
| `Footer` | - | Site footer with links |
| `Container` | `children`, `className` | Max-width wrapper |

#### Section Components
| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSection` | - | Hero with carousel |
| `ShowroomSection` | - | Car cards horizontal scroll |
| `WorkshopSection` | - | Workshop booking section |
| `BrandsSection` | - | Brand showcase |
| `LeasingSection` | - | License plate form |
| `AboutSection` | - | About content |
| `EventsSection` | - | Events grid |

#### UI Components
| Component | Props | Description |
|-----------|-------|-------------|
| `CarCard` | `car: CarData` | Individual car card |
| `EventCard` | `event: EventData` | Event card |
| `BrandCard` | `brand: BrandData` | Brand showcase card |
| `LicensePlateInput` | `onSubmit` | 7-char license input |
| `HeroCarousel` | `images: string[]` | Hero image carousel |

### Types

```typescript
interface CarData {
  id: string;
  brand: string;
  model: string;
  location: 'København' | 'Aarhus';
  price: number;
  image: string;
}

interface EventData {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface BrandData {
  name: string;
  image: string;
  link: string;
}
```

## 4. Animation Implementation Plan

| Interaction Name | Tech Choice | Implementation Logic |
|------------------|-------------|---------------------|
| Page Load | Framer Motion | `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, duration 0.6s |
| Hero Text Reveal | Framer Motion | `staggerChildren: 0.1`, each child `y: 30 -> 0`, `opacity: 0 -> 1` |
| Hero Carousel | Framer Motion + setInterval | Auto-advance every 5s, `AnimatePresence` for fade transitions |
| Header Scroll | React useState + scroll listener | Toggle `scrolled` class when scrollY > 50 |
| Card Hover | Tailwind + Framer | `whileHover={{ y: -4 }}`, shadow transition |
| Image Hover | Tailwind | `group-hover:scale-105` with overflow-hidden |
| Button Hover | Tailwind | `hover:translate-y-[-2px]`, `transition-all duration-200` |
| Scroll Reveal | Framer Motion | `whileInView`, `viewport={{ once: true }}` |
| Horizontal Scroll | CSS + JS | `scroll-snap-type: x mandatory`, smooth scroll behavior |
| Link Underline | CSS | `::after` pseudo-element, scaleX animation |

### Animation Timing Reference

| Animation | Duration | Easing |
|-----------|----------|--------|
| Micro-interaction | 150ms | ease-out |
| Hover effect | 200-300ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Page transition | 500ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Hero carousel | 800ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Scroll reveal | 600ms | cubic-bezier(0.4, 0, 0.2, 1) |

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/
│       ├── hero/
│       ├── cars/
│       ├── workshops/
│       ├── brands/
│       └── events/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn components
│   │   ├── layout/       # Header, Footer
│   │   └── shared/       # CarCard, EventCard, etc.
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ShowroomSection.tsx
│   │   ├── WorkshopSection.tsx
│   │   ├── BrandsSection.tsx
│   │   ├── LeasingSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── EventsSection.tsx
│   ├── hooks/            # Custom hooks
│   │   └── useScrollPosition.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── data/             # Static data
│   │   └── cars.ts
│   ├── lib/              # Utilities
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation Commands

```bash
# Initialize project
cd /mnt/okcomputer/output/app

# Animation library
npm install framer-motion

# Carousel (if not pre-installed)
npm install embla-carousel-react embla-carousel-autoplay

# Class utilities
npm install clsx tailwind-merge
```

## 7. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | Small tablets |
| md | 768px | Tablets |
| lg | 1024px | Small desktops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

## 8. Performance Considerations

1. **Images**: Use WebP format, lazy loading, proper sizing
2. **Animations**: Use `transform` and `opacity` only
3. **Fonts**: Use system font stack with Inter as primary
4. **Code Splitting**: Lazy load sections if needed
5. **Reduced Motion**: Respect `prefers-reduced-motion`

## 9. Accessibility Requirements

1. **Color Contrast**: Minimum 4.5:1 for text
2. **Focus States**: Visible focus indicators
3. **Alt Text**: Descriptive alt text for all images
4. **Keyboard Navigation**: All interactive elements accessible
5. **ARIA Labels**: Proper labeling for icons and buttons
