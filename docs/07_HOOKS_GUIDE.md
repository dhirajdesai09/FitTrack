# FitTrack Custom Hooks Guide

FitTrack abstracts context consumption inside `src/hooks/useFitness.js`.

---

## 1. Safety Boundaries Check
The custom hook `useFitness` acts as a developer-friendly wrapper that checks if the context value exists:
```javascript
export const useFitness = () => {
  const context = useContext(FitnessContext);
  
  if (!context) {
    throw new Error('useFitness must be used within a FitnessProvider');
  }
  
  return context;
};
```

## 2. Benefits of Custom Hooks
1. **Developer Experience:** Avoids importing `useContext` and the actual `FitnessContext` separately in every component.
2. **Crash Prevention:** If a component is rendered outside the `FitnessProvider` wrapper (e.g. during a unit test or rapid code refactoring), the custom hook throws a clear, early runtime error rather than crashing on undefined properties.
3. **Abstraction:** Exposes a simple, unified API contract for components to pull only the exact state slices they need.
