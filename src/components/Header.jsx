import React from 'react';
import { Menu, Dumbbell } from 'lucide-react';
import { useFitness } from '../hooks/useFitness';

export default function Header({ activeTab, setActiveTab }) {
  const { user } = useFitness();

  const links = [
    { id: 'home', label: 'Dashboard' },
    { id: 'train', label: 'Workouts' },
    { id: 'eat', label: 'Nutrition' },
    { id: 'tools', label: 'Calculators' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 h-20 bg-white/5 dark:bg-black/10 backdrop-blur-3xl border-b border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/5 transition-colors rounded-full lg:hidden active:scale-95 text-[#c3c0ff]">
          <Menu size={24} />
        </button>
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="p-1 rounded-lg bg-gradient-to-br from-[#c3c0ff] to-[#44e2cd] text-[#0f0069] hidden xs:block">
            <Dumbbell size={20} className="stroke-[2.5]" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#c3c0ff] to-[#44e2cd]">
            FitTrack
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Horizontal Navigation Links - Tablet/Desktop */}
        <nav className="hidden md:flex gap-2 items-center">
          {links.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-[#c3c0ff] bg-white/5 shadow-inner'
                    : 'text-[#c7c4d8] hover:text-[#e4e1ee] hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* User Profile Avatar with Online Status Indicator */}
        <div className="relative w-10 h-10 rounded-full bg-[#2a2933] border border-white/20 overflow-hidden shadow-lg cursor-pointer hover:border-[#c3c0ff] transition-all">
          <img 
            className="w-full h-full object-cover" 
            alt="User avatar" 
            src={user.avatar} 
          />
        </div>
      </div>
    </header>
  );
}
