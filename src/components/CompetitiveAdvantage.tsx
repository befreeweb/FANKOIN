import React from 'react';
import { Check, X, Star, Trophy, Target } from 'lucide-react';

export const CompetitiveAdvantage = () => {
  const comparison = [
    {
      feature: "Industry Focus",
      fankoin: "Entertainment Ecosystem",
      chiliz: "Sports Teams",
      pumpfun: "Meme Tokens",
      advantage: true
    },
    {
      feature: "Core Utility",
      fankoin: "NFTs, RWA, Governance",
      chiliz: "Voting, Merchandise", 
      pumpfun: "Speculation Only",
      advantage: true
    },
    {
      feature: "Target Audience",
      fankoin: "Movies, Music, OTT",
      chiliz: "Sports Fans",
      pumpfun: "Retail Traders",
      advantage: true
    },
    {
      feature: "Scalability",
      fankoin: "Optimized for Culture",
      chiliz: "Sports-Focused",
      pumpfun: "Viral Only",
      advantage: true
    },
    {
      feature: "Real-World Assets",
      fankoin: "✓ Full Support",
      chiliz: "✗ Limited",
      pumpfun: "✗ None",
      advantage: true
    },
    {
      feature: "Creator Monetization",
      fankoin: "✓ Direct & Multi-Stream",
      chiliz: "✗ Limited Options",
      pumpfun: "✗ Speculation Based",
      advantage: true
    },
    {
      feature: "Long-term Sustainability",
      fankoin: "✓ Utility-Driven",
      chiliz: "~ Moderate",
      pumpfun: "✗ Hype-Dependent",
      advantage: true
    }
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-500/20 mb-8">
            <Trophy className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-300 font-medium">Competitive Analysis</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            Why Fankoin
            <span className="block gradient-text">Leads the Market</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See how Fankoin compares to existing solutions and why we're positioned to dominate the entertainment tokenization space
          </p>
        </div>

        <div className="overflow-x-auto mb-16">
          <div className="min-w-full">
            <div className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="grid grid-cols-4 bg-gradient-to-r from-pink-600 to-purple-600">
                <div className="p-8">
                  <h3 className="text-white font-bold text-xl flex items-center space-x-2">
                    <Target className="h-6 w-6" />
                    <span>Feature</span>
                  </h3>
                </div>
                <div className="p-8 bg-gradient-to-r from-pink-500 to-purple-500 relative">
                  <div className="absolute top-2 right-2">
                    <Star className="h-6 w-6 text-yellow-300" />
                  </div>
                  <h3 className="text-white font-bold text-xl">🚀 Fankoin</h3>
                  <p className="text-pink-100 text-sm mt-1">The Future</p>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-bold text-xl">Chiliz</h3>
                  <p className="text-purple-200 text-sm mt-1">Sports Focus</p>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-bold text-xl">pump.fun</h3>
                  <p className="text-purple-200 text-sm mt-1">Meme Tokens</p>
                </div>
              </div>

              {comparison.map((row, index) => (
                <div key={index} className={`grid grid-cols-4 border-b border-gray-700 hover:bg-gray-750 transition-colors ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}`}>
                  <div className="p-6 flex items-center">
                    <span className="text-gray-300 font-semibold text-lg">{row.feature}</span>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-pink-900/30 to-purple-900/30 border-l-4 border-pink-500 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg">{row.fankoin}</span>
                      {row.advantage && (
                        <Check className="h-6 w-6 text-green-400 ml-2" />
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex items-center">
                    <span className="text-gray-400 text-lg">{row.chiliz}</span>
                  </div>
                  <div className="p-6 flex items-center">
                    <span className="text-gray-400 text-lg">{row.pumpfun}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key differentiators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center hover-lift">
            <div className="gradient-border">
              <div className="gradient-border-inner text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Entertainment First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built specifically for the entertainment industry, not adapted from other use cases
                </p>
              </div>
            </div>
          </div>

          <div className="text-center hover-lift">
            <div className="gradient-border">
              <div className="gradient-border-inner text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Real Utility</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tokens backed by real-world assets and genuine utility, not just speculation
                </p>
              </div>
            </div>
          </div>

          <div className="text-center hover-lift">
            <div className="gradient-border">
              <div className="gradient-border-inner text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Scale</h3>
                <p className="text-gray-300 leading-relaxed">
                  Designed to handle millions of users across movies, music, gaming, and streaming
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center fade-in-up">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-10 shadow-2xl">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Trophy className="h-12 w-12 text-yellow-300" />
              <div className="text-6xl">🏆</div>
            </div>
            <p className="text-white font-bold text-3xl mb-4">
              The Only Platform Built Specifically for Entertainment Tokenization
            </p>
            <p className="text-pink-100 text-xl">
              While others focus on sports or speculation, we're revolutionizing the entire entertainment industry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};