# FitTrack local execution & troubleshooting manual

This document provides step-by-step commands to install, run, build, and troubleshoot the FitTrack React application.

---

## 🚀 Execution Guide

### 1. Install Dependencies
FitTrack uses standard npm packages including React 19, Tailwind CSS v4, and Lucide icons.
```bash
npm install
```

### 2. Run the Development Server
Launch the fast-refresh development server on standard port 3000:
```bash
npm run dev
```
Open your browser and navigate to: **`http://localhost:3000`**

### 3. Build for Production
Bundle and compile highly optimized, compressed static files inside the `dist/` folder:
```bash
npm run build
```

### 4. Preview Production Build
Test how the application runs in production locally:
```bash
npm run preview
```

---

## 🛠️ Common Errors & Solutions

### Error 1: Port 3000 already in use
**Symptom:**
Vite prints an error indicating address already in use or falls back to port 3001.

**Solution:**
Identify and terminate the background process running on port 3000, or modify the dev command in `package.json` to configure another port, or close your existing development tabs.

### Error 2: LocalStorage quota exceeded
**Symptom:**
`Failed to save state to localStorage` warning or error printed in the browser developer console.

**Solution:**
FitTrack incorporates robust exception handling! It wraps `localStorage.setItem` inside a `try-catch` block, preventing the application from crashing. You can clear your browser's site cookies and storage to reset limits.

### Error 3: Broken styles or Tailwind not loading
**Symptom:**
The application UI is unstyled or displays black text on a white background with no layouts.

**Solution:**
Ensure you are using Node.js version 18+ and installed dependencies successfully. FitTrack utilizes the newly integrated `@tailwindcss/vite` plugin inside `vite.config.ts` and imports tailwind in `src/index.css` via `@import "tailwindcss";` which is standard under modern Tailwind CSS v4. Re-running `npm install` and `npm run dev` resolves compilation stalls.
