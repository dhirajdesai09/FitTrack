# FitTrack Shared Components Guide

This document explains the reusable, layout-level components that compose the FitTrack shell.

---

## 1. Sidebar (`src/components/Sidebar.jsx`)
The main navigation drawer designed for large screens (Laptops and Desktops).

### Key Features:
- **Responsive Visibility:** Automatically hidden on viewports smaller than `lg` (1024px) using Tailwind's `hidden lg:flex` selectors.
- **Dynamic Goals Progress:** Reads completed days from `weeklySchedule` to display a percentage completion bar towards the target of 4 weekly sessions.
- **Micro-Interactions:** State-driven styling provides immediate visual highlight transitions on the active route link.

---

## 2. Header (`src/components/Header.jsx`)
The Top App Bar persistent across all screens.

### Key Features:
- **Tablet/Desktop Horizontal Nav:** Features horizontal tabs to switch views when drawer navigation is hidden on tablet viewports.
- **Interactive Branding:** Brand logo acts as a navigation trigger to return the user to the core home dashboard tab.
- **User Profile Indicator:** Renders user avatar paired with responsive spacing adjustments.

---

## 3. BottomNav (`src/components/BottomNav.jsx`)
The floating, glassmorphic bottom navigation bar optimized for mobile touch inputs.

### Key Features:
- **Adaptive Display:** Shown exclusively on mobile viewports using `lg:hidden` layout classes.
- **Haptic/Visual Feedback:** Buttons incorporate touch scaling down-scalers (`active:scale-90`) to provide tactile interaction indicators.
- **Safe Tap Targets:** Styled to guarantee easy tapping ranges above 44px for high-grade mobile accessibility.
