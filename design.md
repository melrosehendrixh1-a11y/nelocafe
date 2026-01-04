# Nelo Cafe Digital Studio - Design Style Guide

## Design Philosophy

### Visual Language
**Luxury Minimalism with Apple-Inspired Sophistication**
- Clean, uncluttered layouts with generous white space
- Premium materials aesthetic (marble, brushed metal, soft textures)
- Sophisticated color palette emphasizing contrast and hierarchy
- Attention to micro-interactions and subtle animations
- Professional yet approachable corporate identity

### Color Palette
**Primary Colors:**
- Pure White (#FFFFFF) - Primary background and text contrast
- Deep Black (#000000) - Primary text and strong accents
- Charcoal Gray (#2C2C2E) - Secondary text and subtle elements
- Light Gray (#F2F2F7) - Section backgrounds and subtle dividers

**Accent Colors:**
- Silver Gray (#C7C7CC) - Borders and inactive elements
- Dark Gray (#1C1C1E) - Navigation and footer backgrounds

### Typography
**Primary Font Stack:**
- Display/Headers: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- Body Text: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- Fallback: system-ui, -apple-system, sans-serif

**Typography Scale:**
- Hero Headlines: 48-72px (bold, tight letter-spacing)
- Section Headers: 32-40px (semibold)
- Body Text: 16-18px (regular, 1.6 line-height)
- Captions: 14px (medium)

## Visual Effects & Animations

### Core Libraries Used
1. **Anime.js** - Smooth micro-interactions and element animations
2. **Splitting.js** - Advanced text effects for headlines
3. **Typed.js** - Typewriter effect for hero tagline
4. **Splide.js** - Elegant image carousels and sliders
5. **ECharts.js** - Clean data visualization for metrics
6. **p5.js** - Subtle background particle effects
7. **Pixi.js** - Advanced visual effects for hero backgrounds

### Animation Principles
- **Subtle Entrance**: Elements fade in with 16-24px upward motion
- **Stagger Timing**: 100ms delays between related elements
- **Easing**: Cubic-bezier(0.25, 0.46, 0.45, 0.94) for smooth deceleration
- **Duration**: 300-600ms for most transitions
- **Parallax**: Maximum 8% translateY for decorative elements

### Header Effects
- **Hero Background**: Subtle particle system with floating geometric shapes
- **Text Animation**: Typewriter effect for main headline with gradient color cycling
- **Image Treatment**: Ken Burns effect (subtle zoom) on hero images
- **Scroll Behavior**: Header becomes translucent with backdrop blur

### Interactive Elements
- **Buttons**: 3D tilt effect on hover with depth shadow
- **Cards**: Lift with expanded shadow and subtle scale increase
- **Images**: Zoom overlay with gradient mask reveal
- **Forms**: Input focus states with animated underlines

## Layout & Structure

### Grid System
- **Container**: Maximum 1200px width, centered with 24px padding
- **Columns**: 12-column grid with 24px gutters
- **Breakpoints**: 
  - Mobile: 320px-768px
  - Tablet: 768px-1024px  
  - Desktop: 1024px+

### Spacing Scale
- **Micro**: 4px, 8px (element spacing)
- **Small**: 16px, 24px (component spacing)
- **Medium**: 32px, 48px (section spacing)
- **Large**: 64px, 96px (major section breaks)

### Component Styling
- **Cards**: 12px border-radius, subtle shadow, hover elevation
- **Buttons**: 8px border-radius, 44px minimum height for mobile
- **Images**: 8px border-radius for consistency
- **Forms**: Clean borders, focus states with brand color accent

## Mobile-First Responsive Design

### Navigation
- **Desktop**: Horizontal navigation with hover states
- **Tablet**: Condensed horizontal nav with dropdown menus
- **Mobile**: Hamburger menu with full-screen overlay
- **Touch Targets**: Minimum 44px for all interactive elements

### Typography Scaling
- **Mobile**: 14-16px body text, 28-32px headlines
- **Tablet**: 16-18px body text, 36-40px headlines  
- **Desktop**: 18px body text, 48-72px headlines

### Content Adaptation
- **Images**: Responsive scaling with maintained aspect ratios
- **Grids**: Single column on mobile, multi-column on larger screens
- **Forms**: Full-width inputs on mobile, optimized layouts on desktop

## Accessibility & Performance

### Contrast Ratios
- **Text on White**: Black text ensures 21:1 contrast ratio
- **Text on Dark**: White text maintains 21:1 contrast ratio
- **Interactive Elements**: Clear focus indicators with 3:1 contrast

### Performance Optimization
- **Images**: WebP format with fallbacks, lazy loading
- **Animations**: GPU-accelerated transforms only
- **Fonts**: Preload critical fonts, display: swap for others
- **JavaScript**: Minimal bundle size, async loading for non-critical scripts

This design system ensures a cohesive, premium experience that reflects the luxury minimalism aesthetic while maintaining excellent usability across all devices.