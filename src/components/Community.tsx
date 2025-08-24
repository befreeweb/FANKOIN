import React from 'react';
import { Users, MessageCircle, Zap, ArrowRight, Shield, Globe, Star } from 'lucide-react';

export const Community = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl hologram"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl hologram delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl hologram delay-2000"></div>
        
        {/* Animated data points */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-80 delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-purple-400 rounded-full animate-pulse opacity-50 delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-70 delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 slide-up">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-pink-500/10 backdrop-blur-sm rounded-full px-8 py-4 neon-border">
              <Star className="h-6 w-6 text-pink-400" />
              <span className="text-pink-300 font-semibold text-lg terminal-text">NEURAL_COLLECTIVE.EXE</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white leading-tight">
              Join the Digital
              <br />
              <span className="text-pink-400 neon-text">
                Revolution
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-3xl text-gray-300 font-bold max-w-4xl mx-auto terminal-text">
                FANKOIN = ENTERTAINMENT × BLOCKCHAIN × AI
              </p>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Connect to the neural network that's reshaping how creators and fans interact, 
                engage, and prosper together in the digital entertainment metaverse.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group cyber-button text-pink-400 px-12 py-6 rounded-lg font-bold text-xl hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <Zap className="h-7 w-7 group-hover:text-pink-200 transition-colors" />
              <span>INITIALIZE_CONNECTION</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-purple-400 text-purple-400 px-12 py-6 rounded-lg font-bold text-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <MessageCircle className="h-7 w-7" />
              <span>ACCESS_PROTOCOL</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
            <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 neon-border hover-glow">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-pink-500/20 rounded-full p-4 neon-border">
                  <Users className="h-10 w-10 text-pink-400" />
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-3 terminal-text">10M+</div>
              <div className="text-gray-300 text-lg">Neural Nodes</div>
              <div className="text-pink-400 text-sm mt-2 terminal-text">EXPANDING_DAILY</div>
            </div>
            
            <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 neon-border hover-glow">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-purple-500/20 rounded-full p-4 neon-border">
                  <Shield className="h-10 w-10 text-purple-400" />
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-3 terminal-text">$500M+</div>
              <div className="text-gray-300 text-lg">Value Secured</div>
              <div className="text-purple-400 text-sm mt-2 terminal-text">QUANTUM_PROTECTED</div>
            </div>
            
            <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 neon-border hover-glow">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-purple-500/20 rounded-full p-4 neon-border">
                  <Globe className="h-10 w-10 text-purple-400" />
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-3 terminal-text">24/7</div>
              <div className="text-gray-300 text-lg">Global Access</div>
              <div className="text-purple-400 text-sm mt-2 terminal-text">ALWAYS_ONLINE</div>
            </div>
          </div>

          <div className="pt-12">
            <div className="bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-2xl p-6 inline-block neon-border pulse-pink">
              <p className="text-white font-bold text-lg flex items-center space-x-2 terminal-text">
                <Zap className="h-6 w-6 text-pink-400" />
                <span>🚀 EARLY_ACCESS_PROTOCOL: Exclusive neural link for founding members</span>
              </p>
            </div>
          </div>

          {/* Network status */}
          <div className="pt-16">
            <p className="text-gray-400 text-lg mb-8 terminal-text">TRUSTED_BY_INDUSTRY_LEADERS</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-pink-400 font-bold text-2xl terminal-text">NETFLIX.SYS</div>
              <div className="text-purple-400 font-bold text-2xl terminal-text">SPOTIFY.NET</div>
              <div className="text-purple-400 font-bold text-2xl terminal-text">WARNER.EXE</div>
              <div className="text-pink-300 font-bold text-2xl terminal-text">UNIVERSAL.AI</div>
              <div className="text-pink-400 font-bold text-2xl terminal-text">DISNEY.CORE</div>
            </div>
          </div>

          {/* System status */}
          <div className="pt-12">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border max-w-2xl mx-auto">
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 terminal-text">NETWORK_STATUS:</span>
                  <span className="text-purple-400 font-bold terminal-text">ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 terminal-text">SECURITY_LEVEL:</span>
                  <span className="text-pink-400 font-bold terminal-text">MAXIMUM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 terminal-text">AI_PROCESSING:</span>
                  <span className="text-purple-400 font-bold terminal-text">OPTIMAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 terminal-text">READY_STATE:</span>
                  <span className="text-pink-300 font-bold terminal-text glitch">INITIALIZED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};