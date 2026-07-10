import React, { useState, useEffect } from 'react';
import { Search, Play, Plus, Dumbbell, ShieldAlert, Heart, Flame, Calendar, ChevronLeft, ChevronRight, Activity, Smile, SearchCode } from 'lucide-react';
import { useFitness } from '../hooks/useFitness';

export default function TrainTab() {
  const {
    burnToday,
    weeklySchedule,
    exerciseLibrary,
    activeWorkout,
    startWorkout,
    completeActiveWorkout,
    cancelWorkout,
    addCustomExercise
  } = useFitness();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [simulatedHeartRate, setSimulatedHeartRate] = useState(72);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newExercise, setNewExercise] = useState({ name: '', category: 'Chest', type: 'Strength' });

  // Simulate real-time heart rate drift
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedHeartRate((prev) => {
        const drift = Math.random() > 0.5 ? 1 : -1;
        const next = prev + drift;
        return Math.max(68, Math.min(next, 78));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'All', icon: Activity, color: 'text-[#c3c0ff] hover:bg-[#c3c0ff]/10' },
    { name: 'Strength', icon: Dumbbell, color: 'text-[#c3c0ff] hover:bg-[#c3c0ff]/10' },
    { name: 'HIIT', icon: Flame, color: 'text-[#44e2cd] hover:bg-[#44e2cd]/10' },
    { name: 'Yoga', icon: Smile, color: 'text-[#ffb695] hover:bg-[#ffb695]/10' },
  ];

  const handleStartWorkout = (name) => {
    startWorkout(name);
  };

  const filteredExercises = exerciseLibrary.filter(ex => {
    const matchesSearch = ex.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ex.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || ex.type === activeCategory || ex.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreateExercise = (e) => {
    e.preventDefault();
    if (!newExercise.name) return;
    addCustomExercise(newExercise.name, newExercise.category, newExercise.type);
    setNewExercise({ name: '', category: 'Chest', type: 'Strength' });
    setShowAddModal(false);
  };

  return (
    <div className="space-y-10 animate-fade-in pb-12">
      {/* Header Section */}
      <section>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#e4e1ee] mb-2">Training Hub</h2>
        <p className="text-[#c7c4d8]">Elevate your performance with tailored workout sessions.</p>
      </section>

      {/* Grid of Bento Categories & Active Workout Player */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left column: Categories & Calendar & Recommended */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Category Bento Quick selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.name;
              return (
                <div 
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`bg-white/5 backdrop-blur-[40px] border rounded-3xl p-6 group cursor-pointer transition-all duration-300 active:scale-95 ${
                    isSelected 
                      ? 'bg-[#c3c0ff]/15 border-[#c3c0ff] shadow-lg' 
                      : 'border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Icon size={28} className={`mb-4 transition-transform group-hover:scale-110 ${cat.color.split(' ')[0]}`} />
                  <h3 className="font-semibold text-sm text-[#e4e1ee]">{cat.name}</h3>
                </div>
              );
            })}
          </div>

          {/* Featured / Recommended Workout Player */}
          {activeWorkout ? (
            <div className="bg-gradient-to-br from-[#1b1b24]/80 to-[#13121b]/80 border border-[#c3c0ff]/30 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-6">
                <span className="w-3 h-3 rounded-full bg-[#44e2cd] animate-ping inline-block"></span>
              </div>
              
              <span className="bg-[#44e2cd]/10 text-[#44e2cd] px-3.5 py-1.5 rounded-full font-bold text-xs border border-[#44e2cd]/20 inline-block mb-4">
                Active Workout Timer Running
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-2">{activeWorkout.name}</h3>
              <p className="text-xs text-[#c7c4d8] mb-6">Completing this session awards a +450 daily burn streak.</p>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => completeActiveWorkout(450)}
                  className="px-6 py-3 bg-[#44e2cd] text-[#003731] font-bold text-xs rounded-xl active:scale-95 transition-all shadow-lg"
                >
                  Complete Workout Session
                </button>
                <button 
                  onClick={cancelWorkout}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 rounded-xl active:scale-95 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden min-h-[400px] flex items-end p-8 group shadow-xl">
              <div className="absolute inset-0 z-0">
                <img 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  alt="HIIT training" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHf3GcczBC7C4gC1moMbj4V3jfz30NrPhOuniX0VzCLfvUp4zE3-FTUZ3lcxiQhDvfvr8j6ZytDkWkm3CxK57-ixNDXdZAQhAPx8sGdK7eRcQeVDsNHKv6P4-8aG-xSfxbZreOmASLLpnUKhxht6iEAnr2SJ4GoJV2a5_l-rIiPQY1V16lUq-oJxdQvbxpZ6ZTwGUzJ3dDNEkM3MdTrJ9uDM3JHdhYOz4u4cpNbTCppnw5rZ4Za6bDMAcp6cAhaHFt3iNvubsgZNfG" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13121b] via-[#13121b]/40 to-transparent"></div>
              </div>
              <div className="relative z-10 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                  <div>
                    <span className="bg-[#44e2cd]/20 text-[#44e2cd] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 inline-block backdrop-blur-md border border-[#44e2cd]/30">
                      Recommended for You
                    </span>
                    <h3 className="text-2xl font-bold text-[#e4e1ee] mb-2">Full Body HIIT</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-[#c7c4d8] font-medium opacity-80">
                      <span className="flex items-center gap-1"><Calendar size={14} /> 45 mins</span>
                      <span>•</span>
                      <span>Advanced Level</span>
                      <span>•</span>
                      <span className="text-[#44e2cd]">650 kcal burn</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleStartWorkout("Full Body HIIT")}
                    className="bg-[#c3c0ff] hover:bg-[#c3c0ff]/90 text-[#1d00a5] px-8 py-4 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(195,192,255,0.4)] active:scale-95 transition-all flex items-center gap-2 self-start md:self-auto"
                  >
                    <Play size={16} className="fill-[#1d00a5]" /> Start Workout
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Weekly Schedule Timeline Calendar */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#e4e1ee]">Weekly Schedule</h3>
              <div className="flex gap-1.5">
                <button className="p-1.5 hover:bg-white/5 rounded-full text-[#c7c4d8]"><ChevronLeft size={16} /></button>
                <button className="p-1.5 hover:bg-white/5 rounded-full text-[#c7c4d8]"><ChevronRight size={16} /></button>
              </div>
            </div>
            
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {weeklySchedule.map((day, idx) => {
                const isCompleted = day.completed;
                return (
                  <div 
                    key={idx}
                    className={`min-w-[100px] flex flex-col items-center p-4 rounded-2xl transition-all ${
                      isCompleted 
                        ? 'bg-[#c3c0ff]/20 border border-[#c3c0ff]/30 text-[#c3c0ff]' 
                        : 'hover:bg-white/5 text-[#c7c4d8] border border-transparent cursor-pointer'
                    }`}
                  >
                    <p className="text-xs font-bold tracking-widest">{day.day}</p>
                    <p className="text-xl font-black mt-1">{day.date}</p>
                    {isCompleted && (
                      <div className="w-2.5 h-2.5 bg-[#44e2cd] rounded-full mt-2 animate-pulse shadow-[0_0_8px_rgba(68,226,205,0.8)]"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right column: Search library, Custom additions, performance diagnostics */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Exercise Library search log */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[#e4e1ee]">Exercise Library</h3>
              <button 
                onClick={() => setShowAddModal(true)}
                className="p-1.5 hover:bg-[#c3c0ff]/10 rounded-xl text-[#c3c0ff] transition-all"
                title="Create custom exercise"
              >
                <Plus size={18} />
              </button>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d8] opacity-60" size={16} />
              <input 
                type="text"
                placeholder="Search exercises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-xs font-medium focus:ring-1 focus:ring-[#c3c0ff] focus:outline-none focus:border-transparent text-white placeholder-[#c7c4d8]/40"
              />
            </div>

            <div className="space-y-3 max-h-[300px] overflow-y-auto no-scrollbar">
              {filteredExercises.length > 0 ? (
                filteredExercises.map((ex) => (
                  <div 
                    key={ex.id}
                    onClick={() => handleStartWorkout(ex.name)}
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-colors border border-transparent hover:border-white/10"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#1f1f28]">
                      <img className="w-full h-full object-cover" alt={ex.name} src={ex.image} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#e4e1ee]">{ex.name}</p>
                      <p className="text-[10px] text-[#c7c4d8] font-bold">{ex.category} • <span className="text-[#44e2cd]">{ex.type}</span></p>
                    </div>
                    <button className="ml-auto p-1.5 hover:bg-[#c3c0ff]/15 rounded-full text-[#c3c0ff]">
                      <Play size={14} className="fill-[#c3c0ff]" />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-xs text-[#c7c4d8]/40 italic text-center py-6">No matching exercises found.</p>
              )}
            </div>
          </div>

          {/* Performance Biometrics / Live HR Status Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <h3 className="text-lg font-bold text-[#e4e1ee] mb-4">Biometrics Live</h3>
            
            <div className="flex flex-col gap-4">
              {/* Dynamic Live Heart Rate status */}
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#44e2cd]/10 text-[#44e2cd] flex items-center justify-center animate-pulse">
                    <Heart size={18} className="fill-[#44e2cd]" />
                  </div>
                  <span className="text-xs font-bold text-[#e4e1ee]">Heart Rate</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-[#44e2cd]">{simulatedHeartRate} BPM</span>
                  <p className="text-[9px] text-[#c7c4d8] tracking-widest uppercase mt-0.5 opacity-60">Drifting Live</p>
                </div>
              </div>

              {/* Dynamic Daily Burn counter */}
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c3c0ff]/10 text-[#c3c0ff] flex items-center justify-center">
                    <Flame size={18} className="fill-[#c3c0ff]" />
                  </div>
                  <span className="text-xs font-bold text-[#e4e1ee]">Burn Today</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-[#c3c0ff]">{burnToday} kcal</span>
                  <p className="text-[9px] text-[#c7c4d8] tracking-widest uppercase mt-0.5 opacity-60">Active total</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Add Custom Exercise Modal popup */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="bg-[#1b1b24] border border-white/15 p-6 rounded-3xl w-full max-w-sm shadow-2xl animate-fade-in">
            <h4 className="text-lg font-extrabold text-white mb-4">Add Custom Exercise</h4>
            <form onSubmit={handleCreateExercise} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#c7c4d8] mb-1">Exercise Name</label>
                <input 
                  type="text" 
                  value={newExercise.name} 
                  onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
                  placeholder="e.g. Pull-ups"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-sm focus:ring-1 focus:ring-[#c3c0ff] focus:outline-none focus:border-transparent text-white"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#c7c4d8] mb-1">Category</label>
                  <select 
                    value={newExercise.category}
                    onChange={(e) => setNewExercise({ ...newExercise, category: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-2 text-xs text-white focus:outline-none"
                  >
                    <option className="bg-[#1b1b24]" value="Chest">Chest</option>
                    <option className="bg-[#1b1b24]" value="Legs">Legs</option>
                    <option className="bg-[#1b1b24]" value="Back">Back</option>
                    <option className="bg-[#1b1b24]" value="Arms">Arms</option>
                    <option className="bg-[#1b1b24]" value="Core">Core</option>
                    <option className="bg-[#1b1b24]" value="Full Body">Full Body</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#c7c4d8] mb-1">Type</label>
                  <select 
                    value={newExercise.type}
                    onChange={(e) => setNewExercise({ ...newExercise, type: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-2 text-xs text-white focus:outline-none"
                  >
                    <option className="bg-[#1b1b24]" value="Strength">Strength</option>
                    <option className="bg-[#1b1b24]" value="HIIT">HIIT</option>
                    <option className="bg-[#1b1b24]" value="Yoga">Yoga</option>
                    <option className="bg-[#1b1b24]" value="Cardio">Cardio</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-[#c3c0ff] text-[#1d00a5] font-bold text-xs rounded-xl hover:bg-opacity-90 active:scale-95 transition-all"
                >
                  Create Exercise
                </button>
                <button 
                  type="button"
                  onClick={() => setShowAddModal(false)}
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
