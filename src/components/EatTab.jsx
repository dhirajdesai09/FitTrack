import React, { useState } from 'react';
import { Apple, Utensils, Coffee, Plus, HelpCircle, CheckCircle, Droplet, RotateCcw } from 'lucide-react';
import { useFitness } from '../hooks/useFitness';

export default function EatTab() {
  const {
    meals,
    totalKcalConsumed,
    hydration,
    hydrationGoal,
    burnToday,
    addWater,
    addMealItem,
    logMeal,
    resetMeals
  } = useFitness();

  const [activeLogMealId, setActiveLogMealId] = useState(null);
  const [showAddMealForm, setShowAddMealForm] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', kcal: '' });

  // Macro calculations
  const dailyKcalGoal = 2500;
  const remainingKcal = Math.max(dailyKcalGoal - totalKcalConsumed + burnToday, 0);
  const totalKcalPercent = Math.min((totalKcalConsumed / dailyKcalGoal) * 100, 100);

  // Dynamic macros estimation based on logged items
  // In a real app we'd fetch nutritional databases. For our high-fidelity interview-ready demo, we estimate:
  // 1g protein = 4 kcal, 1g carbs = 4 kcal, 1g fat = 9 kcal
  const proteinGoal = 180; // grams
  const carbsGoal = 250;
  const fatGoal = 85;

  // Let's sum up actual logged items or compute proportional estimations
  const totalWeightLogged = meals.reduce((sum, meal) => sum + (meal.items?.length || 0), 0);
  const proteinEst = Math.round(meals.reduce((sum, meal) => {
    return sum + (meal.items?.reduce((pSum, item) => pSum + Math.round((item.kcal * 0.25) / 4), 0) || 0);
  }, 0)) || 65; // base estimation or dynamic sum

  const carbsEst = Math.round(meals.reduce((sum, meal) => {
    return sum + (meal.items?.reduce((cSum, item) => cSum + Math.round((item.kcal * 0.45) / 4), 0) || 0);
  }, 0)) || 110;

  const fatEst = Math.round(meals.reduce((sum, meal) => {
    return sum + (meal.items?.reduce((fSum, item) => fSum + Math.round((item.kcal * 0.3) / 9), 0) || 0);
  }, 0)) || 42;

  const handleOpenAddForm = (mealId) => {
    setActiveLogMealId(mealId);
    setShowAddMealForm(true);
  };

  const handleLogItem = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.kcal) return;
    const success = addMealItem(activeLogMealId, newItem.name, parseInt(newItem.kcal));
    if (success) {
      setNewItem({ name: '', kcal: '' });
      setShowAddMealForm(false);
      setActiveLogMealId(null);
    }
  };

  return (
    <div className="space-y-10 animate-fade-in pb-12">
      
      {/* Bento Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Calorie Circular Progress with ring */}
        <div className="lg:col-span-5 bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          <div className="absolute top-6 right-6 text-white opacity-20">
            <Apple size={36} />
          </div>

          <div className="relative w-52 h-52 md:w-60 md:h-60">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle 
                className="text-white/5" 
                cx="50" 
                cy="50" 
                fill="transparent" 
                r="42" 
                stroke="currentColor" 
                strokeWidth="8"
              ></circle>
              <circle 
                className="text-[#c3c0ff] transition-all duration-500 ease-out" 
                cx="50" 
                cy="50" 
                fill="transparent" 
                r="42" 
                stroke="currentColor" 
                strokeDasharray="264" 
                strokeDashoffset={264 - (264 * totalKcalPercent) / 100} 
                strokeLinecap="round" 
                strokeWidth="8" 
                style={{ filter: 'drop-shadow(0 0 8px rgba(195,192,255,0.6))' }}
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-extrabold text-[#e4e1ee] tracking-tight leading-none">
                {remainingKcal.toLocaleString()}
              </span>
              <span className="text-[10px] font-bold text-[#c7c4d8] uppercase tracking-widest mt-2">Kcal Left</span>
            </div>
          </div>

          <div className="mt-8 flex justify-between w-full border-t border-white/10 pt-6">
            <div className="text-center">
              <p className="text-[10px] text-[#c7c4d8] opacity-60 uppercase font-bold mb-1">Consumed</p>
              <p className="text-lg font-extrabold text-[#44e2cd]">{totalKcalConsumed}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-[#c7c4d8] opacity-60 uppercase font-bold mb-1">Daily Goal</p>
              <p className="text-lg font-extrabold text-white">{dailyKcalGoal}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-[#c7c4d8] opacity-60 uppercase font-bold mb-1">Active Burn</p>
              <p className="text-lg font-extrabold text-[#ffb695]">{burnToday}</p>
            </div>
          </div>
        </div>

        {/* Macros & Quick Hydration column */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Macros Card */}
          <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
            <h3 className="text-lg font-extrabold text-[#e4e1ee] mb-6">Macronutrients</h3>
            
            <div className="space-y-6">
              {/* Protein bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#e4e1ee]">Protein</span>
                  <span className="text-[#c7c4d8] font-medium">{proteinEst}g / {proteinGoal}g</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#c3c0ff] rounded-full shadow-[0_0_12px_rgba(195,192,255,0.4)] transition-all duration-500" 
                    style={{ width: `${Math.min((proteinEst / proteinGoal) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Carbs bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#e4e1ee]">Carbs</span>
                  <span className="text-[#c7c4d8] font-medium">{carbsEst}g / {carbsGoal}g</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#44e2cd] rounded-full shadow-[0_0_12px_rgba(68,226,205,0.4)] transition-all duration-500" 
                    style={{ width: `${Math.min((carbsEst / carbsGoal) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Fats bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#e4e1ee]">Fats</span>
                  <span className="text-[#c7c4d8] font-medium">{fatEst}g / {fatGoal}g</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#ffb695] rounded-full shadow-[0_0_12px_rgba(255,182,149,0.4)] transition-all duration-500" 
                    style={{ width: `${Math.min((fatEst / fatGoal) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-right">
              <button 
                onClick={resetMeals}
                className="text-xs text-[#c3c0ff] opacity-60 hover:opacity-100 flex items-center justify-end gap-1 ml-auto"
              >
                <RotateCcw size={12} /> Reset Food Log
              </button>
            </div>
          </div>

          {/* Water Tracker with dynamic glasses indicators */}
          <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden shadow-xl">
            <h3 className="text-lg font-bold text-[#e4e1ee] mb-1">Hydration Logs</h3>
            <p className="text-xs text-[#c7c4d8] mb-6">Daily goal: {(hydrationGoal/1000).toFixed(1)} Liters</p>
            
            {/* Interactive glasses row */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[250, 500, 750, 1000, 1250, 1500, 1750, 2000].map((step) => {
                const isFilled = hydration >= step;
                return (
                  <button 
                    key={step}
                    onClick={() => addWater(250)}
                    className={`w-10 h-14 border-2 rounded-b-lg rounded-t-sm flex items-end overflow-hidden active:scale-95 transition-all ${
                      isFilled 
                        ? 'border-[#44e2cd] bg-[#44e2cd]/20' 
                        : 'border-white/20 hover:border-[#44e2cd]/50'
                    }`}
                    title={`Glass level: ${(step / 1000).toFixed(2)} L`}
                  >
                    {isFilled && <div className="w-full h-full bg-[#44e2cd] opacity-60"></div>}
                  </button>
                );
              })}
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-extrabold text-[#e4e1ee]">{(hydration / 1000).toFixed(2)}</span>
              <span className="text-xs font-semibold text-[#c7c4d8]">L</span>
            </div>

            <button 
              onClick={() => addWater(250)}
              className="w-full py-3 bg-[#44e2cd] text-[#003731] font-bold text-xs rounded-2xl active:scale-95 transition-all shadow-[0_4px_20px_rgba(3,198,178,0.3)] hover:opacity-95"
            >
              + Add 0.25 L Glass
            </button>
          </div>

        </div>
      </div>

      {/* Meal Log Cards lists Breakfast, Lunch, Dinner, Snacks */}
      <section className="space-y-6">
        <div className="flex justify-between items-center px-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#e4e1ee]">Food Logs</h2>
          <span className="text-xs text-[#c7c4d8] font-medium opacity-80">
            Click edit or log dinner to record custom meals
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((meal) => {
            const isPlanned = meal.planned || meal.items?.length === 0;
            return (
              <div 
                key={meal.id}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-300 shadow-lg flex flex-col h-full"
              >
                {/* Image panel */}
                <div className="h-32 w-full relative">
                  {meal.image ? (
                    <img className="w-full h-full object-cover" alt={meal.name} src={meal.image} />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#c3c0ff]/10 to-[#44e2cd]/10 flex items-center justify-center text-[#c3c0ff]">
                      <Apple size={36} className="opacity-30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13121b] to-transparent opacity-85"></div>
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-lg font-bold text-white">{meal.name}</h4>
                  </div>
                </div>

                {/* Info & Items body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs text-[#c7c4d8] mb-4">
                      <span>{meal.time}</span>
                      <span className="text-[#c3c0ff] font-bold">{meal.kcal || 0} kcal</span>
                    </div>

                    {isPlanned ? (
                      <div className="py-6 text-center">
                        <p className="text-xs text-[#c7c4d8]/40 italic">Planning something delicious?</p>
                      </div>
                    ) : (
                      <ul className="space-y-2 border-t border-white/5 pt-4">
                        {meal.items.map((item, idx) => (
                          <li key={idx} className="flex justify-between items-center text-xs">
                            <span className="text-[#e4e1ee] font-medium">{item.name}</span>
                            <span className="text-[#c7c4d8]">{item.kcal} kcal</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {isPlanned ? (
                    <button 
                      onClick={() => {
                        if (meal.id === 'dinner') {
                          logMeal('dinner');
                        } else {
                          handleOpenAddForm(meal.id);
                        }
                      }}
                      className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-xl text-white transition-all border border-white/10"
                    >
                      {meal.id === 'dinner' ? 'Log Scheduled Dinner' : 'Record Item'}
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleOpenAddForm(meal.id)}
                      className="w-full py-2 border border-white/10 rounded-xl text-xs text-[#c7c4d8] hover:text-white transition-colors"
                    >
                      Log more items
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Nutritional Insights (Nutrient Balance charts) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Nutrient Balance */}
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-xl">
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div>
              <h3 className="text-xl font-bold text-[#e4e1ee]">Nutrient Balance</h3>
              <p className="text-xs text-[#c7c4d8]">Your intake is optimized for active muscle recovery today.</p>
            </div>
            <CheckCircle className="text-[#44e2cd]" size={36} />
          </div>

          {/* Simple custom SVG balance chart */}
          <div className="h-32 w-full relative z-10">
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-2">
              {[40, 75, 55, 80, 60, 90, 70].map((val, idx) => {
                let colClass = "bg-[#c3c0ff]";
                if (idx % 3 === 1) colClass = "bg-[#44e2cd]";
                if (idx % 3 === 2) colClass = "bg-[#ffb695]";
                
                return (
                  <div key={idx} className="w-10 bg-white/5 rounded-t-lg relative h-full" title={`Metric ${idx+1}: ${val}%`}>
                    <div 
                      className={`absolute bottom-0 w-full rounded-t-lg transition-all duration-1000 ${colClass}`}
                      style={{ height: `${val}%` }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pro Tip Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-xl">
          <div className="w-16 h-16 rounded-full bg-[#ffb695]/10 text-[#ffb695] flex items-center justify-center mb-4">
            <Apple size={28} />
          </div>
          <h3 className="text-lg font-bold text-[#e4e1ee] mb-2">Nutrient Pro Tip</h3>
          <p className="text-xs text-[#c7c4d8]">
            Adding 20g more protein at breakfast could reduce afternoon cravings by up to 30%.
          </p>
        </div>

      </section>

      {/* Log food modal overlay */}
      {showAddMealForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="bg-[#1b1b24] border border-white/15 p-6 rounded-3xl w-full max-w-sm shadow-2xl animate-fade-in">
            <h4 className="text-lg font-extrabold text-white mb-2 uppercase tracking-wide">
              Log food in {activeLogMealId}
            </h4>
            <p className="text-xs text-[#c7c4d8] mb-4">Adds calories and estimates proportional macronutrients.</p>
            
            <form onSubmit={handleLogItem} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#c7c4d8] mb-1">Food Name</label>
                <input 
                  type="text" 
                  value={newItem.name} 
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  placeholder="e.g. Scrambled Eggs"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-sm focus:ring-1 focus:ring-[#c3c0ff] focus:outline-none focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#c7c4d8] mb-1">Calories (kcal)</label>
                <input 
                  type="number" 
                  value={newItem.kcal} 
                  onChange={(e) => setNewItem({ ...newItem, kcal: e.target.value })}
                  placeholder="e.g. 210"
                  min="1"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-sm focus:ring-1 focus:ring-[#c3c0ff] focus:outline-none focus:border-transparent text-white"
                  required
                />
              </div>
              
              <div className="flex gap-2 pt-4">
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-[#c3c0ff] text-[#1d00a5] font-bold text-xs rounded-xl hover:bg-opacity-90 active:scale-95 transition-all"
                >
                  Log Food Item
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    setShowAddMealForm(false);
                    setActiveLogMealId(null);
                  }}
                  className="px-4 py-2.5 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 active:scale-95 transition-all text-xs"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
