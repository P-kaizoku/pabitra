# Pabitra Mondal - Portfolio Website

A modern, minimalist portfolio website built with Next.js 15, TypeScript, and Tailwind CSS featuring Swiss Minimalist design principles.

## 🚀 Features

### Design & UX

- **Swiss Minimalist Design** - Clean, typography-focused layout with blue accent color (#3B82F6)
- **Dark Mode** - Functional theme toggle with persistent preferences
- **Smooth Animations** - Framer Motion fade-in animations as sections enter viewport
- **Active Navigation** - Highlights current section while scrolling
- **Show/Hide Navigation** - Navbar hides on scroll down, appears on scroll up
- **Mobile Responsive** - Fully responsive across all device sizes

### Sections

#### Hero Section

- Asymmetric 60-40 split layout
- Professional photo placeholder (1:1 ratio with rounded corners)
- Vertical social links (GitHub, LinkedIn, Email)
- Availability status indicator
- CTA button with smooth scroll

#### About Section

- Two-column layout with bio and current activities
- Stats display (GPA, Projects, Years Coding, Awards)
- "What I'm Working On" list
- Education timeline

#### Skills Section

- 4-column grid (responsive: 2 on tablet, 1 on mobile)
- Categories: Frontend, Backend, ML & Data Science, Tools
- Hover lift effects on skill cards

#### Projects Section

- Large alternating card layout (140px spacing)
- Image placeholders with 16:9 aspect ratio
- Hover effects (image zoom + shadow)
- Tech stack tags with pill design
- Feature lists with checkmarks
- Action buttons (View Code, Demo)

**Featured Projects:**

1. M-Classifier - Deep Learning Malware Classification (🏆 1st Place Winner)
2. WatchThis - AI-Powered Movie Recommendations
3. Full-Stack Blog Platform - CMS with Authentication

#### Experience Section

- Vertical timeline with circular nodes
- Card-based entries with hover expansion
- Contribution tags for each role

**Experience:**

1. Technical Team Member - Bvest Technical Festival
2. Technical Member - EduMinerva
3. Deep Learning Research Intern (🏆 1st Position)

#### Contact Section

- "Let's Connect" heading
- Large clickable contact methods (40px icons)
- Click-to-copy functionality for email and phone
- Direct links to LinkedIn and GitHub
- Hover states and animations

#### Footer

- 70px fixed height
- Copyright information
- "Back to top" button with smooth scroll
- Designer credit

### Technical Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Inter Font** for typography
- **SEO Optimized** with proper meta tags
- **No Console Errors** - Clean production build

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Project Structure

```
portfolio2/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page with all sections
├── components/
│   ├── AnimatedSection.tsx   # Framer Motion wrapper
│   ├── Contact.tsx           # Contact methods component
│   ├── CTA.tsx               # Call-to-action button
│   ├── Footer.tsx            # Footer component
│   └── Navigation.tsx        # Fixed navigation bar
├── public/
│   └── resume.pdf            # Downloadable resume
└── package.json
```

## 🎨 Color Palette

- **Accent**: Blue (#3B82F6)
- **Accent Hover**: Darker Blue (#2563EB)
- **Background (Light)**: White (#FFFFFF)
- **Background (Dark)**: Near Black (#0A0A0A)
- **Foreground (Light)**: Dark Gray (#171717)
- **Foreground (Dark)**: Off White (#EDEDED)
- **Border (Light)**: Light Gray (#E5E7EB)
- **Border (Dark)**: Dark Gray (#262626)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Fast page loads with Turbopack
- Optimized images (placeholders ready for actual images)
- Minimal JavaScript bundle
- Smooth 60fps animations
- Lazy loading for sections

## 🔧 Customization

### Update Personal Information

1. **Hero Section** - Edit in `app/page.tsx` (lines ~10-130)
2. **About Bio** - Edit in `app/page.tsx` (lines ~135-240)
3. **Projects** - Edit in `app/page.tsx` (lines ~315-560)
4. **Experience** - Edit in `app/page.tsx` (lines ~565-715)
5. **Contact Info** - Edit in `components/Contact.tsx`

### Add Your Resume

Replace `public/resume.pdf` with your actual resume PDF file.

### Add Professional Photo

Replace the placeholder in the Hero section with your professional photo (recommended: square aspect ratio, high resolution).

### Update Links

- GitHub: Update in `components/Navigation.tsx` and `components/Contact.tsx`
- LinkedIn: Update in both navigation and contact sections
- Email: Update in `components/Contact.tsx`
- Phone: Update in `components/Contact.tsx`

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Pabitra Mondal**

- GitHub: [@P-kaizoku](https://github.com/P-kaizoku)
- LinkedIn: [0xp4v1](https://linkedin.com/in/0xp4v1)
- Email: pabitram322@gmail.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
