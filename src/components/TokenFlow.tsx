import React from 'react';
import { ArrowRight, Coins, Users, Palette, Building, Zap, TrendingUp, DollarSign } from 'lucide-react';

export const TokenFlow = () => {
  const revenueStreams = [
    {
      title: "Fankoin Token (FKN)",
      description: "Fuels platform transactions",
      icon: <Coins className="h-8 w-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Fractionalized NFT Marketplace",
      description: "Transaction fees from marketplace",
      icon: <Palette className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Creator Asset Sales",
      description: "Sales and resale royalties",
      icon: <Users className="h-8 w-8" />,
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "Premium Fan Memberships",
      description: "Recurring membership tiers",
      icon: <Building className="h-8 w-8" />,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Advertising & Sponsorship",
      description: "Entertainment brand partnerships",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-pink-300 to-purple-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/20 mb-8">
            <DollarSign className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Tokenomics & Revenue</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            Multiple Revenue
            <span className="gradient-text">Streams</span>
          </h2>
          
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Diversified revenue model powering the Fankoin ecosystem and creating sustainable value for all participants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="group hover-lift">
              <div className="glass-effect rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stream.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`bg-gradient-to-r ${stream.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stream.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {stream.title}
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    {stream.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow visualization */}
        <div className="relative mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-8">
            
            {/* $FANK Token */}
            <div className="flex flex-col items-center group">
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl w-32 h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 pulse-glow">
                  <Coins className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mt-6 mb-3">$FANK Token</h3>
              <p className="text-purple-200 text-center max-w-40 leading-relaxed">Platform utility token</p>
              <div className="mt-4 bg-purple-500/20 rounded-lg px-4 py-2 border border-purple-400/30">
                <span className="text-purple-300 font-semibold text-sm">Core Utility</span>
              </div>
            </div>

            <ArrowRight className="h-12 w-12 text-pink-400 transform lg:rotate-0 rotate-90 animate-pulse" />

            {/* Revenue Streams */}
            <div className="flex flex-col items-center group">
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/30 rounded-xl p-3 flex items-center justify-center hover-lift">
                      <Palette className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-white/30 rounded-xl p-3 flex items-center justify-center hover-lift">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-white/30 rounded-xl p-3 flex items-center justify-center hover-lift">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-white/30 rounded-xl p-3 flex items-center justify-center hover-lift">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mt-6 mb-3">Revenue Streams</h3>
              <p className="text-purple-200 text-center max-w-40 leading-relaxed">Multiple income sources</p>
              <div className="mt-4 bg-pink-500/20 rounded-lg px-4 py-2 border border-pink-400/30">
                <span className="text-pink-300 font-semibold text-sm">Diversified Income</span>
              </div>
            </div>

            <ArrowRight className="h-12 w-12 text-pink-400 transform lg:rotate-0 rotate-90 animate-pulse" />

            {/* Ecosystem Growth */}
            <div className="flex flex-col items-center group">
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl w-32 h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white font-bold text-4xl">🚀</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mt-6 mb-3">Ecosystem Growth</h3>
              <p className="text-purple-200 text-center max-w-40 leading-relaxed">Sustainable expansion</p>
              <div className="mt-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg px-4 py-2 border border-purple-400/30">
                <span className="text-purple-300 font-semibold text-sm">Value Creation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-center shadow-2xl fade-in-up">
          <h3 className="text-3xl font-bold text-white mb-8">Revenue Model Performance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-white mb-2">$50M+</div>
              <div className="text-pink-100">Projected Volume</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">500K+</div>
              <div className="text-pink-100">Target Users</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">1,200+</div>
              <div className="text-pink-100">Creator Assets</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">5+</div>
              <div className="text-pink-100">Revenue Streams</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};