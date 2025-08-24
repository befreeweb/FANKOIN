import React from 'react';
import { Shield, Cpu, Network, Zap, Database, Lock, Code, Globe } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Quantum Security",
      description: "Military-grade encryption protecting all transactions and user data with quantum-resistant algorithms",
      status: "ACTIVE",
      color: "cyan",
      progress: 95
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "AI-Powered Matching",
      description: "Neural networks connecting fans with creators based on preferences and engagement patterns",
      status: "LEARNING",
      color: "green",
      progress: 87
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "Decentralized Network",
      description: "Distributed infrastructure ensuring 99.99% uptime and censorship resistance",
      status: "ONLINE",
      color: "cyan",
      progress: 99
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Lightning Transactions",
      description: "Sub-second transaction processing with minimal fees using advanced layer-2 solutions",
      status: "OPTIMIZED",
      color: "yellow",
      progress: 92
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Immutable Records",
      description: "Permanent storage of all entertainment assets and transactions on the blockchain",
      status: "SECURED",
      color: "purple",
      progress: 100
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Smart Contracts",
      description: "Automated execution of agreements between creators and fans without intermediaries",
      status: "DEPLOYED",
      color: "green",
      progress: 88
    }
  ];

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'cyan': return 'text-cyan-400';
      case 'green': return 'text-green-400';
      case 'yellow': return 'text-yellow-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-cyan-400';
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'cyan': return 'from-cyan-400 to-cyan-600';
      case 'green': return 'from-green-400 to-green-600';
      case 'yellow': return 'from-yellow-400 to-yellow-600';
      case 'purple': return 'from-purple-400 to-purple-600';
      default: return 'from-cyan-400 to-cyan-600';
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Enhanced cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30 circuit-board"></div>
      
      {/* Floating data elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 slide-up">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 backdrop-blur-sm rounded-full px-6 py-3 neon-border mb-8 hover-glow">
            <Cpu className="h-5 w-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium terminal-text">CORE_FEATURES.SYS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 neon-text glitch">
            SYSTEM
            <span className="block text-cyan-400 gradient-text">ARCHITECTURE</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Advanced blockchain infrastructure designed for the next generation of 
            entertainment experiences and digital asset management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group hover-glow">
              <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border hover:border-cyan-300 transition-all duration-300 h-full relative overflow-hidden circuit-board">
                {/* Enhanced background data stream */}
                <div className="absolute inset-0 data-stream opacity-20"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${getStatusColor(feature.color)} group-hover:scale-110 transition-transform duration-300 energy-pulse`}>
                      {feature.icon}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold terminal-text neon-border ${
                      feature.color === 'green' ? 'bg-green-500/20 text-green-400' :
                      feature.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                      feature.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {feature.status}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors neon-text">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Enhanced progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-400 terminal-text">EFFICIENCY</span>
                      <span className="text-sm font-bold text-cyan-400 terminal-text">{feature.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden neon-border">
                      <div className={`h-full bg-gradient-to-r ${getProgressColor(feature.color)} rounded-full transition-all duration-1000 group-hover:w-full`} 
                      style={{width: `${feature.progress}%`}}></div>
                    </div>
                  </div>

                  {/* Status indicators */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-green-500/20 rounded-lg p-2 text-center neon-border">
                      <div className="text-green-400 font-bold text-xs terminal-text">STABLE</div>
                    </div>
                    <div className="bg-cyan-500/20 rounded-lg p-2 text-center neon-border">
                      <div className="text-cyan-400 font-bold text-xs terminal-text">FAST</div>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-2 text-center neon-border">
                      <div className="text-purple-400 font-bold text-xs terminal-text">SECURE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center slide-up">
          <div className="inline-block bg-black/50 backdrop-blur-xl rounded-3xl p-12 neon-border hover-glow scan-line circuit-board">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Network className="h-12 w-12 text-cyan-400 energy-pulse" />
              <div className="text-6xl">⚡</div>
              <Globe className="h-12 w-12 text-green-400 energy-pulse" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6 neon-text glitch">
              NEXT-GEN ENTERTAINMENT PROTOCOL
            </h3>
            <p className="text-cyan-300 text-xl mb-8 max-w-4xl mx-auto leading-relaxed terminal-text">
              {"> INITIALIZING QUANTUM ENTERTAINMENT MATRIX..."}
              <br />
              {"> CONNECTING NEURAL NETWORKS..."}
              <br />
              {"> PROTOCOL STATUS: READY FOR DEPLOYMENT"}
            </p>
            
            {/* Enhanced system stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-cyan-500/20 rounded-xl p-4 neon-border pulse-cyan">
                <div className="text-2xl font-bold text-cyan-400 terminal-text">99.9%</div>
                <div className="text-gray-400 text-sm">UPTIME</div>
              </div>
              <div className="bg-green-500/20 rounded-xl p-4 neon-border pulse-cyan">
                <div className="text-2xl font-bold text-green-400 terminal-text">1M+</div>
                <div className="text-gray-400 text-sm">NODES</div>
              </div>
              <div className="bg-purple-500/20 rounded-xl p-4 neon-border pulse-pink">
                <div className="text-2xl font-bold text-purple-400 terminal-text">24/7</div>
                <div className="text-gray-400 text-sm">ACTIVE</div>
              </div>
              <div className="bg-pink-500/20 rounded-xl p-4 neon-border pulse-pink">
                <div className="text-2xl font-bold text-pink-400 terminal-text">∞</div>
                <div className="text-gray-400 text-sm">SCALE</div>
              </div>
            </div>

            <button className="cyber-button text-cyan-400 px-10 py-4 rounded-lg font-bold text-xl hover:text-white transition-all duration-300 transform hover:scale-105 energy-pulse">
              ACCESS_MAINFRAME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};