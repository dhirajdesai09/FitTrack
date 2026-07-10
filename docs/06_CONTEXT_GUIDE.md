# FitTrack Context API Guide

FitTrack manages application state inside `src/context/FitnessContext.jsx`.

---

## 1. Context Initialization
We create the context using standard React:
```javascript
export const FitnessContext = React.createContext(null);
```

## 2. Dynamic LocalStorage Serialization
The `FitnessProvider` loads state from browser LocalStorage on mount:
```javascript
const [state, setState] = useState(() => {
  try {
    const saved = localStorage.getItem('fittrack_state');
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to load state:", e);
  }
  return defaultState;
});
```

A reactive `useEffect` serializes state changes back into LocalStorage securely inside a try-catch block:
```javascript
useEffect(() => {
  try {
    localStorage.setItem('fittrack_state', JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}, [state]);
```

---

## 3. Exposing Context Value Accruals
The Provider wraps all children components and provides direct accessors:
- **`hydration` / `addWater(amount)`**
- **`meals` / `addMealItem(mealId, itemName, kcal)`**
- **`activeWorkout` / `startWorkout(name)` / `completeActiveWorkout()`**
- **`steps` / `incrementSteps()`**
- **`bmiData` / `updateBmi(height, weight)`**
