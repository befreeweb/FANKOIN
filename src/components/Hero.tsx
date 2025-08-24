import React from 'react';
import { ChevronDown, Play, Zap, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center space-y-12 fade-in-up">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-8 py-4 border border-pink-500/20">
              <Zap className="h-6 w-6 text-pink-400" />
              <span className="text-pink-300 font-semibold text-lg">Pioneered by BusinessOfCinema.com (Est. 2005)</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight text-shadow">
              Fankoin – Where Fans
              <br />
              <span className="gradient-text">Own The Story</span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Pioneered by the team behind BusinessOfCinema.com (est. 2005) and the first Facebook livestream of Indian cinema (2008).
              </p>
              
              <p className="text-xl text-purple-300 max-w-3xl mx-auto leading-relaxed">
                Built with blockchain visionaries, including collaboration with Taylor Gerring, Co-Founder of Ethereum.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3">
              <span>Get Started</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-purple-400 text-purple-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <Play className="h-6 w-6" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
            <div className="glass-effect rounded-2xl p-8 border border-white/10 hover-lift">
              <div className="text-4xl font-black text-pink-400 mb-3">$2.1T</div>
              <div className="text-slate-300 text-lg">Entertainment Industry</div>
              <div className="text-pink-300 text-sm mt-2">Market Size</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-white/10 hover-lift">
              <div className="text-4xl font-black text-purple-400 mb-3">$1.4T</div>
              <div className="text-slate-300 text-lg">Projected Creator Economy</div>
              <div className="text-purple-300 text-sm mt-2">By 2030</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-white/10 hover-lift">
              <div className="text-4xl font-black text-blue-400 mb-3">200M+</div>
              <div className="text-slate-300 text-lg">Total Creators Worldwide</div>
              <div className="text-blue-300 text-sm mt-2">Global reach</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 pb-8 fade-in-up">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-slate-400 text-sm">Scroll to explore</p>
            <ChevronDown className="h-8 w-8 text-pink-400 animate-bounce cursor-pointer hover:text-pink-300 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};