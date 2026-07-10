# FitTrack React Best Practices Guide

This document lists the React and front-end best practices applied across the FitTrack codebase.

---

## 💎 Core Code Quality Rules

### 1. Functional Components and Hooks
- All components use functional declarations and standard React hooks, keeping code lightweight.
- Separate UI-only state variable updates from core business logic context updates.

### 2. Strict Unidirectional Data Flow
- Children components do not mutate data directly; they invoke setter callbacks provided by `FitnessContext`, keeping data flow predictable and easy to debug.

### 3. Defensive Serialization
- Wrap storage interactions inside `try-catch` blocks, protecting the app from crashing if browser cookies or LocalStorage writes are blocked.

---

## 🎨 Consistent Styling Guidelines
- **Responsive Layout:** Grid layout classes (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) ensure the interface is responsive across all devices.
- **Glassmorphic Aesthetic:** Shared utility values keep the glassmorphism visual style uniform.
- **Touch-safe Targets:** Tap targets are styled to be at least 44px on mobile viewports for high-grade mobile accessibility.
