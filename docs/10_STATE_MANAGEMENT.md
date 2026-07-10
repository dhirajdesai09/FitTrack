# FitTrack State Management Analysis

A comparative guide analyzing FitTrack's lightweight global state model.

---

## 1. Local State vs. Global Context
- **Local State (`useState`):** Reserved for UI-only variables that do not affect other tabs (e.g. active sub-tabs in Calculators, modal flags, or exercise search query strings).
- **Global Context (`FitnessContext`):** Reserved for data models consumed across multiple distinct tab views (e.g., adding water on the *Eat* page immediately updates the hydration progress bar on the *Dashboard* home tab).

---

## 2. Global Context vs. Redux
For client-centric, medium-scale apps like FitTrack, React Context is highly superior to Redux because:
1. **Low Overhead:** Zero external dependencies or boilerplate stores, actions, and reducers.
2. **Native Performance:** Uses React's built-in state engine, preventing unnecessary re-renders when split cleanly.
3. **Simplicity:** High maintainability makes it extremely easy for teams to audit and present confidently.
