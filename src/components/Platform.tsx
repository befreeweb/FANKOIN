import React from 'react';
import { Monitor, Gamepad2, Music, Film, Tv, Smartphone } from 'lucide-react';

export const Platform = () => {
  const platforms = [
    {
      icon: <Film className="h-16 w-16" />,
      title: "Cinema Protocol",
      description: "Tokenize movie experiences, exclusive premieres, and behind-the-scenes content",
      users: "2.5M",
      growth: "+127%",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Music className="h-16 w-16" />,
      title: "Audio Matrix",
      description: "Music streaming, concert tickets, and artist collaboration tokens",
      users: "4.2M",
      growth: "+89%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Gamepad2 className="h-16 w-16" />,
      title: "Gaming Network",
      description: "In-game assets, tournament rewards, and player achievement tokens",
      users: "8.7M",
      growth: "+203%",
      color: "from-pink-400 to-purple-400"
    },
    {
      icon: <Tv className="h-16 w-16" />,
      title: "Streaming Hub",
      description: "OTT platform integration, exclusive content access, and viewer rewards",
      users: "6.1M",
      growth: "+156%",
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section id="platform" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 matrix-rain"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 slide-up">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 neon-border mb-8">
            <Monitor className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium terminal-text">PLATFORM_MODULES.EXE</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            ENTERTAINMENT
            <span className="block text-purple-400 neon-text">ECOSYSTEM</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Multi-dimensional platform supporting all forms of digital entertainment 
            with seamless blockchain integration and neural network optimization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="space-y-8 slide-left">
            {platforms.map((platform, index) => (
              <div key={index} className="group hover-glow">
                <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border hover:border-pink-300 transition-all duration-300 relative overflow-hidden">
                  {/* Holographic effect */}
                  <div className="absolute inset-0 hologram opacity-20"></div>
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${platform.color} rounded-2xl p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {platform.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                          {platform.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-purple-400 font-bold text-lg terminal-text">{platform.users}</div>
                          <div className="text-gray-400 text-sm">ACTIVE_USERS</div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {platform.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="bg-purple-500/10 rounded-lg px-4 py-2 neon-border">
                          <span className="text-purple-300 font-bold terminal-text">{platform.growth}</span>
                          <span className="text-gray-400 text-sm ml-2">GROWTH</span>
                        </div>
                        <div className="h-2 flex-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${platform.color} rounded-full`} style={{width: '75%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative slide-right">
            <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-10 neon-border hover-glow scan-line">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-6">Neural Command Center</h3>
                <p className="text-gray-300">Real-time platform monitoring and control</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-pink-300">System Load:</span>
                    <span className="text-purple-400 terminal-text">67%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-pink-300">Network Traffic:</span>
                    <span className="text-purple-400 terminal-text">1.2 PB/s</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" style={{width: '84%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-pink-300">AI Processing:</span>
                    <span className="text-purple-400 terminal-text">OPTIMAL</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-purple-500/10 rounded-xl p-4 text-center neon-border">
                  <div className="text-2xl font-bold text-purple-400 terminal-text">99.99%</div>
                  <div className="text-gray-400 text-sm">UPTIME</div>
                </div>
                <div className="bg-pink-500/10 rounded-xl p-4 text-center neon-border">
                  <div className="text-2xl font-bold text-pink-400 terminal-text">847</div>
                  <div className="text-gray-400 text-sm">PROTOCOLS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center slide-up">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 neon-border">
            <h3 className="text-3xl font-bold text-white mb-4 neon-text">PLATFORM INTEGRATION STATUS</h3>
            <p className="text-purple-300 mb-8 text-lg terminal-text">
              {"> ALL_SYSTEMS_OPERATIONAL"}
              <br />
              {"> NEURAL_NETWORKS_SYNCHRONIZED"}
              <br />
              {"> READY_FOR_MASS_DEPLOYMENT"}
            </p>
            <button className="cyber-button text-purple-400 px-10 py-4 rounded-lg font-bold text-xl hover:text-white transition-all duration-300 transform hover:scale-105">
              DEPLOY_PROTOCOL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};