# FitTrack Data Flow Analysis

This document describes how data flows inside FitTrack.

---

## 1. Unidirectional Data Cycle
All updates inside FitTrack adhere to the standard unidirectional data flow paradigm:

```
[ User Interaction ] ──(Click "+250ml")──> [ Action Callback ]
        ▲                                          │
        │ (Re-renders dynamically)                 ▼
[ Component Tree ] <──(Exposes state)─── [ Mutate Provider State ]
```

---

## 2. Real-Time Sync Scenario
When a user logs a food item in the *Eat Tab*:
1. User clicks "Log Food Item" on the breakfast card.
2. Form submits item to `addMealItem('breakfast', 'Eggs', 140)`.
3. `addMealItem` appends the food log and recalculates the breakfast meal's total kcal inside `FitnessContext`.
4. The updated state is written instantly to `localStorage`.
5. The `FitnessProvider` notifies subscriber components, causing both the *Eat* progress wheel and the *Dashboard* calorie metrics to re-render in perfect sync.
