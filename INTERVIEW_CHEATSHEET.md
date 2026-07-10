# FitTrack - Interview Cheat Sheet & Reference Card

Use this quick-reference card on the day of your interview to review core architectural decisions, talking points, and answers to common HR/technical questions.

---

## 🧭 Technical Coordinates

* **Framework:** React 19 + Vite (JavaScript / JSX)
* **Styling:** Tailwind CSS v4 (Kinetic Glassmorphism)
* **State Management:** React Context API (`FitnessContext`)
* **Persistence:** LocalStorage Serialization
* **Dynamic Elements:** State-bound SVGs (Progress Rings, Charts)
* **Biometrics:** Simulated Cardio Drift (`setInterval` interval hook)

---

## 🏛️ Architecture & Decision Guide

| Metric | Decision | Technical Justification |
| :--- | :--- | :--- |
| **Why Context API?** | Client-only global state | Lightweight, native, shares calories & steps across non-adjacent tabs without Redux boilerplate. |
| **Why LocalStorage?** | Client-side persistence | Prevents user-logged logs from disappearing on page reload, demonstrating offline-first consideration. |
| **How do Charts work?** | Custom SVGs & Bezier Curves | Binds state percentages to `strokeDashoffset` and visual offsets, reducing dependencies and package bundle size. |
| **Why JS-only?** | Strictly client/speed | Aligns with rapid prototyping guidelines, bypasses complex static type compile steps for rapid rendering. |

---

## 💡 Key Challenges Faced & Rehearsed Answers

### Challenge 1: Infinite state re-render loops in calculations
* **How you solved it:** 
  > *"I isolated weight/height slider calculations and wrapped calculation outputs inside unified state hooks, ensuring updates only commit when coordinates actually change. I adhered to best React guidelines by never updating states directly in the component body."*

### Challenge 2: Mobile responsive touch target collision
* **How you solved it:** 
  > *"I structured a mobile-first responsive layout where navigation drawers hide on mobile and shift to a floating glassmorphic bottom bar. I guaranteed that all button touch targets have a minimum size of 44px for safe, comfortable navigation on mobile touch screens."*

---

## 🎙️ Common Interview Questions & Answers

### 1. How do you prevent layout shift when images load?
* **Answer:** *"I assign precise aspect-ratio containers (`aspect-video`, `h-40 relative`) and use high-fidelity skeleton placeholders or solid background fills, ensuring content underneath remains stable while the image loads."*

### 2. What happens if a user's LocalStorage is cleared or disabled?
* **Answer:** *"FitTrack incorporates robust fallback logic! If LocalStorage returns null or throws an error in privacy modes, the state engine catches the exception inside a `try-catch` block and falls back to our default pre-populated state. The application runs smoothly in memory without crashing."*

### 3. What is the benefit of the custom `useFitness` hook?
* **Answer:** *"It centralizes context consumption, abstracts state access, and enforces boundary validation checks. If a developer accidentally attempts to consume state outside the `FitnessProvider` wrapper, it throws a descriptive error immediately, speeding up debugging."*
