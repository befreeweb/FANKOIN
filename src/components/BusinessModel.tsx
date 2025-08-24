import React from 'react';
import { DollarSign, Store, Zap, Users, Building, TrendingUp, PieChart } from 'lucide-react';

export const BusinessModel = () => {
  const revenueStreams = [
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Transaction Fees",
      description: "Small fees on all token transactions, swaps, and transfers across the platform",
      percentage: "25%",
      color: "from-pink-500 to-pink-600",
      revenue: "$12.5M projected"
    },
    {
      icon: <Store className="h-10 w-10" />,
      title: "NFT Marketplace",
      description: "Commission on NFT sales, trading, and secondary market transactions",
      percentage: "20%",
      color: "from-purple-500 to-purple-600",
      revenue: "$10M projected"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Premium Launches",
      description: "Enhanced fan token launch packages with marketing and promotional support",
      percentage: "20%",
      color: "from-pink-600 to-purple-500",
      revenue: "$10M projected"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Revenue Sharing",
      description: "Percentage of creator monetization and fan engagement rewards",
      percentage: "20%",
      color: "from-purple-600 to-pink-500",
      revenue: "$10M projected"
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "RWA Tokenization",
      description: "Fees for tokenizing real-world assets like royalties and IP rights",
      percentage: "15%",
      color: "from-pink-500 to-purple-600",
      revenue: "$7.5M projected"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/20 mb-8">
            <PieChart className="h-5 w-5 text-green-400" />
            <span className="text-green-300 font-medium">Business Model</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            Revenue <span className="gradient-text">Streams</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Multiple diversified revenue streams creating a sustainable and scalable business model 
            built for long-term growth and profitability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 slide-in-left">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stream.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${stream.color} rounded-2xl p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {stream.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                          {stream.title}
                        </h3>
                        <div className="text-right">
                          <span className="text-4xl font-black text-pink-400">{stream.percentage}</span>
                          <p className="text-gray-400 text-sm">of revenue</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {stream.description}
                      </p>
                      <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                        <p className="text-green-300 font-bold">{stream.revenue}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative slide-in-right">
            <div className="bg-gray-800 rounded-3xl p-10 border border-gray-700 shadow-2xl hover-lift">
              <h3 className="text-3xl font-bold text-white mb-10 text-center">Revenue Distribution</h3>
              
              {/* Enhanced Pie Chart Visualization */}
              <div className="relative w-80 h-80 mx-auto mb-10">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Pie segments */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="15"
                    strokeDasharray="25 75"
                    strokeDashoffset="0"
                    className="hover:stroke-width-20 transition-all cursor-pointer"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="15"
                    strokeDasharray="20 80"
                    strokeDashoffset="-25"
                    className="hover:stroke-width-20 transition-all cursor-pointer"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="url(#gradient3)"
                    strokeWidth="15"
                    strokeDasharray="20 80"
                    strokeDashoffset="-45"
                    className="hover:stroke-width-20 transition-all cursor-pointer"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="url(#gradient4)"
                    strokeWidth="15"
                    strokeDasharray="20 80"
                    strokeDashoffset="-65"
                    className="hover:stroke-width-20 transition-all cursor-pointer"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="url(#gradient5)"
                    strokeWidth="15"
                    strokeDasharray="15 85"
                    strokeDashoffset="-85"
                    className="hover:stroke-width-20 transition-all cursor-pointer"
                  />
                  
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#db2777" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#db2777" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#db2777" />
                    </linearGradient>
                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2">$FANK</div>
                    <div className="text-pink-300 text-lg">Revenue</div>
                    <div className="text-green-400 font-bold text-2xl mt-2">$50M+</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-gray-700/50 rounded-xl p-6 hover-lift">
                  <div className="text-gray-300 mb-2">Year 1 Target</div>
                  <div className="text-white font-bold text-3xl">$5M+</div>
                  <div className="text-green-400 text-sm mt-1">Conservative</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-6 hover-lift">
                  <div className="text-gray-300 mb-2">Year 3 Target</div>
                  <div className="text-white font-bold text-3xl">$50M+</div>
                  <div className="text-purple-400 text-sm mt-1">Aggressive</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-6 hover-lift">
                  <div className="text-gray-300 mb-2">Break-even</div>
                  <div className="text-white font-bold text-3xl">Month 8</div>
                  <div className="text-blue-400 text-sm mt-1">Projected</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-6 hover-lift">
                  <div className="text-gray-300 mb-2">Profit Margin</div>
                  <div className="text-white font-bold text-3xl">65%+</div>
                  <div className="text-yellow-400 text-sm mt-1">Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center fade-in-up">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-12 shadow-2xl">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <TrendingUp className="h-12 w-12 text-white" />
              <div className="text-6xl">💰</div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Sustainable & Scalable Revenue Model
            </h3>
            <p className="text-green-100 text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Built for long-term growth with multiple revenue streams that scale with our user base. 
              As the entertainment industry adopts blockchain technology, Fankoin is positioned to capture significant market share.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">$1T+</div>
                <div className="text-green-200">Entertainment Market</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">5%</div>
                <div className="text-green-200">Target Market Share</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">$50B</div>
                <div className="text-green-200">Revenue Potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};