# Dra. Maria Silva - Psychology Practice Website

A modern, accessible, and performance-optimized website for a Brazilian psychology practice, built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Design & UX
- **Distinctive Visual Identity**: Custom sage green color palette avoiding generic therapy website aesthetics
- **Responsive Design**: Mobile-first approach with perfect scaling across all devices
- **Accessibility**: WCAG AA compliant with proper ARIA labels, keyboard navigation, and focus management
- **Typography**: Elegant Playfair Display serif for headings, clean Inter sans-serif for body text
- **Micro-interactions**: Subtle hover states, scroll-based animations (respects reduced motion preferences)

### Performance
- **Optimized Loading**: Font preloading, lazy animations, minimal JavaScript bundle
- **SEO Ready**: Comprehensive meta tags, structured data, sitemap, and robots.txt
- **Lighthouse Score**: Designed to achieve ≥90 performance score

### Content & Localization
- **Portuguese (Brazil)**: Full pt-BR locale support for dates and formatting
- **Professional Content**: Carefully crafted copy focusing on trust and expertise
- **Interactive Activities**: 5 Jungian psychology activities for self-exploration

### Technical Stack
- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with custom design system
- **Lucide React** for consistent iconography
- **CSS Grid & Flexbox** for modern layouts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd psychology-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # Main website sections
│   ├── About.tsx       # About section with bio and credentials
│   ├── Contact.tsx     # Contact form and information
│   ├── EmotionalMap.tsx # Interactive activities hub
│   ├── Footer.tsx      # Site footer with legal info
│   ├── Hero.tsx        # Landing hero section
│   ├── Navigation.tsx  # Main navigation with smooth scrolling
│   └── Services.tsx    # Services grid layout
├── pages/              # Individual activity pages
│   ├── MandalaArquetipica.tsx     # Mandala creation activity
│   ├── JornadaHeroi.tsx           # Hero's journey questionnaire
│   ├── ExploradorArquetipos.tsx   # Archetype explorer quiz
│   ├── ConstelacaoComplexos.tsx   # Complex constellation mapping
│   └── DiarioSonhos.tsx           # Dream diary and interpretation
├── index.css           # Global styles and Tailwind imports
└── App.tsx             # Main application component

public/
├── favicon.svg         # Custom favicon
├── robots.txt          # Search engine directives
└── sitemap.xml         # Site structure for SEO
```

## 🎨 Design System

### Colors
- **Primary**: Sage Green (#5a8a5a) - Professional, calming
- **Background**: Cream (#fefcf8) - Warm, inviting
- **Text**: Sage variations for hierarchy and readability

### Typography
- **Headings**: Playfair Display (serif) - Elegant, trustworthy
- **Body**: Inter (sans-serif) - Clean, highly readable
- **Spacing**: 8px base system for consistent rhythm

### Components
- **Cards**: Rounded corners (16px), subtle shadows, hover effects
- **Buttons**: Rounded-full primary actions, outline secondary
- **Forms**: Consistent padding, focus states, validation styling

## ♿ Accessibility Features

- **Keyboard Navigation**: Full tab order and focus management
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant ratios throughout
- **Motion**: Respects `prefers-reduced-motion` user preference
- **Focus Indicators**: Clear visual focus states for all interactive elements

## 🔍 SEO Optimization

- **Meta Tags**: Comprehensive title, description, and Open Graph tags
- **Structured Data**: JSON-LD schema for professional services
- **Sitemap**: XML sitemap for search engine indexing
- **Performance**: Optimized images, fonts, and bundle size
- **Semantic HTML**: Proper heading hierarchy and landmark elements

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (stacked layouts, large touch targets)
- **Tablet**: 768px - 1024px (2-column grids, adjusted spacing)
- **Desktop**: > 1024px (full grid layouts, optimal typography)

## 🛠 Customization

### Content Updates
1. **Personal Information**: Update contact details in `Contact.tsx`
2. **Bio & Credentials**: Modify content in `About.tsx`
3. **Services**: Edit service offerings in `Services.tsx`
4. **Activities**: Update interactive activities in `EmotionalMap.tsx` and individual page files

### Styling Changes
1. **Colors**: Modify the color palette in `tailwind.config.js`
2. **Typography**: Update font selections in `index.css`
3. **Spacing**: Adjust the spacing scale in Tailwind config

### SEO Updates
1. **Meta Tags**: Update titles and descriptions in `index.html`
2. **Structured Data**: Modify the JSON-LD schema for your practice
3. **Sitemap**: Update URLs in `public/sitemap.xml`

## 🚀 Deployment

This site is optimized for static hosting platforms:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use the built files from `dist`

### Environment Variables
No environment variables required for basic functionality.

## 📊 Performance Checklist

- ✅ Optimized images with proper alt text
- ✅ Font preloading for critical typography
- ✅ Minimal JavaScript bundle size
- ✅ CSS purging for unused styles
- ✅ Proper caching headers (configure on hosting platform)
- ✅ Compressed assets (gzip/brotli on server)

## 🔒 Privacy & Security

- **Contact Form**: Client-side validation (integrate with secure backend)
- **Analytics**: No tracking scripts included (add privacy-compliant analytics as needed)
- **GDPR**: Privacy policy template included in footer

## 📞 Support

For technical support or customization requests, please refer to the documentation or create an issue in the repository.

## 📄 License

This project is created for professional use. Please ensure compliance with local regulations for healthcare websites and patient privacy requirements.

---

**Built with care for mental health professionals** 💚