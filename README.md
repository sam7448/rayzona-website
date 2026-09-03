# Rayzona Energy Website

A modern, responsive website for Rayzona Energy - a renewable energy solutions company specializing in solar power, wind energy, and sustainable energy storage.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Component-Based Architecture** - Clean, modular React components
- **Separate CSS Files** - Each component has its own CSS file (no global styles)
- **BEM Naming Convention** - Consistent classnames using component names
- **Optimized Assets** - Images organized in proper folders
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Friendly** - Semantic HTML structure

## 📁 Project Structure

```
rayzona/
├── src/
│   ├── assets/
│   │   ├── images/        # Hero images and backgrounds
│   │   └── logo/          # Company logo files
│   ├── components/
│   │   ├── Header/        # Navigation header
│   │   ├── Hero/          # Hero section with features
│   │   ├── Solutions/     # Services/Solutions section
│   │   ├── About/         # About us section
│   │   ├── Stats/         # Statistics counter
│   │   ├── Projects/      # Projects showcase
│   │   ├── CTA/           # Call-to-action section
│   │   └── Footer/        # Footer with contact info
│   ├── App.jsx            # Main app component
│   ├── App.css            # App-level styles
│   ├── index.css          # Global CSS variables and reset
│   └── main.jsx           # Entry point
└── package.json
```

## 🎨 Component Overview

### Header
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Logo and navigation links
- CTA button

### Hero
- Eye-catching hero section with title and description
- Call-to-action buttons
- Feature cards showcasing key benefits
- Background image integration

### Solutions
- Grid layout of service offerings
- Animated cards with hover effects
- Icons and descriptions for each service

### About
- Company information
- Feature list with checkmarks
- Video/image placeholder
- Experience badge

### Stats
- Animated counter statistics
- Projects completed, clients served, etc.
- Gradient background with patterns

### Projects
- Project showcase cards
- Category badges
- Location information
- "View All Projects" CTA

### CTA (Call-to-Action)
- Prominent conversion section
- Contact button
- Gradient background

### Footer
- Company information
- Quick links
- Services menu
- Contact details
- Social media links

## 🛠️ Technologies Used

- **React 19.2.8** - UI library
- **Vite 8.2.0** - Build tool and dev server
- **CSS3** - Styling with modern features
- **Inter Font** - Typography from Google Fonts

## 📦 Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

5. **Lint Code**
   ```bash
   npm run lint
   ```

## 🎯 Naming Conventions

All components follow **BEM (Block Element Modifier)** naming:
- `.hero` - Block
- `.hero__title` - Element
- `.hero__button--primary` - Modifier

Example:
```css
.header { }
.header__logo { }
.header__nav { }
.header__nav-link { }
.header__nav-link--active { }
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Color Palette

- **Primary Green**: `#7cb342`
- **Dark Green**: `#558b2f`
- **Light Green**: `#c5e1a5`
- **Text Dark**: `#1a1a1a`
- **Text Medium**: `#555`
- **Text Light**: `#666`
- **Background**: `#ffffff`
- **Background Alt**: `#f8f9fa`

## 🌟 Key Features

### Animations
- Fade in animations on page load
- Hover effects on buttons and cards
- Counter animations for statistics
- Smooth scroll behavior

### Accessibility
- Semantic HTML elements
- ARIA labels for icons
- Keyboard navigation support
- High contrast ratios

### Performance
- Optimized images
- CSS-only animations (no heavy libraries)
- Minimal JavaScript
- Fast loading times

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #7cb342;
  --primary-dark: #558b2f;
  /* Add more variables */
}
```

### Adding New Sections
1. Create a new folder in `src/components/`
2. Add `ComponentName.jsx` and `ComponentName.css`
3. Import and add to `App.jsx`

### Modifying Content
- Edit component files directly
- Update text, images, and links
- Customize styling in respective CSS files

## 📞 Contact Information

- **Email**: info@rayzonaindia.com
- **Phone**: +91 98765 43210
- **Location**: Satara, Maharashtra

## 📄 License

© 2024 Rayzona Energy. All rights reserved.

## 🚀 Deployment

Build the project and deploy the `dist` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

---

Built with ❤️ for a sustainable future
