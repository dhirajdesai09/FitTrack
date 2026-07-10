# FitTrack LocalStorage Persistence Guide

FitTrack integrates persistent client state.

---

## 1. Serialization Flow
Vite compiles React components that mount the `FitnessProvider`. 
1. **On Mount:** Reads the serialized key `fittrack_state`.
2. **On State Change:** Triggers a `useEffect` hook that serializes the state into a JSON string and updates browser storage.

---

## 2. Defensive Exception Handling
In sandboxed environments, privacy modes, or full storage conditions, calling `localStorage.setItem` can throw an exception. 

FitTrack wraps storage interactions inside robust `try-catch` blocks:
```javascript
try {
  localStorage.setItem('fittrack_state', JSON.stringify(state));
} catch (e) {
  console.warn("Storage write failed:", e);
}
```
This protects the React state engine, keeping the user interface completely functional in memory even if browser write permissions are denied.
