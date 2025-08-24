import React from 'react';
import { Calendar, Award, Users, Zap, Star, TrendingUp } from 'lucide-react';

export const Founder = () => {
  const milestones = [
    {
      year: "2005",
      title: "BusinessOfCinema.com Launch",
      description: "Launched BusinessOfCinema.com – the first Indian entertainment industry portal.",
      icon: <Award className="h-8 w-8" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      year: "2008",
      title: "Facebook Live Pioneer",
      description: "Produced the world's first Facebook Live stream for Indian cinema.",
      icon: <Star className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2008-2012",
      title: "Digital Migration Leader",
      description: "Led the mass migration of Indian actors & studios to Facebook and YouTube.",
      icon: <Users className="h-8 w-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      year: "2015",
      title: "Ethereum Collaboration",
      description: "Collaborated with Taylor Gerring, Ethereum Co-Founder, on blockchain advisory initiatives.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-purple-600 to-blue-500"
    },
    {
      year: "2025",
      title: "Fankoin Launch",
      description: "Launch of Fankoin – the fractionalized NFT & creator economy platform for the entertainment industry.",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl floating-animation delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl floating-animation delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 border border-purple-500/20 mb-8">
            <Calendar className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Founder Spotlight</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 text-shadow">
            Proven Digital Entertainment &
            <span className="block gradient-text">Blockchain Leadership</span>
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Two decades of innovation in digital entertainment, from pioneering social media adoption 
            to collaborating with Ethereum's co-founder on blockchain initiatives
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block rounded-full shadow-lg"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="glass-effect rounded-3xl p-8 border border-white/10 hover-lift relative overflow-hidden">
                    <div className={`bg-gradient-to-r ${milestone.color} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-white shadow-lg`}>
                      {milestone.icon}
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-black text-white mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
                    </div>

                    {/* Timeline connector */}
                    <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-full ${index % 2 === 0 ? '-right-6' : '-left-6'} border-4 border-slate-900 shadow-xl pulse-glow`}>
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

        <div className="mt-20 text-center fade-in-up">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Award className="h-12 w-12" />
              <div className="text-6xl">🏆</div>
            </div>
            <h3 className="text-4xl font-bold mb-6">Timeline of Innovation</h3>
            <p className="text-purple-100 mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
              2005 → 2008 → 2015 → 2025
              <br />
              From pioneering entertainment portals to blockchain collaboration with Ethereum's co-founder, 
              bringing blockchain to global entertainment fans.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-purple-200">Years Experience</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-purple-200">Industry Connections</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">$100M+</div>
                <div className="text-purple-200">Value Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};