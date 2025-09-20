# Echooh Advertising Website

A modern, responsive website for Echooh Advertising - specializing in outdoor advertising solutions including billboards, transit media, and digital out-of-home advertising.

## 🌐 Live Website
**https://11ketanhere.github.io/echooh_advertising**

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Components](#components)
- [Troubleshooting](#troubleshooting)
- [Future Updates](#future-updates)

## 🎯 Project Overview

This project was transformed from a personal portfolio into a professional company website for Echooh Advertising. The website showcases outdoor advertising services with a modern, dynamic design featuring:

- Dynamic header with scroll-based transparency
- Professional hero section with inspirational background
- Service showcase with outdoor advertising solutions
- Project/campaign portfolio
- Work showcase section
- Team member profiles
- Contact information and social links

## ✨ Features

### 🎨 Design Features
- **Dynamic Header**: Transparent on homepage, solid when scrolled
- **Responsive Design**: Mobile-first approach with breakpoints
- **Professional Typography**: Montserrat, Inter, and Raleway fonts
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Particle Effects**: Animated background particles
- **Glass Morphism**: Modern UI effects with backdrop blur
- **Professional Color Scheme**: Charcoal black, pure white, golden yellow

### 📱 Responsive Features
- Mobile-optimized navigation with hamburger menu
- Responsive typography scaling
- Touch-friendly interactions
- Optimized images and assets

### 🚀 Performance Features
- Optimized build process
- Compressed assets
- Fast loading times
- SEO-friendly structure

## 🛠 Tech Stack

### Frontend
- **React 18.3.1** - UI framework
- **Styled Components 6.1.13** - CSS-in-JS styling
- **AOS 2.3.4** - Scroll animations
- **React Icons 5.3.0** - Icon library
- **@tsparticles/react 3.0.0** - Particle animations

### Development Tools
- **Create React App 5.0.1** - Build tooling
- **ESLint** - Code linting
- **gh-pages 6.3.0** - GitHub Pages deployment

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/11ketanhere/echooh_advertising.git
cd echooh_advertising
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```
The application will open at `http://localhost:3000`

## 💻 Development

### Available Scripts
```bash
npm start          # Start development server
npm run build      # Build for production
npm run test       # Run tests
npm run eject      # Eject from Create React App
```

### Development Workflow
1. Make changes to components in `src/components/`
2. Test changes in development server
3. Commit changes to git
4. Deploy to GitHub Pages (see deployment section)

## 🚀 Deployment

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

#### Initial Setup (Already Completed)
1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Configure package.json**
   ```json
   {
     "homepage": "https://11ketanhere.github.io/echooh_advertising",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Personal Access Token Setup**
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `repo` scope
   - Use token as password when deploying

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)

#### Deploy Commands
```bash
# Deploy to GitHub Pages
npm run deploy

# This automatically:
# 1. Runs npm run build
# 2. Pushes to gh-pages branch
# 3. Updates live website
```

#### Future Updates
```bash
# Make changes, commit, then deploy
git add .
git commit -m "Update website"
git push origin main
npm run deploy
```

## 📁 Project Structure

```
echooh_advertising/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── echooh_inspiration.png
│   └── echooh-logo.png
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── Assets/
│   │   │   └── Images/
│   │   │       ├── echooh-inspiration.png
│   │   │       └── echooh-logo.png
│   │   ├── Contact/
│   │   │   └── index.js
│   │   ├── Header/
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── Home/
│   │   │   └── index.js
│   │   ├── Logo/
│   │   │   └── index.js
│   │   ├── partcles.js
│   │   ├── Project/
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── Service/
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── Team/
│   │   │   └── index.js
│   │   └── WorkShowcase/
│   │       └── index.js
│   ├── utils/
│   │   └── constant.js
│   ├── App.css
│   ├── App.js
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Charcoal Black `#0D0D0D`
- **Secondary**: Pure White `#FFFFFF`
- **Accent**: Golden Yellow `#FFB800`
- **Background**: Light Gray `#F5F5F7`
- **Gradient**: Golden Tint `#FFF8E1`

### Typography
- **Headings**: Montserrat (Bold, Impactful)
- **Body Text**: Inter (Readable, Clean)
- **Accents**: Raleway (Stylish, Distinct)

### Font Sizes
- **Main Heading**: 6rem (Desktop), 3rem (Mobile)
- **Subtitle**: 2rem (Desktop), 1.5rem (Mobile)
- **Body Text**: 1.4rem (Desktop), 1.2rem (Mobile)
- **Navigation**: 1rem

## 🧩 Components

### Header Component
- **Dynamic transparency**: Transparent on homepage, solid when scrolled
- **Responsive navigation**: Desktop menu + mobile hamburger
- **Logo integration**: Company logo with proper sizing
- **Smooth transitions**: 0.3s ease-in-out animations

### Home Component
- **Hero section**: "WE MAKE BRANDS UNMISSABLE"
- **Background image**: Echooh inspiration image
- **Particle effects**: Animated background particles
- **Responsive text**: Scales properly on all devices

### Service Component
- **Outdoor advertising services**: Billboard, transit media, digital OOH
- **Professional styling**: Glass morphism effects
- **Responsive cards**: Mobile-optimized layout

### Project Component
- **Campaign showcase**: Successful advertising campaigns
- **Tabbed interface**: Different categories (Campaigns, Branding, Digital)
- **Interactive elements**: Hover effects and animations

### WorkShowcase Component
- **Portfolio display**: Company work examples
- **Animated cards**: AOS scroll animations
- **Category tags**: Service type indicators

### Team Component
- **Team profiles**: Founder and co-founder information
- **Social links**: LinkedIn, contact information
- **Professional styling**: Consistent with brand theme

### Contact Component
- **Contact information**: Email, phone, social media
- **Professional layout**: Clean and accessible
- **Brand consistency**: Golden accents and typography

## 🔧 Key Features Implemented

### 1. Dynamic Header System
```javascript
// Scroll detection for header transparency
useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const homePageHeight = window.innerHeight;
    
    if (scrollPosition > homePageHeight / 2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 2. Professional Styling
- **Glass morphism effects** with backdrop blur
- **Gradient backgrounds** with brand colors
- **Smooth animations** with AOS library
- **Responsive design** with mobile-first approach

### 3. Image Integration
- **Background images** properly imported and optimized
- **Logo integration** with responsive sizing
- **Asset management** in dedicated folders

### 4. Performance Optimization
- **Build optimization** with Create React App
- **Asset compression** for faster loading
- **Responsive images** for different screen sizes

## 🐛 Troubleshooting

### Common Issues

#### 1. Build Warnings
```bash
# Warning about unused imports
# Fix by removing unused imports or adding eslint-disable comments
```

#### 2. Deployment Issues
```bash
# If deployment fails, check:
# 1. Personal access token is correct
# 2. Repository permissions are set correctly
# 3. GitHub Pages is enabled in repository settings
```

#### 3. Image Loading Issues
```bash
# Ensure images are in public/ folder or properly imported
# Check file paths and extensions
```

#### 4. Styling Issues
```bash
# Clear browser cache
# Check for CSS conflicts
# Verify styled-components syntax
```

## 🔄 Future Updates

### Adding New Sections
1. Create new component in `src/components/`
2. Add to `App.js` imports and render
3. Update navigation in `Header/index.js`
4. Deploy with `npm run deploy`

### Updating Content
1. Edit component files directly
2. Update constants in `utils/constant.js`
3. Test changes locally
4. Deploy updates

### Styling Changes
1. Modify styled-components in component files
2. Update color variables for consistency
3. Test responsive behavior
4. Deploy changes

### Adding Animations
1. Import AOS animations
2. Add data-aos attributes to elements
3. Configure animation options
4. Test scroll behavior

## 📞 Support

For technical support or questions about this project:
- **Repository**: https://github.com/11ketanhere/echooh_advertising
- **Live Website**: https://11ketanhere.github.io/echooh_advertising

## 📝 License

This project is private and proprietary to Echooh Advertising.

---

**Last Updated**: January 2025
**Version**: 1.0.0
**Status**: Production Ready ✅
