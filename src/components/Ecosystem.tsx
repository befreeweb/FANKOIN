import React from 'react';
import { Network, Users, Palette, Building, Zap, Globe } from 'lucide-react';

export const Ecosystem = () => {
  const participants = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Fans",
      description: "Engage with favorite creators, earn rewards, and access exclusive content",
      benefits: ["Exclusive Access", "Reward Tokens", "Voting Rights", "Community Status"],
      color: "from-pink-400 to-purple-500",
      count: "10M+"
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Creators",
      description: "Monetize content directly, build loyal communities, and launch fan tokens",
      benefits: ["Direct Revenue", "Fan Engagement", "Token Launch", "Analytics"],
      color: "from-purple-400 to-pink-400",
      count: "500K+"
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Studios",
      description: "Scale content distribution, engage audiences, and tokenize IP assets",
      benefits: ["IP Tokenization", "Global Reach", "Fan Analytics", "Revenue Streams"],
      color: "from-pink-300 to-purple-400",
      count: "2.5K+"
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 matrix-rain opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 slide-up">
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 backdrop-blur-sm rounded-full px-6 py-3 neon-border mb-8">
            <Network className="h-5 w-5 text-pink-400" />
            <span className="text-pink-300 font-medium terminal-text">ECOSYSTEM_NETWORK.EXE</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            NEURAL
            <span className="block text-pink-400 neon-text">ECOSYSTEM</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A self-sustaining network where fans, creators, and studios interact 
            through blockchain technology and AI-powered matching algorithms
          </p>
        </div>

        {/* Ecosystem visualization */}
        <div className="relative mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16">
            
            {participants.map((participant, index) => (
              <div key={index} className="flex flex-col items-center group slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-r ${participant.color} rounded-3xl w-32 h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 pulse-cyan`}>
                    <div className="text-white">
                      {participant.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-500 rounded-full px-3 py-1">
                    <span className="text-white font-bold text-sm terminal-text">{participant.count}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                  {participant.title}
                </h3>
                
                <p className="text-gray-300 text-center max-w-xs mb-6 leading-relaxed">
                  {participant.description}
                </p>
                
                <div className="space-y-2">
                  {participant.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="bg-black/50 backdrop-blur-xl rounded-lg px-4 py-2 neon-border">
                      <span className="text-pink-300 font-medium text-sm terminal-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 border-2 border-pink-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-purple-500/30 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Ecosystem stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center hover-glow">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border h-full">
              <div className="text-4xl mb-4">🔗</div>
              <div className="text-3xl font-bold text-pink-400 terminal-text mb-2">1.2B+</div>
              <div className="text-gray-400">CONNECTIONS</div>
            </div>
          </div>
          
          <div className="text-center hover-glow">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border h-full">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-3xl font-bold text-purple-400 terminal-text mb-2">500M+</div>
              <div className="text-gray-400">TRANSACTIONS</div>
            </div>
          </div>
          
          <div className="text-center hover-glow">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border h-full">
              <div className="text-4xl mb-4">💎</div>
              <div className="text-3xl font-bold text-pink-400 terminal-text mb-2">$2.5B+</div>
              <div className="text-gray-400">VALUE_LOCKED</div>
            </div>
          </div>
          
          <div className="text-center hover-glow">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border h-full">
              <div className="text-4xl mb-4">🌍</div>
              <div className="text-3xl font-bold text-purple-300 terminal-text mb-2">150+</div>
              <div className="text-gray-400">COUNTRIES</div>
            </div>
          </div>
        </div>

        {/* Network effects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="slide-left">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border hover-glow">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Zap className="h-8 w-8 text-yellow-400" />
                <span>Network Effects</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">More fans = Higher creator value</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">More creators = Better fan experience</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
                  <span className="text-gray-300">More studios = Larger ecosystem</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
                  <span className="text-gray-300">Larger ecosystem = Higher token value</span>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-right">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border hover-glow">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Globe className="h-8 w-8 text-pink-400" />
                <span>Global Reach</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">North America</span>
                  <span className="text-pink-400 terminal-text">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Europe</span>
                  <span className="text-purple-400 terminal-text">28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Asia Pacific</span>
                  <span className="text-pink-300 terminal-text">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Other Regions</span>
                  <span className="text-purple-300 terminal-text">12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center slide-up">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl p-12 neon-border">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Network className="h-12 w-12 text-pink-400" />
              <div className="text-6xl">🌐</div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6 neon-text">
              ECOSYSTEM STATUS: EXPANDING
            </h3>
            <p className="text-pink-300 text-xl mb-8 max-w-4xl mx-auto leading-relaxed terminal-text">
              {"> NEURAL_NETWORK_SYNCHRONIZED"}
              <br />
              {"> PARTICIPANT_MATCHING_OPTIMIZED"}
              <br />
              {"> READY_FOR_GLOBAL_DEPLOYMENT"}
            </p>
            <button className="cyber-button text-pink-400 px-10 py-4 rounded-lg font-bold text-xl hover:text-white transition-all duration-300 transform hover:scale-105">
              JOIN_ECOSYSTEM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};