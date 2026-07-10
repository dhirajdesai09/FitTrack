# FitTrack Future Improvements Roadmap

A list of potential enhancements to scale the FitTrack application.

---

## 🚀 Near-Term Feature Upgrades
1. **Interactive Charts:** Integrate libraries like Recharts or D3 to display detailed weekly and monthly biometric logs.
2. **Food Database Integration:** Replace estimated macronutrient distributions with real nutrition data from USDA API requests.
3. **PWA Support:** Add a service worker and manifest file to let users install FitTrack as a standalone app on their mobile home screen.

---

## 🏛️ Architectural Scalability
1. **API Integration:** Connect the state engine to a database backend like Firestore or PostgreSQL, replacing `localStorage` writes with secure database syncs.
2. **TypeScript Migration:** Convert the codebase to TypeScript to add strict types, reducing runtime type bugs.
3. **Advanced State Management:** Transition state from React Context to Zustand or Redux Toolkit if application complexity grows.
