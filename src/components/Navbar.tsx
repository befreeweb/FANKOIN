import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-pink-500/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="h-10 w-10 text-pink-400 pulse-glow" />
              <div className="absolute inset-0 h-10 w-10 bg-pink-400 rounded-full blur-lg opacity-30"></div>
            </div>
            <span className="text-white text-2xl font-bold tracking-wider gradient-text">FANKOIN</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <a href="#problem" className="text-slate-300 hover:text-pink-300 transition-all duration-300 font-medium hover:scale-105">Problem</a>
              <a href="#solution" className="text-slate-300 hover:text-pink-300 transition-all duration-300 font-medium hover:scale-105">Solution</a>
              <a href="#tokenomics" className="text-slate-300 hover:text-pink-300 transition-all duration-300 font-medium hover:scale-105">Tokenomics</a>
              <a href="#roadmap" className="text-slate-300 hover:text-pink-300 transition-all duration-300 font-medium hover:scale-105">Roadmap</a>
              <div className="relative group">
                <button className="text-slate-300 hover:text-pink-300 transition-all duration-300 font-medium flex items-center space-x-1 hover:scale-105">
                  <span>More</span>
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-xl rounded-xl border border-pink-500/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-2">
                    <a href="#whitepaper" className="block px-4 py-3 text-slate-300 hover:bg-pink-500/10 rounded-lg transition-colors">Whitepaper</a>
                    <a href="#team" className="block px-4 py-3 text-slate-300 hover:bg-pink-500/10 rounded-lg transition-colors">Team</a>
                    <a href="#community" className="block px-4 py-3 text-slate-300 hover:bg-pink-500/10 rounded-lg transition-colors">Community</a>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Launch App
            </button>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-pink-400 p-2 rounded-lg hover:bg-pink-500/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-pink-500/20">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a href="#problem" className="block px-4 py-3 text-slate-300 hover:bg-pink-500/10 rounded-lg transition-colors">Problem</a>
            <a href="#solution" className="block px-4 py-3 text-slate-300 hover:bg-pink-500/10 rounded-lg transition-colors">Solution</a>
            <a href="#tokenomics" className="block px-4 py-3 text-slate-300 hover:bg-pink-500/10 rounded-lg transition-colors">Tokenomics</a>
            <a href="#roadmap" className="block px-4 py-3 text-slate-300 hover:bg-pink-500/10 rounded-lg transition-colors">Roadmap</a>
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold mt-4">
              Launch App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};