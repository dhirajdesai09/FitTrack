# FitTrack Scientific Formulas & Calculations Guide

FitTrack uses standard health formula computations.

---

## 1. BMI Classification Matrix
Calculated as weight (kg) divided by height (meters) squared:
$$\text{BMI} = \frac{\text{weight in kg}}{(\text{height in m})^2}$$

### Categorizations:
- **BMI < 18.5:** Underweight
- **18.5 ≤ BMI < 25:** Normal Weight
- **25 ≤ BMI < 30:** Overweight
- **BMI ≥ 30:** Obese

---

## 2. Mifflin-St Jeor BMR Equation
Calculates the body's baseline caloric demand at rest:
$$\text{BMR (Male)} = 10 \times \text{weight (kg)} + 6.25 \times \text{height (cm)} - 5 \times \text{age (years)} + 5$$
$$\text{BMR (Female)} = 10 \times \text{weight (kg)} + 6.25 \times \text{height (cm)} - 5 \times \text{age (years)} - 161$$

---

## 3. Macronutrient Estimations
Our meal logger dynamically distributes food calories into estimated macronutrients:
- **Protein:** 25% of total kcal (4 kcal/gram)
- **Carbohydrates:** 45% of total kcal (4 kcal/gram)
- **Fats:** 30% of total kcal (9 kcal/gram)
