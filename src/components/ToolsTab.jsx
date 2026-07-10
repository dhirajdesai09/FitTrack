import React, { useState, useEffect } from 'react';
import { Calculator, Award, Calendar, ChevronRight, Activity, Moon, Clock, Save, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';
import { useFitness } from '../hooks/useFitness';

export default function ToolsTab() {
  const { bmiData, bmrData, updateBmi, updateBmr } = useFitness();
  const [activeSubTab, setActiveSubTab] = useState('bmi'); // bmi, bmr, goal

  // BMI local states initialized from context values
  const [height, setHeight] = useState(bmiData.height || 175);
  const [weight, setWeight] = useState(bmiData.weight || 70);
  const [bmiResult, setBmiResult] = useState(22.9);
  const [bmiCategory, setBmiCategory] = useState('Normal Weight');
  const [pointerLeft, setPointerLeft] = useState(45); // percent

  // BMR local states
  const [gender, setGender] = useState(bmrData.gender || 'male');
  const [age, setAge] = useState(bmrData.age || 28);
  const [activity, setActivity] = useState(bmrData.activityLevel || 'Moderate (3-5 days/week)');
  const [bmrResult, setBmrResult] = useState(1742);

  // Re-calculate BMI when height/weight changes
  useEffect(() => {
    const bmi = parseFloat((weight / ((height / 100) ** 2)).toFixed(1));
    setBmiResult(bmi);

    let cat = 'Normal Weight';
    let leftPercent = 45;

    if (bmi < 18.5) {
      cat = 'Underweight';
      leftPercent = Math.max(5, (bmi / 18.5) * 20); // 0% to 20%
    } else if (bmi < 25) {
      cat = 'Normal Weight';
      leftPercent = 20 + ((bmi - 18.5) / 6.5) * 30; // 20% to 50%
    } else if (bmi < 30) {
      cat = 'Overweight';
      leftPercent = 50 + ((bmi - 25) / 5) * 25; // 50% to 75%
    } else {
      cat = 'Obese';
      leftPercent = Math.min(95, 75 + ((bmi - 30) / 10) * 20); // 75% to 95%
    }

    setBmiCategory(cat);
    setPointerLeft(leftPercent);
    updateBmi(height, weight);
  }, [height, weight]);

  // Re-calculate BMR when gender/age/weight/height changes
  useEffect(() => {
    // Mifflin-St Jeor formula
    let bmr = Math.round(10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161));
    setBmrResult(bmr);
    updateBmr(gender, age, activity);
  }, [gender, age, weight, height, activity]);

  // Save BMI log to history
  const handleSaveBmiLog = () => {
    updateBmi(height, weight);
  };

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Underweight': return 'bg-blue-950/40 text-blue-300 border border-blue-500/20';
      case 'Normal Weight': return 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/20';
      case 'Overweight': return 'bg-amber-950/40 text-amber-300 border border-amber-500/20';
      case 'Obese': return 'bg-red-950/40 text-red-300 border border-red-500/20';
      default: return 'bg-white/5 text-white';
    }
  };

  return (
    <div className="space-y-10 animate-fade-in pb-12">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#e4e1ee]">Calculators & Tools</h2>
        <p className="text-sm text-[#c7c4d8] max-w-2xl mt-2">
          Personalized scientific health metrics to track your progress and optimize your health journey.
        </p>
      </div>

      {/* Tabs list row */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-white/5">
        <button 
          onClick={() => setActiveSubTab('bmi')}
          className={`px-6 py-3 rounded-full font-bold text-xs whitespace-nowrap transition-all duration-300 ${
            activeSubTab === 'bmi' 
              ? 'bg-[#c3c0ff] text-[#1d00a5] shadow-lg shadow-[#c3c0ff]/10' 
              : 'bg-white/5 text-[#c7c4d8] hover:bg-white/10'
          }`}
        >
          BMI Calculator
        </button>
        <button 
          onClick={() => setActiveSubTab('bmr')}
          className={`px-6 py-3 rounded-full font-bold text-xs whitespace-nowrap transition-all duration-300 ${
            activeSubTab === 'bmr' 
              ? 'bg-[#c3c0ff] text-[#1d00a5] shadow-lg shadow-[#c3c0ff]/10' 
              : 'bg-white/5 text-[#c7c4d8] hover:bg-white/10'
          }`}
        >
          BMR & TDEE
        </button>
        <button 
          onClick={() => setActiveSubTab('goal')}
          className={`px-6 py-3 rounded-full font-bold text-xs whitespace-nowrap transition-all duration-300 ${
            activeSubTab === 'goal' 
              ? 'bg-[#c3c0ff] text-[#1d00a5] shadow-lg shadow-[#c3c0ff]/10' 
              : 'bg-white/5 text-[#c7c4d8] hover:bg-white/10'
          }`}
        >
          Goal Setting
        </button>
      </div>

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Main Calculator Card */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* BMI SECTION */}
          {activeSubTab === 'bmi' && (
            <section className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-8 shadow-xl animate-fade-in">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white">Body Mass Index (BMI)</h3>
                  <p className="text-xs text-[#c7c4d8]">Scientific weight-to-height ratio analysis.</p>
                </div>
                <div className="bg-[#c3c0ff]/10 p-3 rounded-2xl text-[#c3c0ff]">
                  <Calculator size={20} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Height Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label className="font-semibold text-[#c7c4d8]">Height (cm)</label>
                      <span className="font-bold text-[#c3c0ff]">{height} cm</span>
                    </div>
                    <input 
                      type="range"
                      min="120"
                      max="220"
                      value={height}
                      onChange={(e) => setHeight(parseInt(e.target.value))}
                      className="w-full accent-[#c3c0ff]"
                    />
                  </div>

                  {/* Weight Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label className="font-semibold text-[#c7c4d8]">Weight (kg)</label>
                      <span className="font-bold text-[#c3c0ff]">{weight} kg</span>
                    </div>
                    <input 
                      type="range"
                      min="40"
                      max="150"
                      value={weight}
                      onChange={(e) => setWeight(parseInt(e.target.value))}
                      className="w-full accent-[#c3c0ff]"
                    />
                  </div>
                </div>

                {/* Circular visual results */}
                <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/5 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#c3c0ff]/10 blur-[60px] rounded-full"></div>
                  <div className="text-center z-10">
                    <p className="text-[10px] font-bold text-[#c7c4d8] uppercase tracking-widest mb-1">Your BMI</p>
                    <h4 className="text-5xl font-black text-[#44e2cd]" id="bmi-result">{bmiResult}</h4>
                    <div className={`mt-3 px-4 py-1.5 rounded-full text-xs font-bold inline-block ${getCategoryColor(bmiCategory)}`}>
                      {bmiCategory}
                    </div>
                  </div>
                </div>
              </div>

              {/* Segmented color gauge meter */}
              <div className="relative pt-6">
                <div className="h-2 w-full bg-white/5 rounded-full flex overflow-hidden">
                  <div className="h-full bg-blue-400/60" style={{ width: '18.5%' }}></div>
                  <div className="h-full bg-emerald-400/60" style={{ width: '25%' }}></div>
                  <div className="h-full bg-amber-400/60" style={{ width: '25%' }}></div>
                  <div className="h-full bg-red-500/60" style={{ width: '31.5%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-bold text-[#c7c4d8] opacity-50">
                  <span>16.0</span>
                  <span>18.5</span>
                  <span>25.0</span>
                  <span>30.0</span>
                  <span>35.0+</span>
                </div>
                {/* Pointer indicator */}
                <div 
                  className="absolute top-4 transition-all duration-500 ease-out" 
                  style={{ left: `${pointerLeft}%` }}
                >
                  <div className="w-1.5 h-6 bg-[#c3c0ff] shadow-[0_0_8px_#c3c0ff] rounded-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-xs text-[#c7c4d8] font-semibold">Record this current measurement in history?</span>
                <button 
                  onClick={handleSaveBmiLog}
                  className="px-4 py-2 bg-[#c3c0ff]/10 hover:bg-[#c3c0ff]/20 text-[#c3c0ff] text-xs font-bold rounded-xl flex items-center gap-1 transition-all"
                >
                  <Save size={14} /> Log BMI
                </button>
              </div>
            </section>
          )}

          {/* BMR SECTION */}
          {activeSubTab === 'bmr' && (
            <section className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-8 shadow-xl animate-fade-in">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white">Basal Metabolic Rate (BMR)</h3>
                  <p className="text-xs text-[#c7c4d8]">Scientific daily calories burned at complete rest.</p>
                </div>
                <div className="bg-[#44e2cd]/10 p-3 rounded-2xl text-[#44e2cd]">
                  <Sparkles size={20} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div className="flex gap-2">
                    <button 
                      type="button"
                      onClick={() => setGender('male')}
                      className={`flex-1 py-3 rounded-xl border font-bold text-xs transition-all ${
                        gender === 'male' 
                          ? 'border-[#c3c0ff] text-[#c3c0ff] bg-[#c3c0ff]/10 shadow' 
                          : 'border-white/10 text-[#c7c4d8] hover:bg-white/5'
                      }`}
                    >
                      Male
                    </button>
                    <button 
                      type="button"
                      onClick={() => setGender('female')}
                      className={`flex-1 py-3 rounded-xl border font-bold text-xs transition-all ${
                        gender === 'female' 
                          ? 'border-[#c3c0ff] text-[#c3c0ff] bg-[#c3c0ff]/10 shadow' 
                          : 'border-white/10 text-[#c7c4d8] hover:bg-white/5'
                      }`}
                    >
                      Female
                    </button>
                  </div>

                  <div className="relative">
                    <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-[#c7c4d8]">Age (years)</label>
                    <input 
                      type="number" 
                      value={age}
                      onChange={(e) => setAge(parseInt(e.target.value) || 28)}
                      className="w-full pt-6 pb-2 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#c3c0ff] focus:ring-0 text-white font-semibold text-sm transition-all"
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-[#c7c4d8]">Activity Level</label>
                    <select 
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      className="w-full pt-6 pb-2 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#c3c0ff] focus:ring-0 text-white font-semibold text-sm transition-all appearance-none focus:outline-none"
                    >
                      <option value="Sedentary (No Exercise)" className="bg-[#1b1b24] text-white">Sedentary (No Exercise)</option>
                      <option value="Moderate (3-5 days/week)" className="bg-[#1b1b24] text-white">Moderate (3-5 days/week)</option>
                      <option value="Athlete (Heavy Exercise)" className="bg-[#1b1b24] text-white">Athlete (Heavy Exercise)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/5 border-dashed relative overflow-hidden">
                  <div className="text-center z-10">
                    <p className="text-[10px] font-bold text-[#c7c4d8] uppercase tracking-widest mb-1">Your Rest BMR</p>
                    <h4 className="text-4xl font-black text-[#44e2cd]">{bmrResult.toLocaleString()} <span className="text-sm font-medium opacity-60 text-white">kcal/day</span></h4>
                    <p className="text-[10px] text-[#c7c4d8] mt-4 italic max-w-xs mx-auto">
                      Calculated using the premium Mifflin-St Jeor equation.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* GOAL SECTION */}
          {activeSubTab === 'goal' && (
            <section className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-xl animate-fade-in">
              <div>
                <h3 className="text-xl font-bold text-white">Goal Planning</h3>
                <p className="text-xs text-[#c7c4d8]">Set customized targets for scale weight and overall body composition.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#c3c0ff]/50 transition-all group cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <TrendingUp className="text-[#c3c0ff]" size={28} />
                    <ChevronRight className="text-[#c7c4d8] group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Target Scale Weight</h4>
                  <p className="text-xs text-[#c7c4d8]">Establish weight parameters and milestones.</p>
                </div>
                
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#44e2cd]/50 transition-all group cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <Activity className="text-[#44e2cd]" size={28} />
                    <ChevronRight className="text-[#c7c4d8] group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Body Fat Percentage Target</h4>
                  <p className="text-xs text-[#c7c4d8]">Specify optimal lean composition parameters.</p>
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Sidebar logs / history tracking */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* History records */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c3c0ff]/10 to-transparent opacity-50"></div>
            <h4 className="font-bold text-xs text-[#c3c0ff] tracking-wider uppercase mb-4 relative z-10">Last recorded</h4>
            
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex justify-between items-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <Clock className="text-[#c3c0ff]" size={16} />
                  <span className="text-xs text-[#c7c4d8]">Current BMI</span>
                </div>
                <span className="text-sm font-bold text-white">{bmiResult}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <Calendar className="text-[#ffb695]" size={16} />
                  <span className="text-xs text-[#c7c4d8]">Latest Entry Date</span>
                </div>
                <span className="text-sm font-bold text-white">Oct 12</span>
              </div>
            </div>
            
            <button className="w-full mt-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-xs text-white font-bold border border-white/10 transition-all active:scale-95">
              View historical trends
            </button>
          </div>

          {/* Motivational background image */}
          <div className="rounded-3xl p-6 relative h-64 flex flex-col justify-end overflow-hidden shadow-xl">
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Consistency Athlete" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2YqmmI8BiYz6hzZsdlmyk3adHcq7kxybygKf-_46zszKrg5goVG2kKokxQoGCnNuXO5cWGZI9RiWrYPkJ9ofzxGpYzmBHOv_HKcKx1KbVjFvM5yvkKfcrEzTrHoiwitYYb8H8BljGB93y3p1zoOP9rDj6TFHi_OAQskIJPI3HprIbhWySG-0R9n_MIhqsmzfVKtN2Kxx5AQyXY0AwkDL94EtUOtXXIRKaQpYPryLUMXSXf6sPDBc_PCUFpYXXFuUQS_UOlngAA2XU" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13121b] to-transparent"></div>
            <div className="relative z-10">
              <p className="text-lg font-bold text-white mb-1">Consistency is key</p>
              <p className="text-[10px] text-[#c7c4d8]">Alex, you've remained in the 'Healthy' range for 14 weeks.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
