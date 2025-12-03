# Changelog

All notable changes to the Vikranth Vegesina Personal Portfolio Website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-02

### Added - Initial Release

#### Core Structure
- Modern single-page application layout
- Semantic HTML5 structure
- Responsive design system
- Mobile-first approach
- Fixed navigation header with blur effect

#### Visual Effects & Animations
- **Particle System**
  - Interactive particle canvas with 80+ particles
  - Mouse interaction and particle repulsion
  - Dynamic particle connections based on proximity
  - Optimized 60fps performance with requestAnimationFrame

- **Animated Gradient Background**
  - Color morphing between primary, secondary, and accent colors
  - Smooth linear interpolation (lerp) for color transitions
  - Radial gradient layers for depth

- **3D Tilt Effects**
  - Real-time 3D perspective transforms on cards
  - Mouse position-based rotation on X and Y axes
  - Applied to project cards, achievement cards, and stat cards
  - Smooth CSS3 transitions with hardware acceleration

- **Cursor Trail Effect**
  - 20-dot custom cursor trail
  - Damped following animation
  - Opacity fade along trail
  - Desktop-only (disabled on mobile)

- **Advanced Hover Effects**
  - Multi-layered glow effects with box-shadow
  - Radial gradient overlays that expand on hover
  - Scale transforms for depth perception
  - Smooth border color transitions

- **Typography Animations**
  - Auto-typing effect with rotating phrases
  - Blinking cursor animation
  - Animated gradient on name text
  - Fade-in entrance animations

#### Scroll-Based Features
- **Intersection Observer**
  - Scroll-triggered animations
  - Fade-in-up effects for cards and sections
  - One-time animations for performance
  - Threshold control for precise triggering

- **Parallax Effects**
  - Multi-layer depth simulation
  - Customizable speed via data attributes
  - GPU-accelerated transforms

- **Counter Animations**
  - Odometer-style number counting
  - 60-step smooth easing over 2 seconds
  - Smart formatting with "+" preservation
  - Viewport-triggered activation

#### Navigation & UX
- Fixed header with scroll-based styling
- Glassmorphism blur background
- Active link highlighting with underline animation
- Hamburger mobile menu with smooth transitions
- Auto-close menu on link click
- Smooth scroll behavior for anchor links
- Scroll offset compensation for fixed header

#### Content Sections

##### Hero Section
- Dual-column grid layout
- Particle canvas background
- Animated gradient background
- Typing effect subtitle
- Social media links (LinkedIn, Email, Phone)
- Dual CTA buttons
- Scroll indicator animation

##### About Section
- Professional bio with 3 paragraphs
- Animated statistics cards:
  - 10+ Projects Completed
  - 8 Hackathon Awards
  - 3+ Years Coding
- 3D tilt effects on stat cards
- Counter animations on scroll

##### Experience Timeline
- Vertical timeline with gradient dots
- Two positions:
  - Web Designer at Sweeja Jewelry LLC (Aug 2022 - Present)
  - Intern at Accenture (Apr 2022 - Jul 2022)
- Hover animation (slide right)
- Bullet point achievements
- Color-coded date labels

##### Projects Showcase
- 8 Featured projects:
  1. **TheoHealth** - AI health diary (1st & 3rd place)
  2. **GothamAI** - Multi-modal AI assistant
  3. **BLACKOUT** - Power grid simulator (2nd place)
  4. **AutoPatt** - Semiconductor system (1st & 2nd place)
  5. **Dossier** - Research search engine
  6. **Wheelchair Modification** - Ratchet lever system
  7. **Palmer Penguins ML** - Species classifier
  8. **Battleship with AI** - MATLAB game
- Award badges (1st, 2nd, 3rd place)
- Technology stack tags
- Project highlights and metrics
- Glow effects on hover
- Radial gradient overlays

##### Skills Section
- 4 Skill categories:
  - Languages (8 languages)
  - Frameworks & Libraries (7 frameworks)
  - AI & Developer Tools (13 tools)
  - Expertise (8 areas)
- Interactive hover effects
- Color-coded tags
- Comprehensive technology list

##### Achievements Grid
- 6 Major awards:
  - 1st Place - Intel HackOHI/O 2024
  - 1st Place - GiveBackHack
  - 2nd Place - HackOHI/O 2025 AEP
  - 3rd Place - OSU Medicine Appathon
  - 2nd Place - OSU Tech Showcase 2025
  - 1st Place - Accenture Case Competition
- Expanding glow effect on hover
- Trophy/medal emojis
- Project connections

##### Contact Section
- 3 Contact methods:
  - Email: vegesinav@gmail.com
  - Phone: (614) 436-3462
  - LinkedIn: linkedin.com/in/vik-vegesina
