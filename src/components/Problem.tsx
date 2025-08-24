import React from 'react';
import { AlertTriangle, DollarSign, Zap, TrendingDown, Lock, ArrowDown, Target } from 'lucide-react';

export const Problem = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-red-500/20 mb-8">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <span className="text-red-300 font-medium">Problem & Opportunity</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            The Problem &
            <span className="block gradient-text">Opportunity</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* The Problem */}
          <div className="space-y-8">
            <div className="bg-red-500/10 rounded-3xl p-10 border border-red-500/20 hover-lift">
              <div className="flex items-center space-x-4 mb-8">
                <AlertTriangle className="h-12 w-12 text-red-400" />
                <h3 className="text-4xl font-bold text-white">The Problem</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/5 rounded-2xl p-6 border border-red-500/10">
                  <p className="text-2xl text-red-100 leading-relaxed">
                    Fans are passionate, but current platforms limit them to being passive consumers.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-4 bg-gray-800/50 rounded-xl p-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">No ownership in favorite content</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-800/50 rounded-xl p-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Limited engagement opportunities</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-800/50 rounded-xl p-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">No financial upside from support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Opportunity */}
          <div className="space-y-8">
            <div className="bg-green-500/10 rounded-3xl p-10 border border-green-500/20 hover-lift">
              <div className="flex items-center space-x-4 mb-8">
                <Target className="h-12 w-12 text-green-400" />
                <h3 className="text-4xl font-bold text-white">The Opportunity</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/5 rounded-2xl p-6 border border-green-500/10">
                  <p className="text-2xl text-green-100 leading-relaxed">
                    Fankoin unlocks active fan participation, ownership, and financial upside, 
                    turning global fanbases into engaged micro-investors.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-4 bg-gray-800/50 rounded-xl p-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Own fractions of entertainment assets</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-800/50 rounded-xl p-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Participate in creative decisions</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-800/50 rounded-xl p-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Earn from entertainment success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center fade-in-up">
          <div className="inline-block bg-gradient-to-r from-red-500 to-green-500 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-6xl">😴</div>
              <ArrowRight className="h-8 w-8 text-white animate-pulse" />
              <div className="text-6xl">🚀</div>
            </div>
            <p className="text-white font-bold text-2xl mb-2">
              Passive Fans → Active Micro-Investors
            </p>
            <p className="text-orange-100 text-lg">
              Transforming passionate fanbases into engaged stakeholders with real ownership
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};