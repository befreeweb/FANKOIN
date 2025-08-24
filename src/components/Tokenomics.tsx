import React from 'react';
import { Coins, TrendingUp, Lock, Users, Zap, PieChart } from 'lucide-react';

export const Tokenomics = () => {
  const tokenDistribution = [
    { label: "Public Sale", percentage: 30, color: "from-pink-400 to-purple-500", amount: "300M" },
    { label: "Ecosystem Fund", percentage: 25, color: "from-purple-400 to-pink-500", amount: "250M" },
    { label: "Team & Advisors", percentage: 20, color: "from-purple-400 to-pink-500", amount: "200M" },
    { label: "Liquidity Pool", percentage: 15, color: "from-pink-300 to-purple-400", amount: "150M" },
    { label: "Marketing", percentage: 10, color: "from-purple-300 to-pink-400", amount: "100M" }
  ];

  return (
    <section id="tokenomics" className="py-24 bg-black relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 slide-up">
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 backdrop-blur-sm rounded-full px-6 py-3 neon-border mb-8">
            <Coins className="h-5 w-5 text-pink-400" />
            <span className="text-pink-300 font-medium terminal-text">TOKEN_ECONOMICS.SYS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            $FANK
            <span className="block text-pink-400 neon-text">PROTOCOL</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Advanced tokenomics designed for sustainable growth, fair distribution, 
            and long-term value creation in the entertainment ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="slide-left">
            <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-10 neon-border hover-glow">
              <h3 className="text-3xl font-bold text-white mb-10 text-center neon-text">Token Distribution</h3>
              
              {/* Token distribution chart */}
              <div className="space-y-6 mb-10">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-semibold">{item.label}</span>
                      <div className="text-right">
                        <span className="text-white font-bold text-lg">{item.percentage}%</span>
                        <span className="text-gray-400 text-sm ml-2">({item.amount})</span>
                      </div>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 group-hover:brightness-125`}
                        style={{width: `${item.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-gray-900/50 rounded-xl p-6 neon-border">
                  <div className="text-3xl font-bold text-pink-400 terminal-text mb-2">1B</div>
                  <div className="text-gray-400">TOTAL_SUPPLY</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-6 neon-border">
                  <div className="text-3xl font-bold text-purple-400 terminal-text mb-2">FIXED</div>
                  <div className="text-gray-400">NO_INFLATION</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 slide-right">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border hover-glow">
              <div className="flex items-center space-x-4 mb-6">
                <TrendingUp className="h-10 w-10 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Value Accrual</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Token value increases through platform usage, staking rewards, and ecosystem growth
              </p>
              <div className="bg-purple-500/10 rounded-lg p-4 neon-border">
                <span className="text-purple-300 font-bold terminal-text">DEFLATIONARY MECHANISM ACTIVE</span>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border hover-glow">
              <div className="flex items-center space-x-4 mb-6">
                <Lock className="h-10 w-10 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Vesting Schedule</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Team tokens locked for 12 months with 24-month linear vesting to ensure alignment
              </p>
              <div className="bg-purple-500/10 rounded-lg p-4 neon-border">
                <span className="text-purple-300 font-bold terminal-text">SMART_CONTRACT_ENFORCED</span>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border hover-glow">
              <div className="flex items-center space-x-4 mb-6">
                <Users className="h-10 w-10 text-pink-400" />
                <h3 className="text-2xl font-bold text-white">Governance Rights</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Token holders vote on protocol upgrades, fee structures, and ecosystem development
              </p>
              <div className="bg-pink-500/10 rounded-lg p-4 neon-border">
                <span className="text-pink-300 font-bold terminal-text">DAO_GOVERNANCE_ENABLED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Token utility section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center hover-glow">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border h-full">
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-white text-xl mb-4">Platform Fees</h4>
              <p className="text-gray-300 leading-relaxed">
                Pay for transactions, token launches, and premium features using $FANK tokens
              </p>
            </div>
          </div>

          <div className="text-center hover-glow">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border h-full">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-white text-xl mb-4">Staking Rewards</h4>
              <p className="text-gray-300 leading-relaxed">
                Stake tokens to earn rewards and participate in network security and governance
              </p>
            </div>
          </div>

          <div className="text-center hover-glow">
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 neon-border h-full">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-white text-xl mb-4">Access Rights</h4>
              <p className="text-gray-300 leading-relaxed">
                Hold tokens to access exclusive content, early releases, and premium features
              </p>
            </div>
          </div>
        </div>

        <div className="text-center slide-up">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl p-12 neon-border">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <PieChart className="h-12 w-12 text-pink-400" />
              <div className="text-6xl">💎</div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6 neon-text">
              TOKENOMICS STATUS: OPTIMIZED
            </h3>
            <p className="text-pink-300 text-xl mb-8 max-w-4xl mx-auto leading-relaxed terminal-text">
              {"> ECONOMIC_MODEL_VALIDATED"}
              <br />
              {"> DISTRIBUTION_ALGORITHM_ACTIVE"}
              <br />
              {"> READY_FOR_TOKEN_GENERATION_EVENT"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-black/30 rounded-2xl p-6 neon-border">
                <div className="text-3xl font-bold text-white mb-2 terminal-text">$0.10</div>
                <div className="text-pink-300">LAUNCH_PRICE</div>
              </div>
              <div className="bg-black/30 rounded-2xl p-6 neon-border">
                <div className="text-3xl font-bold text-white mb-2 terminal-text">$100M</div>
                <div className="text-pink-300">MARKET_CAP</div>
              </div>
              <div className="bg-black/30 rounded-2xl p-6 neon-border">
                <div className="text-3xl font-bold text-white mb-2 terminal-text">Q1 2025</div>
                <div className="text-pink-300">TGE_DATE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};