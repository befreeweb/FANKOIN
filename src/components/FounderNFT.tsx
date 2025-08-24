import React from 'react';
import { Crown, Shield, Users, Star, Zap, DollarSign } from 'lucide-react';

export const FounderNFT = () => {
  const perks = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Lifetime Zero Fees",
      description: "No transaction or listing fees, ever",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Premium Governance Access",
      description: "Exclusive voting & input on platform direction",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Early Creator Access",
      description: "Priority entry to first 50 creator launches",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "VIP Perks",
      description: "Special event invites & direct creator calls",
      color: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl floating-animation delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl floating-animation delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-500/20 mb-8">
            <Crown className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-300 font-medium">Founder NFT Pre-Sale</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            Raising $5M via
            <span className="block gradient-text">5,000 Founder NFTs</span>
          </h2>
          
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Join the founding community with exclusive access, governance rights, and lifetime benefits
          </p>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 inline-block shadow-2xl mb-12">
            <div className="flex items-center justify-center space-x-8 mb-4">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-white mx-auto mb-2" />
                <div className="text-4xl font-black text-white">$5M</div>
                <div className="text-lg text-white">Target Raise</div>
              </div>
              <div className="text-6xl text-white">×</div>
              <div className="text-center">
                <div className="text-6xl mb-2">💎</div>
                <div className="text-4xl font-black text-white">5,000</div>
                <div className="text-lg text-white">Founder NFTs</div>
              </div>
              <div className="text-6xl text-white">=</div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-white mx-auto mb-2" />
                <div className="text-4xl font-black text-white">$1,000</div>
                <div className="text-lg text-white">Each NFT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Perks of Founder NFTs:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="group hover-lift">
                <div className="glass-effect rounded-3xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${perk.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-r ${perk.color} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {perk.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                      {perk.title}
                    </h3>
                    <p className="text-purple-200 leading-relaxed text-lg">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center fade-in-up">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-12 shadow-2xl">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Crown className="h-12 w-12 text-white" />
              <div className="text-6xl">👑</div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Become a Founding Member
            </h3>
            <p className="text-orange-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Limited to 5,000 exclusive Founder NFTs. Secure your position in the future of 
              entertainment ownership and governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-white text-orange-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Mint Founder NFT
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">Limited</div>
                <div className="text-orange-200">5,000 NFTs Only</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">$1,000</div>
                <div className="text-orange-200">Per Founder NFT</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">Lifetime</div>
                <div className="text-orange-200">Zero Fees</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};