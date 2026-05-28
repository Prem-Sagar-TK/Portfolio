# 🚀 Prem Sagar T.K — Portfolio

A sleek, serverless personal portfolio website showcasing projects, skills, leadership roles, and a contact form. Built with React, Vite, Tailwind CSS, and Framer Motion, and optimized for instant deployment to Vercel, Netlify, or GitHub Pages.

---

## 📸 Overview

This portfolio highlights:
- **About** — Background, interests, and a brief introduction
- **Skills** — Programming languages, frameworks, AI/ML tools, and soft skills
- **Projects** — Featured work including JnanaSetu, LZW Compression, Ship Routing, and LIME Research
- **Leadership** — Roles across student organizations and events
- **Contact** — A serverless contact form that connects directly to your email client

---

## 🗂️ Project Structure

```
Portfolio/
├── src/               # React application code
│   ├── assets/        # Media assets (Avatar, logo)
│   ├── component/     # UI components (Hero, Skills, Projects, Contact, etc.)
│   ├── lib/           # Shared data (data.js)
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/            # Static assets (Favicon)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Smooth hover and loading animations |
| Lucide React | Clean vector icons |
| React Router DOM | Client-side routing |
| Sonner | Toast notifications |

---

## ⚙️ Getting Started

### 🖥️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be running at `http://localhost:3000`.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This generates the static, optimized bundle in the `/dist` directory.

---

## 🚀 Deployment to Vercel

Since the project structure has been flattened, you can deploy to Vercel with zero configuration:
1. Push your changes to your Git repository.
2. Import the repository in Vercel.
3. Vercel will automatically detect **Vite** as the framework and build/deploy your portfolio successfully from the root directory!
