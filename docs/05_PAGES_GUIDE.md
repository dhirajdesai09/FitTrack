# FitTrack Views & Tab Pages Guide

This document explains each full-view tab page in the FitTrack application.

---

## 1. Dashboard Tab (`src/components/DashboardTab.jsx`)
The core hub that presents high-level statistics for rapid scanning.

### Key Sub-Modules:
- **Interactive Steps Ring:** State-bound SVG path that adjusts progress percentages and is clickable to increment steps taken.
- **Water Tracker:** Simple inline increment controls to log quickly without leaving the home dashboard.
- **Weekly Activity Chart:** Pure SVG drawing combining Bezier curve paths with area gradients and interactive tooltip pins.
- **Active Workout Widget:** Starts a countdown timer for scheduled workout sessions, instantly syncing completed streak counts and calorie burns globally.

---

## 2. Train Tab (`src/components/TrainTab.jsx`)
Coordinates custom cardiovascular and muscular fitness activities.

### Key Sub-Modules:
- **Bento Category Filter:** Filters core exercises (Strength, HIIT, Yoga, Cardio) inside glowing grid panels.
- **Exercise Library Search:** Instantly matches titles and regions dynamically.
- **Biometric Heart Rate Feed:** Uses a periodic interval to simulate biometric drift, reflecting real-world pulse changes.

---

## 3. Eat Tab (`src/components/EatTab.jsx`)
Governs caloric and macronutrient logs.

### Key Sub-Modules:
- **Remaining Calorie Progress Ring:** SVG calculation of `dailyGoal - consumed + burned` with glowing visual states.
- **Interactive Hydration Glasses:** Interactive buttons representing individual 250ml water glass capacities.
- **Meal Form Logger:** Add custom food items, instantly computing estimated protein, carbs, fats, and calorie sums.

---

## 4. Tools Tab (`src/components/ToolsTab.jsx`)
Empowers users with interactive calculators.

### Key Sub-Modules:
- **BMI Range Calculators:** Two interactive sliders adjusting weight and height with clinical color classifications and a pointer gauge.
- **BMR & TDEE Calculations:** Calculates rest metabolism using the standard scientific **Mifflin-St Jeor formula**.
- **Historical logs tracker:** Interacts with context history records, allowing the user to record their results directly.
