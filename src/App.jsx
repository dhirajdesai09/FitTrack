import React, { useState } from 'react';
import { FitnessProvider } from './context/FitnessContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import DashboardTab from './components/DashboardTab';
import TrainTab from './components/TrainTab';
import EatTab from './components/EatTab';
import ToolsTab from './components/ToolsTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // home, train, eat, tools

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <DashboardTab setActiveTab={setActiveTab} />;
      case 'train':
        return <TrainTab />;
      case 'eat':
        return <EatTab />;
      case 'tools':
        return <ToolsTab />;
      default:
        return <DashboardTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <FitnessProvider>
      <div className="bg-[#13121b] text-[#e4e1ee] min-h-screen pb-32 lg:pb-0 lg:pl-72 flex flex-col font-sans">
        
        {/* Top Header navbar */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Sidebar navigation drawer (Desktop only) */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="pt-28 px-4 md:px-10 pb-20 max-w-7xl mx-auto w-full flex-grow">
          {renderActiveTab()}
        </main>

        {/* Footer Area */}
        <footer className="w-full flex flex-col md:flex-row justify-between items-center px-10 py-8 bg-[#0e0d16] border-t border-white/5 text-xs text-[#c7c4d8]/60 mt-auto">
          <p className="mb-4 md:mb-0">© 2026 FitTrack Premium. Elevate your performance.</p>
          <div className="flex gap-6">
            <a className="hover:text-[#c3c0ff] transition-colors cursor-pointer">Privacy Policy</a>
            <a className="hover:text-[#c3c0ff] transition-colors cursor-pointer">Terms of Service</a>
            <a className="hover:text-[#c3c0ff] transition-colors cursor-pointer">Support</a>
          </div>
        </footer>

        {/* Bottom Floating Navigation (Mobile/Tablet only) */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </FitnessProvider>
  );
}
