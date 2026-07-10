# FitTrack Debugging Guide

Tips and strategies to debug the FitTrack React client application.

---

## 🔍 Chrome Developer Tools Best Practices

### 1. React Developer Tools
- **Component Inspector:** Use it to view state and prop mutations inside `FitnessProvider` in real-time.
- **Profiler:** Track rendering times for each tab view to find and resolve render lags.

### 2. Application Storage Inspector
- **Inspect Storage:** Open **Application -> Local Storage** in Chrome DevTools.
- **Verify Serialization:** Ensure `fittrack_state` is updated correctly whenever water is logged or step counts are modified.

---

## 🛠️ Resolving Common Code Stalls

### Bug: Calculations do not update
- **Cause:** Input values are read as strings from form inputs.
- **Fix:** Wrap numerical values in `parseInt()` or `Number()` before writing them to the state.

### Bug: Missing icons in custom exercises
- **Cause:** Typo in the icon lookup keys.
- **Fix:** Fall back to default icons like `Activity` or `Apple` if the specified icon key does not exist.
