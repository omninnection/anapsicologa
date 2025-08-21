# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start Vite development server (localhost:5173)
- `npm run build` - Build production bundle to `dist/` directory
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with TypeScript extensions

### Testing
This project currently has no test framework configured. If adding tests, follow patterns from similar React projects.

## Architecture

This is a **single-page React application** for a Brazilian psychology practice website, built as a static site with client-side navigation via smooth scrolling.

### Tech Stack
- **React 18** with TypeScript
- **Vite** for development and building
- **Tailwind CSS** with custom design system
- **Lucide React** for consistent iconography

### Application Structure
- **Single-page layout**: All sections rendered in `App.tsx` as a vertical stack
- **Component-based**: Each section is a separate React component
- **Smooth scrolling navigation**: Uses `scrollIntoView()` API, not React Router
- **Mobile-first responsive design** with Tailwind breakpoints

### Key Components
- `Navigation.tsx` - Fixed header with scroll-triggered background changes and mobile hamburger menu
- `Hero.tsx` - Landing section with call-to-action
- `About.tsx` - About section with psychologist information and credentials
- `Services.tsx` - Service cards with hover animations
- `EmotionalMap.tsx` - Interactive psychology activities hub with 5 Jungian-based activities
- `Contact.tsx` - Contact form and practice information
- `Footer.tsx` - Legal information and links

### Design System
- **Colors**: Custom sage green palette (`sage-600`, `sage-700`, etc.) with cream backgrounds (`cream-50`)
- **Typography**: Playfair Display serif for headings (`font-serif`), Inter for body text
- **Spacing**: Consistent padding and margins using Tailwind's 8px-based system
- **Components**: Rounded cards (`rounded-2xl`), full rounded buttons (`rounded-full`)

### Content & Localization
- **Language**: Portuguese (Brazil) with `pt-BR` locale
- **SEO**: Comprehensive meta tags, Open Graph, and JSON-LD structured data in `index.html`
- **Target audience**: Mental health patients in São Paulo, Brazil

### State Management
- **Local component state only**: Uses React `useState` and `useEffect`
- **No global state management**: No Redux, Zustand, or Context API usage
- **Navigation state**: Mobile menu toggle and scroll position tracking

### Styling Patterns
- **Utility-first**: Heavy use of Tailwind CSS utility classes
- **Hover effects**: Consistent `hover:` states on interactive elements
- **Responsive design**: `md:` and `lg:` breakpoints for tablet/desktop layouts
- **Accessibility**: Focus states (`focus:outline-none focus:ring-2`) and semantic HTML

### File Structure
```
src/
├── App.tsx              # Main app component with all sections
├── components/          # Section components
│   ├── Navigation.tsx   # Fixed navigation with scroll effects
│   ├── Hero.tsx         # Landing hero section
│   ├── About.tsx        # About section with psychologist info
│   ├── Services.tsx     # Service offerings grid
│   ├── EmotionalMap.tsx # Interactive Jungian activities hub
│   ├── Contact.tsx      # Contact form and info
│   └── Footer.tsx       # Footer with legal links
├── pages/               # Individual activity pages
│   ├── MandalaArquetipica.tsx     # Mandala creation activity
│   ├── JornadaHeroi.tsx           # Hero's journey questionnaire
│   ├── ExploradorArquetipos.tsx   # Archetype explorer quiz
│   ├── ConstelacaoComplexos.tsx   # Complex constellation mapping
│   └── DiarioSonhos.tsx           # Dream diary and interpretation
public/
├── favicon.svg          # Custom SVG favicon
├── robots.txt           # SEO directives
└── sitemap.xml          # Site structure for search engines
```

## Development Patterns

### Component Structure
- Functional components with TypeScript
- Props interfaces defined inline (not exported)
- Consistent export pattern: `export default ComponentName`

### Icon Usage
- Lucide React icons imported individually
- Consistent sizing: `w-8 h-8` for main icons, `w-4 h-4` for small icons
- Semantic color classes: `text-sage-600` for primary actions

### Responsive Patterns
- Mobile-first approach: base styles for mobile, `md:` for tablet+
- Common breakpoints: `md:grid-cols-2`, `lg:grid-cols-3`
- Navigation: Desktop horizontal menu, mobile hamburger overlay

### Animation Patterns
- Smooth transitions: `transition-all duration-300`
- Hover scale effects: `group-hover:scale-110 transition-transform`
- Scroll-based effects: Background changes based on scroll position

## Content Management

### Customization Areas
- **Contact information**: Update in `Contact.tsx` and `index.html` structured data
- **Service offerings**: Modify services array in `Services.tsx`
- **Activity content**: Update activities data in `EmotionalMap.tsx` and individual page components
- **SEO metadata**: Edit meta tags and structured data in `index.html`

### Brand Elements
- **Logo**: Heart icon from Lucide React (`<Heart />`)
- **Color scheme**: Sage green (`#5a8a5a`) with cream backgrounds
- **Practice name**: "Dra. Maria Silva" - update across components for rebranding

### Interactive Features

#### Emotional Map Activity (`EmotionalMap.tsx`)
- **Drag-and-drop interface**: Users can drag emotion cards into positive/negative/neutral categories
- **Real-time feedback**: Personalized psychological insights based on user's emotional categorization
- **Visual analytics**: Animated progress bars and emotional distribution visualization
- **Responsive design**: Touch-friendly on mobile devices with proper drag handlers
- **Accessibility**: Keyboard navigation support and proper ARIA labels for screen readers
- **State management**: Uses local React state to track emotions, categories, and results
- **Animations**: Custom CSS animations for smooth interactions and visual feedback

#### UX/UI Intelligence Features
- **Smart feedback system**: Different responses based on emotional balance (positive > 60%, negative > 50%, mixed)
- **Color psychology**: Emotion cards use psychologically appropriate colors (green for positive, red for challenging, etc.)
- **Progressive disclosure**: Results and insights only appear after meaningful interaction (5+ emotions categorized)
- **Call-to-action integration**: Results section includes direct links to schedule consultation
- **Reset functionality**: Users can restart the activity to explore different emotional states

### Accessibility Requirements
- Maintain ARIA labels on interactive elements
- Preserve focus management and keyboard navigation
- Keep color contrast ratios WCAG AA compliant
- Respect `prefers-reduced-motion` for animations
- Drag-and-drop alternatives for keyboard-only users