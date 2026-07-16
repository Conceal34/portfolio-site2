# Vinner Hooda — Full-Stack Developer Portfolio

A premium, highly-optimized developer portfolio built to showcase full-stack engineering projects, research, and technical skills. Designed with a focus on typography, sleek micro-interactions, and a flawless user experience across both Light and Dark modes.

![Portfolio Preview](./src/assets/homepage_light_mode_shade.png)

## 🚀 Live Demo
**[vinner-portfolio](https://vinner-portfolio.netlify.app/)** 

## ✨ Key Features
- **Next-Gen Tech Stack**: Built with Next.js App Router (React 19) for lightning-fast server-side rendering and routing.
- **Premium UI/UX**: Crafted with Tailwind CSS v4, featuring a carefully selected beige and charcoal color palette that gives a high-end, tactile feel.
- **Flawless Dark Mode**: Seamless, flash-free toggling between Light and Dark mode using `next-themes`, with custom adaptive color contrast.
- **Fluid Animations**: Page transitions, hover effects, and a sliding contact drawer powered by `framer-motion`.
- **Search Engine Optimized**: Dynamically generated `sitemap.xml`, `robots.txt`, and Next.js Metadata API for maximum visibility.
- **Built-in Analytics**: Integrated with highly-optimized Google Analytics (`@next/third-parties`) to track visitor engagement.

## 🛠️ Built With
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Netlify](https://www.netlify.com/)

## 📂 Project Structure
- `src/app/page.tsx` - The main landing page featuring the hero section, roadmap, and featured learning.
- `src/app/project/page.tsx` - The dedicated Projects Archive with dual grid/list views and category filtering.
- `src/app/components/` - Reusable UI components (Navbar, ProjectCard, ContactDrawer, TechTicker).
- `src/app/layout.tsx` - Global layout configuring custom Google Fonts (Playfair Display & DM Sans) and SEO metadata.

## 💻 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Conceal34/portfolio-site2.git
   cd portfolio-site2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and add your Google Analytics tracking ID (optional):
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---
*Designed and built by [Vinner Hooda](https://github.com/Conceal34).*
