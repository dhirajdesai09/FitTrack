import React from 'react';
import { LayoutDashboard, Dumbbell, UtensilsCrossed, Calculator, Settings } from 'lucide-react';
import { useFitness } from '../hooks/useFitness';

export default function Sidebar({ activeTab, setActiveTab }) {
  const { user, weeklySchedule } = useFitness();

  // Dynamically calculate completed sessions from schedule
  const completedSessions = weeklySchedule.filter(day => day.completed).length;
  const totalSessionsGoal = 4;
  const completionPercentage = Math.min((completedSessions / totalSessionsGoal) * 100, 100);

  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'train', label: 'Workouts', icon: Dumbbell },
    { id: 'eat', label: 'Nutrition', icon: UtensilsCrossed },
    { id: 'tools', label: 'Calculators & Tools', icon: Calculator },
  ];

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full z-40 bg-[#1b1b24]/40 backdrop-blur-2xl h-screen w-72 rounded-r-3xl border-r border-white/10 shadow-2xl pt-24 pb-8 px-6">
      {/* Profile summary */}
      <div className="flex items-center gap-4 mb-10 px-2">
        <div className="w-12 h-12 rounded-2xl bg-[#c3c0ff]/20 flex items-center justify-center text-[#c3c0ff]">
          <Dumbbell size={24} className="stroke-[2]" />
        </div>
        <div>
          <p className="font-semibold text-sm text-[#e4e1ee]">{user.name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-[#44e2cd] animate-pulse"></span>
            <p className="text-xs text-[#c7c4d8]">{user.type}</p>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                isActive
                  ? 'bg-[#c3c0ff]/20 text-[#c3c0ff] border-r-4 border-[#c3c0ff] font-bold'
                  : 'text-[#c7c4d8] hover:text-[#e4e1ee] hover:bg-white/5'
              }`}
            >
              <Icon size={20} className={isActive ? 'stroke-[2.5]' : 'stroke-[1.5]'} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Dynamic Weekly Goal card */}
      <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-semibold text-[#c3c0ff] tracking-wider uppercase">Weekly Goal</p>
          <span className="text-[10px] bg-[#44e2cd]/10 text-[#44e2cd] px-1.5 py-0.5 rounded-full font-bold">
            {completionPercentage >= 100 ? 'Achieved!' : 'On Track'}
          </span>
        </div>
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[#c3c0ff] h-full shadow-[0_0_8px_rgba(195,192,255,0.6)] transition-all duration-500" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-[#c7c4d8] mt-2">
          {completedSessions} of {totalSessionsGoal} sessions done
        </p>
      </div>
    </aside>
  );
}
