# FitTrack Deployment Guide

Guide to compile and deploy FitTrack to static hosting platforms.

---

## 🏗️ Compiling the Production Build
FitTrack compiles into a clean static Single Page Application (SPA). To generate production files:
```bash
npm run build
```
This runs the Vite compiler to bundle files inside the `/dist` directory.

---

## ☁️ Static Hosting Providers
Because FitTrack runs entirely in the browser, you can host the `/dist` bundle on any free static provider:

1. **Vercel:**
   - Link your repository and set the framework preset to **Vite**.
   - Set the output directory to `dist`.

2. **GitHub Pages:**
   - Deploy your built `/dist` assets directly to your repository's `gh-pages` branch.

3. **Netlify:**
   - Drag and drop your `/dist` folder onto the Netlify dashboard.
