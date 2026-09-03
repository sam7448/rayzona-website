# Component Guide

## Quick Reference for Rayzona Website Components

### 📋 Component List

| Component | File Location | Purpose | Responsive |
|-----------|--------------|---------|-----------|
| Header | `src/components/Header/` | Navigation & Logo | ✅ Yes |
| Hero | `src/components/Hero/` | Main banner section | ✅ Yes |
| Solutions | `src/components/Solutions/` | Services grid | ✅ Yes |
| About | `src/components/About/` | Company info | ✅ Yes |
| Stats | `src/components/Stats/` | Animated statistics | ✅ Yes |
| Projects | `src/components/Projects/` | Project showcase | ✅ Yes |
| CTA | `src/components/CTA/` | Call to action | ✅ Yes |
| Footer | `src/components/Footer/` | Footer links & info | ✅ Yes |

---

## 🎨 Styling Guidelines

### BEM Naming Pattern
Each component uses its name as the base class:

```
ComponentName/
  ├── ComponentName.jsx
  └── ComponentName.css
```

**CSS Classes:**
- Block: `.componentname`
- Element: `.componentname__element`
- Modifier: `.componentname__element--modifier`

### Example: Header Component
```css
.header                    /* Block */
.header__container         /* Element */
.header__logo              /* Element */
.header__nav               /* Element */
.header__nav-link          /* Element */
.header__nav-link--active  /* Modifier */
```

---

## 📱 Responsive Design

### Breakpoints Used
```css
/* Desktop First Approach */

@media (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 768px) {
  /* Mobile landscape */
}

@media (max-width: 480px) {
  /* Mobile portrait */
}
```

---

## 🎯 Component Features

### Header
- **Desktop**: Horizontal menu with all links visible
- **Mobile**: Hamburger menu with slide-down navigation
- **Sticky**: Remains at top when scrolling

### Hero
- **Layout**: Two-column (content + image)
- **Features**: 4 feature cards below main content
- **Buttons**: Primary and secondary CTA buttons
- **Animations**: Fade in from left/right

### Solutions
- **Grid**: 4 columns on desktop, responsive grid
- **Cards**: Hover effects with elevation
- **Icons**: SVG icons in gradient backgrounds

### About
- **Layout**: Two-column (content + video)
- **Features**: Checkmark list of benefits
- **Badge**: Years of experience overlay
- **Video**: Placeholder with play button

### Stats
- **Counter**: Animated numbers on scroll
- **Background**: Green gradient with pattern
- **Layout**: 4 columns of statistics

### Projects
- **Grid**: 3 project cards
- **Categories**: Color-coded by project type
- **CTA**: "View All Projects" button

### CTA
- **Full-width**: Spanning section
- **Background**: Gradient with decorative circles
- **Button**: High-contrast white button

### Footer
- **Grid**: 4 columns (Company, Links, Services, Contact)
- **Social**: Icon links
- **Bottom**: Copyright and legal links

---

## 🛠️ Customization Quick Tips

### Change Primary Color
```css
/* src/index.css */
:root {
  --primary-color: #7cb342;  /* Change this */
}
```

### Update Content
1. Open component `.jsx` file
2. Edit text within the JSX
3. Save and view changes

### Add New Link
```jsx
/* Header.jsx */
<li><a href="#new-page" className="header__nav-link">New Page</a></li>
```

### Modify Layout
- Edit CSS grid columns in component's `.css` file
- Adjust `grid-template-columns` for different layouts

---

## 🚀 Common Tasks

### Add New Component
```bash
# 1. Create folder
mkdir src/components/NewComponent

# 2. Create files
touch src/components/NewComponent/NewComponent.jsx
touch src/components/NewComponent/NewComponent.css

# 3. Import in App.jsx
import NewComponent from './components/NewComponent/NewComponent';
```

### Change Image
1. Place new image in `src/assets/images/`
2. Update import in component:
```jsx
import heroImage from '../../assets/images/new-image.png';
```

### Adjust Spacing
```css
/* Use consistent spacing variables */
padding: var(--spacing-lg);  /* 2rem */
margin: var(--spacing-md);   /* 1.5rem */
gap: var(--spacing-sm);      /* 1rem */
```

---

## ⚡ Performance Tips

1. **Images**: Compress before adding to assets
2. **CSS**: Keep component styles isolated
3. **Icons**: Use inline SVGs for better performance
4. **Animations**: Use CSS transforms instead of position changes

---

## 🐛 Troubleshooting

### Image Not Showing
- Check file path is correct
- Ensure image exists in assets folder
- Verify import statement

### CSS Not Applying
- Verify CSS file is imported in component
- Check class name matches exactly (case-sensitive)
- Use browser DevTools to inspect element

### Component Not Displaying
- Check it's imported in App.jsx
- Verify component is added to JSX
- Look for console errors

---

## 📚 Resources

- [React Docs](https://react.dev/)
- [BEM Methodology](http://getbem.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)

---

**Last Updated**: August 2026
