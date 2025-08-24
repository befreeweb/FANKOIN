import React from 'react';
import { Calendar, Rocket, Cpu, Globe, Star } from 'lucide-react';

export const Timeline = () => {
  const phases = [
    {
      year: "2024",
      quarter: "Q4",
      title: "Protocol Genesis",
      icon: <Rocket className="h-8 w-8" />,
      status: "ACTIVE",
      items: [
        "Blockchain mainnet deployment",
        "$FANK token generation event",
        "Core platform infrastructure",
        "Initial creator partnerships",
        "Security audit completion"
      ],
      color: "from-pink-400 to-purple-500",
      progress: 85
    },
    {
      year: "2025",
      quarter: "Q1",
      title: "Neural Network",
      icon: <Cpu className="h-8 w-8" />,
      status: "NEXT",
      items: [
        "AI matching algorithm launch",
        "Advanced analytics dashboard",
        "Mobile application release",
        "Creator monetization tools",
        "Community governance system"
      ],
      color: "from-purple-400 to-pink-500",
      progress: 0
    },
    {
      year: "2025",
      quarter: "Q2-Q3",
      title: "Global Expansion",
      icon: <Globe className="h-8 w-8" />,
      status: "PLANNED",
      items: [
        "Multi-chain integration",
        "International market entry",
        "Enterprise partnerships",
        "Regulatory compliance",
        "Scaling infrastructure"
      ],
      color: "from-pink-300 to-purple-400",
      progress: 0
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 slide-up">
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 backdrop-blur-sm rounded-full px-6 py-3 neon-border mb-8">
            <Calendar className="h-5 w-5 text-pink-400" />
            <span className="text-pink-300 font-medium terminal-text">DEPLOYMENT_TIMELINE.SYS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            MISSION
            <span className="block text-pink-400 neon-text">TIMELINE</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Strategic deployment phases for global entertainment protocol implementation 
            with measurable milestones and quantum-secured checkpoints
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-pink-300 hidden lg:block rounded-full shadow-lg"></div>

          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} slide-up`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-10 neon-border hover-glow relative overflow-hidden">
                    {/* Status indicator */}
                    <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-bold terminal-text ${
                      phase.status === 'ACTIVE' ? 'bg-purple-500/20 text-purple-400 neon-border' :
                      phase.status === 'NEXT' ? 'bg-pink-500/20 text-pink-400 neon-border' :
                      'bg-purple-500/20 text-purple-400 neon-border'
                    }`}>
                      {phase.status}
                    </div>

                    <div className={`bg-gradient-to-r ${phase.color} rounded-2xl w-20 h-20 flex items-center justify-center mb-8 text-white shadow-lg`}>
                      {phase.icon}
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-4xl font-black text-white terminal-text">{phase.year}</div>
                        <div className="bg-white/10 rounded-lg px-3 py-1 neon-border">
                          <span className="text-gray-300 font-semibold text-sm terminal-text">{phase.quarter}</span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 neon-text">{phase.title}</h3>
                      
                      {/* Progress bar */}
                      {phase.progress > 0 && (
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-300 terminal-text">PROGRESS</span>
                            <span className="text-sm font-bold text-pink-400 terminal-text">{phase.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-3 neon-border">
                            <div 
                              className={`bg-gradient-to-r ${phase.color} h-3 rounded-full transition-all duration-1000`}
                              style={{width: `${phase.progress}%`}}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-4 group">
                          <div className={`mt-1 ${phase.status === 'ACTIVE' && itemIndex < 4 ? 'text-purple-400' : 'text-pink-400'}`}>
                            {phase.status === 'ACTIVE' && itemIndex < 4 ?
                              <Star className="h-5 w-5" /> :
                              <div className="w-2 h-2 bg-current rounded-full mt-2"></div>}
                          </div>
                          <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Timeline connector node */}
                    <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r ${phase.color} rounded-full ${index % 2 === 0 ? '-right-6' : '-left-6'} border-4 border-black shadow-xl pulse-pink`}>
                      <div className="w-full h-full rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block w-2/12"></div>
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center slide-up">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl p-12 neon-border">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Rocket className="h-12 w-12 text-pink-400" />
              <div className="text-6xl">🚀</div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6 neon-text">MISSION CONTROL READY</h3>
            <p className="text-pink-300 mb-8 text-xl max-w-3xl mx-auto leading-relaxed terminal-text">
              {"> DEPLOYMENT_SEQUENCE_INITIALIZED"}
              <br />
              {"> ALL_SYSTEMS_GO_FOR_LAUNCH"}
              <br />
              {"> AWAITING_FINAL_AUTHORIZATION"}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-pink-400 px-10 py-4 rounded-lg font-bold text-xl hover:text-white transition-all duration-300 transform hover:scale-105">
                AUTHORIZE_LAUNCH
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-lg font-bold text-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                VIEW_DETAILED_SPECS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};