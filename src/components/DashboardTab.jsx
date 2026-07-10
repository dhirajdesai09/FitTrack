import React, { useState } from 'react';
import { Flame, Droplet, Moon, Award, Play, CheckCircle, Plus, Calendar, Coffee, Utensils, Apple } from 'lucide-react';
import { useFitness } from '../hooks/useFitness';

export default function DashboardTab({ setActiveTab }) {
  const {
    user,
    steps,
    stepsGoal,
    hydration,
    hydrationGoal,
    sleep,
    streak,
    meals,
    totalKcalConsumed,
    burnToday,
    activeWorkout,
    startWorkout,
    addWater,
    incrementSteps,
    completeActiveWorkout,
    cancelWorkout
  } = useFitness();

  const [chartRange, setChartRange] = useState('This Week');
  const [showTooltip, setShowTooltip] = useState(true);

  // Derive percentages
  const stepsPercent = Math.min(Math.round((steps / stepsGoal) * 100), 100);
  const calorieGoal = 2500;
  const calPercent = Math.min(Math.round((totalKcalConsumed / calorieGoal) * 100), 100);

  // Active workout simulation state
  const handleStartWorkout = () => {
    startWorkout("Lower Body Power");
  };

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header Greeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#e4e1ee] mb-2">Good morning, Alex.</h2>
          <p className="text-lg text-[#c7c4d8]">
            You're on a <span className="text-[#44e2cd] font-bold">{streak}-day</span> streak! Keep up the momentum.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-center bg-[#c3c0ff]/10 border border-[#c3c0ff]/20 px-4 py-2 rounded-2xl">
          <Award className="text-[#c3c0ff] animate-bounce" size={20} />
          <span className="text-xs font-semibold text-[#e4e1ee]">Pro Member Status Active</span>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Step Tracker Ring */}
        <div 
          onClick={incrementSteps}
          className="bg-white/5 backdrop-blur-[40px] border border-white/10 p-6 rounded-3xl relative overflow-hidden group cursor-pointer hover:bg-white/10 transition-all duration-300 shadow-xl"
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#c3c0ff]/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700"></div>
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
              <svg className="w-full h-full -rotate-90">
                <circle 
                  className="text-white/5" 
                  cx="64" 
                  cy="64" 
                  fill="transparent" 
                  r="56" 
                  stroke="currentColor" 
                  strokeWidth="8"
                ></circle>
                <circle 
                  className="text-[#c3c0ff] drop-shadow-[0_0_8px_rgba(195,192,255,0.6)] transition-all duration-500 ease-out" 
                  cx="64" 
                  cy="64" 
                  fill="transparent" 
                  r="56" 
                  stroke="currentColor" 
                  strokeDasharray="351.85" 
                  strokeDashoffset={351.85 - (351.85 * stepsPercent) / 100} 
                  strokeLinecap="round" 
                  strokeWidth="8"
                ></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-extrabold text-[#e4e1ee] tracking-tight">{steps.toLocaleString()}</span>
                <span className="text-[10px] uppercase font-bold text-[#c7c4d8] opacity-60">Steps</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-[#c3c0ff]">{stepsPercent}% of Goal</p>
              <span className="text-[10px] text-[#c7c4d8] opacity-50 block mt-1">(Tap card to walk +250)</span>
            </div>
          </div>
        </div>

        {/* Calories Card */}
        <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 p-6 rounded-3xl shadow-xl hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-[#44e2cd]/10 text-[#44e2cd]">
              <Flame size={20} className="fill-[#44e2cd]" />
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c7c4d8]">Calories</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-2xl font-bold text-[#e4e1ee]">{totalKcalConsumed}</span>
                <span className="text-xs text-[#c7c4d8]">/ {calorieGoal} kcal</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#44e2cd] rounded-full shadow-[0_0_12px_rgba(68,226,205,0.4)] transition-all duration-500" 
                  style={{ width: `${calPercent}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-[#c7c4d8] opacity-75">
              Net: <span className="text-[#44e2cd] font-bold">{totalKcalConsumed - burnToday} kcal</span> after active burn.
            </p>
          </div>
        </div>

        {/* Hydration Card */}
        <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 p-6 rounded-3xl shadow-xl hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-[#c3c0ff]/10 text-[#c3c0ff]">
              <Droplet size={20} className="fill-[#c3c0ff]" />
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c7c4d8]">Hydration</h3>
          </div>
          <div className="flex flex-col items-center justify-center py-2">
            <p className="text-2xl font-bold text-[#e4e1ee] mb-1">
              {hydration.toLocaleString()} <span className="text-sm font-normal text-[#c7c4d8]">ml</span>
            </p>
            <p className="text-[10px] uppercase font-bold text-[#c7c4d8] opacity-60 mb-4">Goal: {hydrationGoal} ml</p>
            <div className="flex gap-2">
              <button 
                onClick={(e) => { e.stopPropagation(); addWater(250); }}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold transition-all border border-white/10 active:scale-95"
              >
                +250
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); addWater(500); }}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold transition-all border border-white/10 active:scale-95"
              >
                +500
              </button>
            </div>
          </div>
        </div>

        {/* Sleep Card */}
        <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 p-6 rounded-3xl shadow-xl hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-[#ffb695]/10 text-[#ffb695]">
              <Moon size={20} className="fill-[#ffb695]" />
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c7c4d8]">Sleep</h3>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#e4e1ee]">{sleep.hours}h {sleep.minutes}m</span>
            <p className="text-xs text-[#c7c4d8] mb-4">Quality: <span className="text-[#ffb695] font-semibold">{sleep.qualityText} ({sleep.quality}%)</span></p>
            
            {/* Custom Sleep cycle bar chart illustration */}
            <div className="flex items-end h-12 gap-1.5">
              {sleep.history.map((height, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-[#ffb695]/30 hover:bg-[#ffb695] rounded-t-sm transition-all duration-300 cursor-pointer"
                  style={{ height: `${height}%` }}
                  title={`Stage ${i+1}: ${height}% deep`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chart and Side Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Activity Chart Container */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-[40px] border border-white/10 p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div>
              <h3 className="text-xl font-bold text-[#e4e1ee]">Activity Levels</h3>
              <p className="text-sm text-[#c7c4d8]">Daily activity intensity over the week</p>
            </div>
            <select 
              value={chartRange} 
              onChange={(e) => setChartRange(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-[#e4e1ee] px-4 py-2 focus:ring-1 focus:ring-[#c3c0ff] focus:outline-none"
            >
              <option className="bg-[#1b1b24] text-white">This Week</option>
              <option className="bg-[#1b1b24] text-white">Last Week</option>
            </select>
          </div>

          {/* SVG Chart Drawing */}
          <div className="h-64 relative z-10">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 700 200">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(195, 192, 255, 0.35)"></stop>
                  <stop offset="100%" stopColor="rgba(195, 192, 255, 0)"></stop>
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line stroke="rgba(255,255,255,0.05)" x1="0" x2="700" y1="50" y2="50"></line>
              <line stroke="rgba(255,255,255,0.05)" x1="0" x2="700" y1="100" y2="100"></line>
              <line stroke="rgba(255,255,255,0.05)" x1="0" x2="700" y1="150" y2="150"></line>

              {/* Area Fill */}
              <path d="M0,150 Q50,120 100,140 T200,80 T300,100 T400,60 T500,120 T600,90 T700,70 V200 H0 Z" fill="url(#chartGradient)"></path>

              {/* Smooth Bezier Line Path */}
              <path 
                className="drop-shadow-[0_4px_12px_rgba(195,192,255,0.5)]" 
                d="M0,150 Q50,120 100,140 T200,80 T300,100 T400,60 T500,120 T600,90 T700,70" 
                fill="transparent" 
                stroke="#c3c0ff" 
                strokeLinecap="round" 
                strokeWidth="4"
              ></path>

              {/* Peak Intensity Marker */}
              <circle 
                className="cursor-pointer hover:r-8 transition-all" 
                cx="400" 
                cy="60" 
                fill="#c3c0ff" 
                r="6"
                onClick={() => setShowTooltip(!showTooltip)}
              ></circle>
            </svg>

            {/* Weekly Days Labels */}
            <div className="flex justify-between mt-4 px-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                <span 
                  key={idx} 
                  className={`text-xs font-medium ${day === 'Fri' ? 'text-[#c3c0ff] font-bold' : 'text-[#c7c4d8] opacity-40'}`}
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Glowing Interactive Tooltip overlay */}
            {showTooltip && (
              <div className="absolute top-4 left-[54%] bg-white/10 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-white/20 pointer-events-none shadow-xl">
                <p className="text-xs font-bold text-[#c3c0ff]">Peak Intensity</p>
                <p className="text-[10px] text-white opacity-80 mt-0.5">Thu, 4:20 PM</p>
              </div>
            )}
          </div>
        </div>

        {/* Workout & Meals Right Sidebar */}
        <div className="space-y-6">
          
          {/* Today's Workout */}
          {activeWorkout ? (
            <div className="bg-gradient-to-br from-[#c3c0ff]/20 to-[#44e2cd]/20 border border-[#c3c0ff]/30 p-6 rounded-3xl shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-[#44e2cd] text-[#003731] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Workout Live
                </span>
                <span className="w-2 h-2 rounded-full bg-[#44e2cd] animate-ping"></span>
              </div>
              <h4 className="text-lg font-bold text-[#e4e1ee] mb-1">{activeWorkout.name}</h4>
              <p className="text-xs text-[#c7c4d8] mb-6">Completing this burns ~450 kcal</p>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => completeActiveWorkout(450)}
                  className="flex-1 py-3 bg-[#44e2cd] text-[#003731] font-bold text-xs rounded-2xl active:scale-95 transition-all shadow-lg flex items-center justify-center gap-1.5"
                >
                  <CheckCircle size={16} /> Complete
                </button>
                <button 
                  onClick={cancelWorkout}
                  className="py-3 px-4 bg-white/5 border border-white/10 hover:bg-white/10 text-xs text-[#e4e1ee] rounded-2xl active:scale-95 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div 
              onClick={handleStartWorkout}
              className="bg-white/5 border border-white/10 overflow-hidden rounded-3xl group cursor-pointer hover:bg-white/10 transition-all duration-300 shadow-xl relative"
            >
              <div className="h-40 relative">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Athlete Squats" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuWrnf4-zA5KowQ6aMT-so4JtRuStCqN5mdsu7q_-J6dTBy6yVzc1RyvHKiKGHWHYCn6-E8P2E_nz8Z4tJFDUm_ddF7VPBHrBD4UGpZa72IXvwv-GNZmG9OFgAovpq6gj6bJXhVBVuFuyXLlWLfANqD47pc-PmLRklziX4V_CKNwbmYvnwncyn3pTOcvsMWHXLZkbVxyp2LSnII_BSjL68ap-znvt06u_y2tVN09pF3c9mtz6lH2dqs8FtJcefWoY0vs3l1_0NJS_rq" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13121b] to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-[#44e2cd] text-[#003731] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Scheduled
                  </span>
                  <h4 className="text-xl font-bold text-white">Lower Body Power</h4>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 text-xs text-[#c7c4d8] font-medium">
                  <span className="flex items-center gap-1"><Calendar size={14} /> 45 mins</span>
                  <span className="text-[#44e2cd] uppercase font-bold">High Intensity</span>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleStartWorkout(); }}
                  className="w-full py-3.5 rounded-2xl bg-[#c3c0ff] text-[#1d00a5] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(195,192,255,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Play size={14} className="fill-[#1d00a5]" /> Start Workout
                </button>
              </div>
            </div>
          )}

          {/* Meals Summary list bound to Context state */}
          <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 p-6 rounded-3xl shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#e4e1ee]">Today's Meals</h3>
              <button 
                onClick={() => setActiveTab('eat')}
                className="text-xs font-bold text-[#c3c0ff] hover:underline flex items-center gap-0.5"
              >
                Log meals
              </button>
            </div>
            
            <div className="space-y-3">
              {meals.map((meal) => {
                const isPlanned = meal.planned || meal.kcal === 0;
                let Icon = Utensils;
                let bgClass = "bg-[#c3c0ff]/10 text-[#c3c0ff]";
                
                if (meal.id === 'breakfast') { Icon = Coffee; bgClass = "bg-[#ffb695]/10 text-[#ffb695]"; }
                if (meal.id === 'lunch') { Icon = Utensils; bgClass = "bg-[#44e2cd]/10 text-[#44e2cd]"; }
                if (meal.id === 'snacks') { Icon = Apple; bgClass = "bg-[#c3c0ff]/10 text-[#c3c0ff]"; }

                return (
                  <div 
                    key={meal.id}
                    onClick={() => setActiveTab('eat')}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${bgClass} flex items-center justify-center`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#e4e1ee]">{meal.name}</p>
                        <p className="text-[10px] text-[#c7c4d8]">
                          {isPlanned ? `Planned for ${meal.time}` : `${meal.items.length} items logged`}
                        </p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold ${isPlanned ? 'text-[#c7c4d8]/40 italic' : 'text-white'}`}>
                      {isPlanned ? 'Planned' : `${meal.kcal} kcal`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
