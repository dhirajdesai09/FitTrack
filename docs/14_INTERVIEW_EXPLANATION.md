# FitTrack Interview Explanation Guide

This guide prepares you to present FitTrack in behavioral and technical interviews.

---

## 🎙️ High-Level Architectural Flow
Be prepared to sketch or explain how state is distributed:
1. **Source of Truth:** State lives inside `FitnessProvider` as standard React state arrays and objects.
2. **Persistence Layer:** Bound via `useEffect` tracking to maintain user state.
3. **Consuming Views:** Extracted by view files using our custom hook.

---

## 💡 Mock Behavioral Scenarios

### Scenario A: Handling scope creep
- **Sample Question:** *"Tell me about a time you had to balance feature requests with a deadline."*
- **Sample Answer:** 
  > *"When designing FitTrack, there were requests to add a real database backend. Recognizing client-side time constraints, I chose to mock active biometric intervals and focus instead on crafting a highly polished client-side experience with robust LocalStorage persistence. This met the requirements on time without compromising UI quality."*

### Scenario B: Debugging complex render loops
- **Sample Question:** *"Tell me about a challenging bug you fixed."*
- **Sample Answer:** 
  > *"During development, recalculating the Mifflin-St Jeor formula inside the component body caused infinite re-render loops. I resolved this by isolating state bindings and encapsulating the calculations inside reactive `useEffect` hooks with primitive value dependency arrays."*
