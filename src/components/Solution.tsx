import React from 'react';
import { Rocket, Shield, Vote, Coins, Network, CheckCircle, Sparkles } from 'lucide-react';

export const Solution = () => {
  const features = [
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Fan Token Launchpad",
      description: "1-click token creation for creators with zero technical knowledge required. Launch in minutes, not months.",
      benefit: "95% faster deployment"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "NFT & RWA Infrastructure",
      description: "Tokenize tickets, royalties, and IP rights with enterprise-grade security and regulatory compliance.",
      benefit: "Bank-level security"
    },
    {
      icon: <Vote className="h-10 w-10" />,
      title: "Governance & Fan Voting",
      description: "True fan participation in creative decisions, project direction, and community governance.",
      benefit: "100% transparent voting"
    },
    {
      icon: <Coins className="h-10 w-10" />,
      title: "Direct Creator Monetization",
      description: "Cut out middlemen and maximize creator revenue streams through multiple tokenized channels.",
      benefit: "70% more revenue"
    },
    {
      icon: <Network className="h-10 w-10" />,
      title: "Entertainment-Optimized Chain",
      description: "Blockchain built specifically for entertainment industry needs with ultra-low fees and high throughput.",
      benefit: "99.9% uptime guaranteed"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/20 mb-8">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-green-300 font-medium">The Solution</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            The Fankoin
            <span className="block gradient-text">Revolution</span>
          </h2>
          
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            A comprehensive blockchain ecosystem designed specifically for entertainment, 
            connecting fans, creators, and studios like never before
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="space-y-8 slide-in-left">
            {features.map((feature, index) => (
              <div key={index} className="group hover-lift">
                <div className="flex items-start space-x-6 glass-effect rounded-2xl p-8 border border-white/20 hover:border-pink-300/50 transition-all duration-300">
                  <div className="text-pink-300 mt-2 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-purple-100 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2 border border-green-400/30">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-green-300 font-semibold text-sm">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative slide-in-right">
            <div className="glass-effect rounded-3xl p-10 border border-white/20 hover-lift">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-6">Fankoin Ecosystem Hub</h3>
                <p className="text-purple-200">Connecting the entertainment universe</p>
              </div>
              
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
                <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-40 h-40 mx-auto flex items-center justify-center shadow-2xl pulse-glow">
                  <Coins className="h-20 w-20 text-white" />
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="bg-white/20 rounded-full p-3 floating-animation">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                  <div className="bg-white/20 rounded-full p-3 floating-animation delay-1000">
                    <Network className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className="text-4xl mb-3">👥</div>
                  <p className="text-white font-bold text-lg">Fans</p>
                  <p className="text-purple-200 text-sm mt-2">Engage & Earn</p>
                </div>
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className="text-4xl mb-3">🎭</div>
                  <p className="text-white font-bold text-lg">Creators</p>
                  <p className="text-purple-200 text-sm mt-2">Monetize & Connect</p>
                </div>
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className="text-4xl mb-3">🎬</div>
                  <p className="text-white font-bold text-lg">Studios</p>
                  <p className="text-purple-200 text-sm mt-2">Scale & Innovate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center fade-in-up">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Entertainment?</h3>
            <p className="text-pink-100 mb-8 text-lg">Join thousands of creators and millions of fans already building the future</p>
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore the Ecosystem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};