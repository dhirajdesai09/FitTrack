import React, { createContext, useState, useEffect } from 'react';

// Create context
export const FitnessContext = createContext(null);

// Default initial state
const defaultState = {
  user: {
    name: "Alex Rivers",
    type: "Pro Member",
    isOnline: true,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuANwdSEDvVSzIhfqfN5ATEyoacEMskeDh56uIInb_caj3GWu--KuMv5UnNIdSwi0RT1ogjMix08KjKkj1F9y6Ho1gTZ0_fTp2CagzHie-lR-a6c0S4Ictn0POzr4GTs3rv_AJwWhbYA8xI_G_NHrEw5wpf5yjA_LxkmxbUC3VLoRSMFzEtX0LjJPe-AX0RkYTxN2HTNGjGEHVp9-ZKzSRMAC0IcUTWQN9FbDRxXaaTKPUORVsUmjz3LQMih_Xu2Kk78wI-jgAEDtL1F"
  },
  steps: 8420,
  stepsGoal: 10000,
  hydration: 1250, // ml
  hydrationGoal: 2500, // ml
  sleep: {
    hours: 7,
    minutes: 42,
    quality: 88,
    qualityText: "Great",
    history: [50, 75, 100, 66, 33, 66, 83] // Percentages representing sleep stages
  },
  heartRate: 72,
  burnToday: 340,
  streak: 14,
  activeWorkout: null, // holds workout info when active
  meals: [
    {
      id: "breakfast",
      name: "Breakfast",
      kcal: 420,
      time: "08:15 AM",
      items: [
        { name: "Avocado Toast", kcal: 280 },
        { name: "Greek Yogurt", kcal: 140 }
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7ry13azdwTuqyYCyVEBGoTSpiuHhRIx3rCZrCdTI75vaEvbVO7vQmG0UacSD1cMX1wE-_mKnEzWfR_pIejSYkhgXa-uTNNv4CR3GmsWhLR66krj78Y2xkud4xgDBjzS_fczyt0mcc1RGpghdS02F_eRNnfaF0p_3Z7KyjuCG_tN4BfRu1Bdkv8uivcbkMKghoYy0n6JLuZHKkeN93nlvoOS7Dhi5D4nPoagvIM8yYkBgWE1RiyCi4zcA9EL7rwWbSELDu9xEbKUw5"
    },
    {
      id: "lunch",
      name: "Lunch",
      kcal: 580,
      time: "01:30 PM",
      items: [
        { name: "Quinoa Bowl", kcal: 450 },
        { name: "Almond Butter", kcal: 130 }
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALZMzjYZgLvto8g7hDz5i64XhrJycUxQyfdNLX_2Lg8aYKrvtqYwR2DGATdNSMzb3zXdMVu3fxvCDyP4IZZv7qaCX-6n2nn2MloR9Yjhw7YHDnQjpW3aOjGDc3wrMUbk3FbYd2i9ibhTwJqeh864WtvF13fFxMHD9TAsIsjtVuVue1h9n5uwusc5d2BI6W0P3ff-bYNQZX9-oPN1WtGpA3eKQEOOlOS34Z0nbMryS4LOacVrUuZdrLsXgUcTVhUXZQkOkcROirY9my"
    },
    {
      id: "dinner",
      name: "Dinner",
      kcal: 0,
      time: "07:30 PM",
      items: [],
      planned: true
    },
    {
      id: "snacks",
      name: "Snacks",
      kcal: 160,
      time: "04:00 PM",
      items: [
        { name: "Protein Shake", kcal: 160 }
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3WiNuT3A42DqCvb_VP5A644hBEyfsYEi_WSq2ceA6G5oyxHO4anBu1zZagk9y_3h5Nk0C0_MbwGNaDg4thF5ILrW5_Vk0m4bYwKmCMpBql29PKQIEy887Z_KiCAjUJTWgzQOSIppmry_w-wrU3-uwl7VmDRssXpN1FycL_ni36aeELO8l-P96jSZ4zIxN3X5U1XMMEqb56qXhNRRHMX6Po0vAVAk8PK8dvd91eX3YF6nxFxLI_IY3g0xiZwEkgr74VI2tZ3hwVb5v"
    }
  ],
  bmiData: {
    height: 175,
    weight: 70,
    history: [
      { date: "Oct 12", bmi: 23.1 }
    ]
  },
  bmrData: {
    gender: "male",
    age: 28,
    activityLevel: "Moderate (3-5 days/week)"
  },
  weeklySchedule: [
    { day: "MON", date: 12, completed: true },
    { day: "TUE", date: 13, completed: false },
    { day: "WED", date: 14, completed: false },
    { day: "THU", date: 15, completed: true },
    { day: "FRI", date: 16, completed: false },
    { day: "SAT", date: 17, completed: false },
    { day: "SUN", date: 18, completed: false }
  ],
  exerciseLibrary: [
    {
      id: "db-press",
      name: "Dumbbell Press",
      category: "Chest",
      type: "Strength",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq_WUz2n4wj6sxg_B_TZEtDle7c6dyNeEZh0iAw-wqWzEAXL6upc7BQ_FCx4Um67o33TMCppynYYhvrLSipWNdsOhPRyt8cZ_EpfWIKjeJTQN5OGsVDdFGkQKG0q_urAF53V9PLtyQhUI1UZA8rHt5X_eJ_oHku0RfLYh-tA0D0sTU5zy6JBMsmS2R8rfRw64OhfHt2hjPX4XgH9AWVf83OdR_NS6A7PY4dTmehHE2Fs-DG3lTWDDEtSTTYTFgRvEdCXAJ63KeK-v6"
    },
    {
      id: "bb-squat",
      name: "Barbell Squat",
      category: "Legs",
      type: "Strength",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK-yM3ykJiHqFpmJvTMwFk9YO5qEHzpzSJ9i5mTqrqgFLMe0ME47C93fusgWCOrW1rwVUDc0HSNgVynjijdma2Td1P1_gx0EV12xQyxverBZExDIJRA1ysJ1LxGtp42zURy8u1yeg3fhocG3swykmflhZcZe-G58zVFGKDQN5OzdpARv7peNsvmAnqlAWrAL06vXh9mkp3vMKDzkXufq8St5eQEHkWYjWy3tZSlZEZLKzpN8rWhmWsRJVt4LluwQq0nq6MrDrwvm0q"
    },
    {
      id: "burpees",
      name: "Burpees",
      category: "Full Body",
      type: "HIIT",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA89b4d0ceL9MUTTeCtG5EtZGKKlv8NNVIiFTSNX79Lx_utOQ-TpvdM81I84Ugs7qTaO3vRekkBuTzVaOZ7a7OoLxKbrHU11l0snYYVPeLPjONEinMwtKICtrkW_WZsRwnOD37e6ffKu32Fx3FbwbgYWVDSBhddSpR0ha1gTLBRZjFl2gzjrpdVuC_pZHc75_VHabHXXRzcIJsnJyxPq8h6acRHFAUZOK84XJkCyAyXcQ8-JL5UwGvDNP53Iuwek9G20RnWSHfQ4hFN"
    },
    {
      id: "pushups",
      name: "Push-ups",
      category: "Chest",
      type: "Strength",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq_WUz2n4wj6sxg_B_TZEtDle7c6dyNeEZh0iAw-wqWzEAXL6upc7BQ_FCx4Um67o33TMCppynYYhvrLSipWNdsOhPRyt8cZ_EpfWIKjeJTQN5OGsVDdFGkQKG0q_urAF53V9PLtyQhUI1UZA8rHt5X_eJ_oHku0RfLYh-tA0D0sTU5zy6JBMsmS2R8rfRw64OhfHt2hjPX4XgH9AWVf83OdR_NS6A7PY4dTmehHE2Fs-DG3lTWDDEtSTTYTFgRvEdCXAJ63KeK-v6"
    }
  ]
};

export const FitnessProvider = ({ children }) => {
  // Load initial state from LocalStorage or fall back to defaultState
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem('fittrack_state');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load state from localStorage:", e);
    }
    return defaultState;
  });

  // Save to LocalStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem('fittrack_state', JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save state to localStorage:", e);
    }
  }, [state]);

  // Actions
  const addWater = (amount) => {
    setState((prev) => ({
      ...prev,
      hydration: Math.min(prev.hydration + amount, 10000) // Caps at 10L
    }));
  };

  const addMealItem = (mealId, itemName, kcal) => {
    if (!itemName || isNaN(kcal) || kcal < 0) return false;
    setState((prev) => {
      const updatedMeals = prev.meals.map((meal) => {
        if (meal.id === mealId) {
          const items = [...(meal.items || []), { name: itemName, kcal: parseInt(kcal) }];
          const totalKcal = items.reduce((sum, item) => sum + item.kcal, 0);
          return {
            ...meal,
            items,
            kcal: totalKcal,
            planned: false
          };
        }
        return meal;
      });
      return { ...prev, meals: updatedMeals };
    });
    return true;
  };

  const logMeal = (mealId) => {
    // Allows marking a planned meal (like dinner) as active with initial items
    setState((prev) => {
      const updatedMeals = prev.meals.map((meal) => {
        if (meal.id === mealId) {
          return {
            ...meal,
            planned: false,
            items: [{ name: "Healthy Baked Salmon", kcal: 380 }, { name: "Brown Rice & Asparagus", kcal: 220 }],
            kcal: 600
          };
        }
        return meal;
      });
      return { ...prev, meals: updatedMeals };
    });
  };

  const resetMeals = () => {
    setState((prev) => ({
      ...prev,
      meals: defaultState.meals
    }));
  };

  const updateBmi = (height, weight) => {
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) return;
    setState((prev) => {
      const h = parseFloat(height);
      const w = parseFloat(weight);
      const bmi = parseFloat((w / ((h / 100) ** 2)).toFixed(1));
      
      // Update history if it's different from the last entry
      const history = [...prev.bmiData.history];
      const todayStr = "Today";
      const lastEntry = history[history.length - 1];
      
      if (!lastEntry || lastEntry.bmi !== bmi) {
        history.push({ date: todayStr, bmi });
      }

      return {
        ...prev,
        bmiData: {
          height: h,
          weight: w,
          history: history.slice(-5) // keep last 5 logs
        }
      };
    });
  };

  const updateBmr = (gender, age, activityLevel) => {
    setState((prev) => ({
      ...prev,
      bmrData: {
        gender,
        age: parseInt(age) || prev.bmrData.age,
        activityLevel
      }
    }));
  };

  const addCustomExercise = (name, category, type) => {
    if (!name || !category || !type) return;
    const newExercise = {
      id: `custom-${Date.now()}`,
      name,
      category,
      type,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq_WUz2n4wj6sxg_B_TZEtDle7c6dyNeEZh0iAw-wqWzEAXL6upc7BQ_FCx4Um67o33TMCppynYYhvrLSipWNdsOhPRyt8cZ_EpfWIKjeJTQN5OGsVDdFGkQKG0q_urAF53V9PLtyQhUI1UZA8rHt5X_eJ_oHku0RfLYh-tA0D0sTU5zy6JBMsmS2R8rfRw64OhfHt2hjPX4XgH9AWVf83OdR_NS6A7PY4dTmehHE2Fs-DG3lTWDDEtSTTYTFgRvEdCXAJ63KeK-v6" // standard icon placeholder
    };
    setState((prev) => ({
      ...prev,
      exerciseLibrary: [newExercise, ...prev.exerciseLibrary]
    }));
  };

  const startWorkout = (workoutName) => {
    setState((prev) => ({
      ...prev,
      activeWorkout: {
        name: workoutName,
        duration: 45,
        elapsed: 0,
        status: "running"
      }
    }));
  };

  const cancelWorkout = () => {
    setState((prev) => ({
      ...prev,
      activeWorkout: null
    }));
  };

  const completeActiveWorkout = (caloriesBurned = 450) => {
    setState((prev) => {
      // Mark today's schedule as completed
      const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const currentDayName = days[today];

      const updatedSchedule = prev.weeklySchedule.map((sched) => {
        if (sched.day === currentDayName) {
          return { ...sched, completed: true };
        }
        return sched;
      });

      return {
        ...prev,
        burnToday: prev.burnToday + caloriesBurned,
        streak: prev.streak + 1,
        activeWorkout: null,
        weeklySchedule: updatedSchedule
      };
    });
  };

  const incrementSteps = () => {
    setState((prev) => ({
      ...prev,
      steps: Math.min(prev.steps + 250, 20000)
    }));
  };

  // Derived states
  const totalKcalConsumed = state.meals.reduce((sum, meal) => sum + (meal.kcal || 0), 0);
  const netCalories = totalKcalConsumed - state.burnToday;

  return (
    <FitnessContext.Provider
      value={{
        ...state,
        totalKcalConsumed,
        netCalories,
        addWater,
        addMealItem,
        logMeal,
        resetMeals,
        updateBmi,
        updateBmr,
        addCustomExercise,
        startWorkout,
        cancelWorkout,
        completeActiveWorkout,
        incrementSteps
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};
