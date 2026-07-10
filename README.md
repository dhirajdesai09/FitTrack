# FitTrack - Premium Performance & Fitness Dashboard

A highly polished, production-ready, client-side React fitness and wellness dashboard. FitTrack is engineered to demonstrate best-in-class React architecture, state management using the Context API, LocalStorage persistence, accessibility, and high-fidelity responsive user interface design.

This project is fully designed, structured, and documented to serve as a **top-tier portfolio project** and **interview preparation centerpiece** for junior and mid-level React engineers seeking to ace their technical interviews.

---

## 🎨 Design Concept: Kinetic Glass

FitTrack employs a refined **Kinetic Glass** design system that blends Modern Dashboard utility with beautiful, fluid glassmorphism:
- **Translucency:** UI cards feature semi-transparent white overlays (`bg-white/5` to `bg-white/10`) with heavy background blurs (`backdrop-blur-[40px]`) and microscopic white borders to capture depth.
- **Luminescence:** Subtle outer glows and bright, neon accent gradients (Indigo `#c3c0ff` and Mint Frost `#44e2cd`) guide the user's focus.
- **Typography:** Uses clean, modern geometric fonts paired with bold weights for core biometric readouts.

---

## 🚀 Key Features & Architectural Highlights

### 1. Unified Global State Manager (React Context API)
- A single source of truth (`FitnessContext`) governs steps, water intake, meal records, sleep statistics, biometrics, and schedules.
- Prevents prop-drilling by providing clean state accessors through a custom `useFitness` hook.
- Updates on one tab instantly synchronize across the entire application in real-time.

### 2. Micro-Interactions & Real-Time Biometrics
- **Step Ring Progress:** Click-to-walk trigger simulates active steps incrementing by +250 and smoothly animating the SVG dashoffset progress ring.
- **Water Glasses:** Fully interactive toggling indicators representing 250ml water glasses.
- **Heart Rate Biometric Drift:** Synthesizes realistic cardiovascular fluctuations by drifting slightly between 68 and 78 BPM on a live interval.
- **Live Workout Simulator:** Lets the user engage, pause, or complete active workout logs, triggering dynamic step counters, schedule checkers, and calorie burns.

### 3. Calculators & Health Engines
- **Interactive BMI Calculator:** Responsive range sliders compute body mass index and classify results into color-coded clinical labels while sliding a indicator along a multi-colored gauge bar.
- **BMR & TDEE Engine:** Implements the official scientific **Mifflin-St Jeor Equation** dynamically responsive to gender, age, height, and activity dropdown selectors.

### 4. Resilient LocalStorage Sync
- State changes are serialized automatically into browser storage, protecting user-logged metrics against page refreshes or session expirations.

---

## 📂 Folder Structure

```
/
├── docs/                      # Comprehensive 18-part React & Interview Preparation Guide
├── src/
│   ├── components/            # Reusable UI component modules
│   │   ├── Sidebar.jsx        # Desktop side navigation rail
│   │   ├── Header.jsx         # Responsive Top App Bar
│   │   ├── BottomNav.jsx      # Mobile navigation footer
│   │   ├── DashboardTab.jsx   # Home / Core performance metrics tab
│   │   ├── TrainTab.jsx       # Training hub & exercise search tab
│   │   ├── EatTab.jsx         # Nutrition logger & hydration tab
│   │   └── ToolsTab.jsx       # Interactive medical calculators tab
│   ├── context/
│   │   └── FitnessContext.jsx # Global Context Provider & State Serialization
│   ├── hooks/
│   │   └── useFitness.js      # Custom context consumption hook
│   ├── App.jsx                # Layout root and view router
│   ├── index.css              # Global styles (Tailwind CSS v4)
│   └── main.jsx               # React virtual DOM mounter
├── index.html                 # App entry markup
├── package.json               # Dependency manifest
└── README.md                  # Project master handbook
```

---

## 🛠️ Getting Started

### Installation
Clone or export the project, navigate into the root directory, and install dependencies:
```bash
npm install
```

### Running the Development Server
Launch the local Vite server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Building for Production
Bundle the optimized static files:
```bash
npm run build
```
This produces a `dist/` folder containing minimized HTML, CSS, and JS assets.

### Previewing the Production Build
Test your production bundle locally:
```bash
npm run preview
```

---

## 🏆 Learning Outcomes & Portfolio Readiness

By building and presenting FitTrack, you demonstrate mastery over:
1. **Dynamic SVG Rendering:** Constructing interactive, scalable progress wheels and charts directly from dynamic data states without bloated charting dependencies.
2. **Robust React Hooks:** Isolating application logic into custom hooks, keeping views clean, declarative, and modular.
3. **Responsive Glass Design:** Achieving uniform visual consistency across mobile, tablet, and widescreen layouts using modern CSS grids, tailwind-based viewports, and deep backdrop filters.
4. **Resilient Offline Systems:** Implementing client-side storage layers with try/catch exception-handling guards to guarantee persistence and avoid page-crash states.
5. **Interview Fluency:** Communicating structural patterns, lifecycle management, state synchronization, and optimization trade-offs confidently in interviews.
