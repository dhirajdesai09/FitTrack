# FitTrack Folder Structure Guide

A modular, descriptive breakdown of our clean project directory structure.

```
src/
├── components/          # Standalone UI View Modules
│   ├── Sidebar.jsx      # Desktop side drawer
│   ├── Header.jsx       # Universal app top bar
│   ├── BottomNav.jsx    # Responsive mobile footer navigation
│   ├── DashboardTab.jsx # Core biometrics (steps, calories, hydration summaries)
│   ├── TrainTab.jsx     # Active workouts and exercise database searches
│   ├── EatTab.jsx       # Nutrition logger, calories left wheel, macros progress
│   └── ToolsTab.jsx     # Interactive BMI and scientific BMR calculators
├── context/
│   └── FitnessContext.jsx # Global unified state provider and persistence
├── hooks/
│   └── useFitness.js    # Custom safe context consumer hook
├── App.jsx              # Main view manager
├── index.css            # Stylesheets (Tailwind CSS v4)
└── main.jsx             # Mounting script
```

## Folder Architectural Intent
1. **Separation of Concerns:** Component views are decoupled from state-management code.
2. **Modular Components:** Shared layout elements (Header, Sidebar, BottomNav) are self-contained.
3. **Consolidated State Context:** Prevents prop-drilling, simplifying component files for readability and maintenance.
