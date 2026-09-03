# Rayzona Website - Project Structure

## 📂 Complete File Structure

```
rayzona/
│
├── public/                          # Public static assets
│   ├── favicon.svg                  # Website favicon
│   └── icons.svg                    # SVG sprite icons
│
├── src/                             # Source files
│   │
│   ├── assets/                      # Media assets
│   │   ├── images/                  # Images folder
│   │   │   └── herobg.png          # Hero background image
│   │   └── logo/                    # Logo folder
│   │       └── rayzonaLogo.png     # Company logo
│   │
│   ├── components/                  # React components
│   │   │
│   │   ├── Header/                  # Header component
│   │   │   ├── Header.jsx          # Header component logic
│   │   │   └── Header.css          # Header styles
│   │   │
│   │   ├── Hero/                    # Hero section
│   │   │   ├── Hero.jsx            # Hero component logic
│   │   │   └── Hero.css            # Hero styles
│   │   │
│   │   ├── Solutions/               # Solutions/Services section
│   │   │   ├── Solutions.jsx       # Solutions component logic
│   │   │   └── Solutions.css       # Solutions styles
│   │   │
│   │   ├── About/                   # About Us section
│   │   │   ├── About.jsx           # About component logic
│   │   │   └── About.css           # About styles
│   │   │
│   │   ├── Stats/                   # Statistics section
│   │   │   ├── Stats.jsx           # Stats component with counter
│   │   │   └── Stats.css           # Stats styles
│   │   │
│   │   ├── Projects/                # Projects showcase
│   │   │   ├── Projects.jsx        # Projects component logic
│   │   │   └── Projects.css        # Projects styles
│   │   │
│   │   ├── CTA/                     # Call-to-Action section
│   │   │   ├── CTA.jsx             # CTA component logic
│   │   │   └── CTA.css             # CTA styles
│   │   │
│   │   └── Footer/                  # Footer section
│   │       ├── Footer.jsx          # Footer component logic
│   │       └── Footer.css          # Footer styles
│   │
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # App-level styles
│   ├── index.css                    # Global styles & CSS variables
│   └── main.jsx                     # Application entry point
│
├── .gitignore                       # Git ignore file
├── .oxlintrc.json                   # Linter configuration
├── index.html                       # HTML entry point
├── package.json                     # Dependencies & scripts
├── package-lock.json                # Locked dependency versions
├── vite.config.js                   # Vite configuration
├── README.md                        # Project documentation
├── COMPONENT_GUIDE.md               # Component usage guide
└── PROJECT_STRUCTURE.md             # This file
```

## 🎯 Key Features

### ✅ Organized Structure
- **Component-based**: Each section is a separate component
- **Isolated CSS**: No global CSS conflicts, each component has its own styles
- **BEM Naming**: Consistent naming convention using component names
- **Asset Organization**: Images and logos in separate folders

### ✅ Responsive Design
- **Mobile-first approach**: Works on all screen sizes
- **Breakpoints**: 480px, 768px, 1024px
- **Flexible layouts**: CSS Grid and Flexbox
- **Touch-friendly**: Mobile navigation with hamburger menu

### ✅ Modern Tech Stack
- **React 19.2.8**: Latest React features
- **Vite 8.2.0**: Fast build tool and dev server
- **CSS3**: Modern styling with variables and animations
- **Google Fonts**: Inter font family

## 📋 Component Breakdown

### 1. Header (`Header/`)
**Purpose**: Top navigation bar
**Features**:
- Sticky positioning
- Mobile hamburger menu
- Logo integration
- Navigation links
- CTA button

**Classnames**:
- `.header`
- `.header__container`
- `.header__logo`
- `.header__nav`
- `.header__nav-link`
- `.header__cta-button`

---

### 2. Hero (`Hero/`)
**Purpose**: Main landing section
**Features**:
- Two-column layout (content + image)
- Primary and secondary CTAs
- 4 feature cards
- Background integration
- Fade-in animations

**Classnames**:
- `.hero`
- `.hero__container`
- `.hero__content`
- `.hero__title`
- `.hero__features`
- `.hero__feature-icon`

---

### 3. Solutions (`Solutions/`)
**Purpose**: Services showcase
**Features**:
- Grid layout (4 columns)
- Service cards with icons
- Hover animations
- SVG icons

**Classnames**:
- `.solutions`
- `.solutions__container`
- `.solutions__grid`
- `.solutions__card`
- `.solutions__card-icon`

---

### 4. About (`About/`)
**Purpose**: Company information
**Features**:
- Two-column layout
- Feature checklist
- Video/image placeholder
- Experience badge

**Classnames**:
- `.about`
- `.about__container`
- `.about__content`
- `.about__features`
- `.about__video`

---

### 5. Stats (`Stats/`)
**Purpose**: Show achievements
**Features**:
- Animated counters
- Gradient background
- Pattern overlay
- 4 statistics

**Classnames**:
- `.stats`
- `.stats__container`
- `.stats__item`
- `.stats__number`
- `.stats__label`

---

### 6. Projects (`Projects/`)
**Purpose**: Project showcase
**Features**:
- 3-column grid
- Category badges
- Location info
- View all button

**Classnames**:
- `.projects`
- `.projects__container`
- `.projects__grid`
- `.projects__card`
- `.projects__card-image`

---

### 7. CTA (`CTA/`)
**Purpose**: Drive conversions
**Features**:
- Full-width section
- Gradient background
- Decorative elements
- CTA button

**Classnames**:
- `.cta`
- `.cta__container`
- `.cta__content`
- `.cta__button`

---

### 8. Footer (`Footer/`)
**Purpose**: Site footer
**Features**:
- 4-column grid
- Quick links
- Contact info
- Social media icons
- Legal links

**Classnames**:
- `.footer`
- `.footer__container`
- `.footer__grid`
- `.footer__links`
- `.footer__social`

---

## 🎨 CSS Architecture

### Global Styles (`index.css`)
- CSS variables for colors, spacing, fonts
- Reset styles
- Typography base
- Scrollbar styling

### App Styles (`App.css`)
- App wrapper styles
- Smooth scrolling
- Selection color

### Component Styles
Each component has its own CSS file with:
- Component-specific styles only
- BEM naming convention
- Responsive breakpoints
- Hover/animation effects

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📝 Notes

1. **No global CSS conflicts**: Each component is self-contained
2. **Reusable components**: Easy to add/remove sections
3. **Consistent naming**: All components follow BEM methodology
4. **Responsive by default**: All breakpoints are handled
5. **Optimized assets**: Images organized in proper folders
6. **Clean code**: Well-commented and structured

---

## 🔧 Configuration Files

- **vite.config.js**: Vite bundler configuration
- **.oxlintrc.json**: Code linting rules
- **package.json**: Project dependencies and scripts
- **.gitignore**: Files to exclude from version control

---

## 📞 Support

For questions or issues:
- Check README.md for general documentation
- Check COMPONENT_GUIDE.md for component usage
- Review this file for structure reference

---

**Created**: August 2026  
**Version**: 1.0.0  
**Framework**: React + Vite