- Large clickable cards
- Icon-based design
- Hover lift and glow effects
- Direct mailto:, tel:, and https:// links

#### Design System

##### Color Palette
- Primary: Electric Blue (#3b82f6)
- Primary Dark: #2563eb
- Primary Light: #60a5fa
- Secondary: Purple (#8b5cf6)
- Accent: Orange (#f59e0b)
- Success: Green (#10b981)
- Background Primary: #0f172a
- Background Secondary: #1e293b
- Background Tertiary: #334155
- Text Primary: #f8fafc
- Text Secondary: #cbd5e1
- Text Muted: #94a3b8

##### Typography
- Font Family: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800
- Optimized line height: 1.6
- Responsive font sizes

##### Spacing System
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 4rem
- XL: 6rem

##### Border Radius
- SM: 0.375rem
- MD: 0.5rem
- LG: 1rem
- XL: 1.5rem

##### Shadows
- SM: 0 1px 2px rgba(0, 0, 0, 0.05)
- MD: 0 4px 6px rgba(0, 0, 0, 0.1)
- LG: 0 10px 15px rgba(0, 0, 0, 0.2)
- XL: 0 20px 25px rgba(0, 0, 0, 0.3)

##### Transitions
- Fast: 150ms ease-in-out
- Normal: 300ms ease-in-out
- Slow: 500ms ease-in-out

#### Technical Implementation

##### JavaScript Classes
- `ParticleSystem` - Manages particle canvas
- `GradientAnimator` - Animates background gradients
- `CursorTrail` - Custom cursor trail effect
- `TiltEffect` - 3D tilt for cards
- `TypingEffect` - Auto-typing animation
- `CounterAnimation` - Number counting
- `ParallaxEffect` - Scroll-based parallax

##### Performance Features
- RequestAnimationFrame for smooth 60fps
- IntersectionObserver for scroll triggers
- GPU-accelerated CSS transforms
- Debounced scroll and resize events
- Lazy loading support
- Prefers-reduced-motion support

##### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

##### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- IE 11 (limited)

#### Documentation
- Comprehensive README.md with:
  - Feature descriptions
  - Setup instructions
  - Deployment guides
  - Customization options
  - Browser compatibility
  - Performance metrics
- CHANGELOG.md (this file)
- Inline code comments
- Semantic HTML structure

#### Assets
- Google Fonts: Inter family
- Inline SVG icons
- Resume PDF included
- GothamAI project documentation

### Code Quality
- Vanilla JavaScript (no frameworks)
- ES6+ syntax
- Class-based OOP architecture
- Semantic HTML5
- Modern CSS3
- Detailed comments
- Performance optimized

### Accessibility
- Semantic HTML elements
- ARIA labels on social links
- Keyboard navigation support
- Focus states for interactive elements
- Reduced motion support
- Mobile-friendly touch targets

### SEO
- Meta description
- Semantic heading hierarchy
- Descriptive page title
- Optimized for search engines

---

## Future Enhancements (Planned)

### [1.1.0] - Planned
- [ ] Dark/light mode toggle
- [ ] Blog section integration
- [ ] Project detail pages
- [ ] Testimonials section
- [ ] Contact form with backend
- [ ] Resume download button
- [ ] Print-friendly CSS

### [1.2.0] - Planned
- [ ] WebGL 3D background
- [ ] More interactive project demos
- [ ] Skills proficiency bars
- [ ] Timeline hover preview
- [ ] Photo gallery
- [ ] Video introductions
- [ ] Accessibility audit improvements

### [2.0.0] - Planned
- [ ] Full framework migration (React/Next.js)
- [ ] CMS integration
- [ ] Analytics dashboard
- [ ] A/B testing
- [ ] Internationalization (i18n)
- [ ] Progressive Web App (PWA)
- [ ] Advanced SEO optimization

---

## Bug Fixes

No bugs reported yet. This is the initial release.

---

## Breaking Changes

None. This is the initial release.

---

## Deprecations

None. This is the initial release.

---

## Notes

This portfolio website was built from scratch using vanilla HTML, CSS, and JavaScript to showcase modern web development techniques without relying on frameworks. The emphasis is on performance, visual appeal, and user experience.

All animations are GPU-accelerated and optimized for 60fps performance. The design follows modern web trends including glassmorphism, neumorphism, and 3D effects inspired by Three.js but implemented purely with CSS3 and Canvas API.

The website is fully responsive and works across all modern browsers and devices.

---

**Maintained by Vikranth Vegesina**
**Last Updated: December 2, 2025**
