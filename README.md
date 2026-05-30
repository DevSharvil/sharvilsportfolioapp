# Sharvil Bidkar — Portfolio

A modern, premium React portfolio website built with the **Obsidian Craft** aesthetic.

## Tech Stack
- **React 18** + Vite
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** (scroll animations, micro-interactions)
- **React Router v6**
- **EmailJS** (contact form)
- **YARL** (yet-another-react-lightbox — photography section)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔧 Setup Checklist

### 1. EmailJS (Contact Form)
1. Sign up at https://emailjs.com (free tier: 200 emails/month)
2. Create a service and email template
3. Update `src/components/sections/Contact.jsx`:
```js
const EMAILJS_SERVICE_ID = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY = 'your_public_key'
```

### 2. Resume PDF
- Place your resume at `public/resume.pdf`
- It's linked throughout (Navbar, Hero, Resume section)

### 3. Photography
- Replace placeholder Unsplash URLs in `src/data/photos.js` with your own photos
- Recommended: Host on Cloudinary or Vercel blob storage

### 4. Personal Info
Update these files with your actual details:
- `src/data/projects.js` — live/GitHub links, descriptions
- `src/data/experience.js` — company name, role, achievements
- `src/components/sections/Contact.jsx` — email, LinkedIn, GitHub
- `src/components/layout/Footer.jsx` — social links
- `index.html` — OG image URL for social sharing

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo at vercel.com for auto-deploy on push
```

The `vercel.json` file handles SPA routing automatically.

---

## 📁 Folder Structure

```
src/
├── assets/          # Images, icons
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, About, Skills, Experience, Projects, Resume, Photography, Contact
│   └── ui/          # Button, Badge, SectionHeader, ScrollReveal (primitives)
├── data/            # skills.js, projects.js, experience.js, photos.js
├── hooks/           # useScrollReveal, useActiveSection
├── pages/           # Home.jsx
├── utils/           # cn.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🎨 Customization

### Colors (tailwind.config.js)
- **Gold** `#f0a500` — primary accent (CTAs, highlights)
- **Teal** `#00d4aa` — secondary accent (tech, availability indicator)
- **Background** `#0d0d0f` — near-black base

### Typography
- **Display** — Syne (headings, nav, stats)
- **Body** — DM Sans (paragraphs, descriptions)
- **Mono** — JetBrains Mono (labels, badges, code)

---

## ✅ Performance Tips
- Images in Photography section use `loading="lazy"` automatically
- Route-level code splitting can be added via `React.lazy()` for sub-pages
- Consider `vite-plugin-imagemin` if adding large local images

---

Built with ❤️ by Sharvil Bidkar
