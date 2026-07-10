import React from 'react';
import { Home, Dumbbell, Utensils, Calculator } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'train', label: 'Train', icon: Dumbbell },
    { id: 'eat', label: 'Eat', icon: Utensils },
    { id: 'tools', label: 'Tools', icon: Calculator },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#13121b]/60 backdrop-blur-2xl border-t border-white/15 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] rounded-t-3xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 ${
              isActive 
                ? 'text-[#44e2cd] scale-110' 
                : 'text-[#c7c4d8] opacity-60 hover:opacity-100'
            }`}
          >
            <Icon size={22} className={isActive ? 'stroke-[2.5]' : 'stroke-[1.5]'} />
            <span className="text-[10px] font-medium mt-1 uppercase tracking-wider">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
