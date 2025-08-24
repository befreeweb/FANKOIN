import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Fankoin – Where Fans Own the Story",
      subtitle: "Pioneered by BusinessOfCinema.com (Est. 2005)",
      content: (
        <div className="space-y-8">
          <div className="bg-purple-500/10 rounded-2xl p-8 border border-purple-400/30">
            <p className="text-2xl text-purple-100 leading-relaxed mb-4">
              Pioneered by the team behind <strong>BusinessOfCinema.com</strong> (est. 2005) and the first Facebook livestream of Indian cinema (2008).
            </p>
            <p className="text-xl text-pink-300 leading-relaxed">
              Built with blockchain visionaries, including collaboration with <strong>Taylor Gerring, Co-Founder of Ethereum</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-black text-pink-400 mb-3">2005</div>
              <div className="text-slate-300">BusinessOfCinema.com</div>
              <div className="text-pink-300 text-sm mt-2">Industry Pioneer</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-black text-purple-400 mb-3">2008</div>
              <div className="text-slate-300">Facebook Live Pioneer</div>
              <div className="text-purple-300 text-sm mt-2">Indian Cinema</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-black text-blue-400 mb-3">2015</div>
              <div className="text-slate-300">Ethereum Collaboration</div>
              <div className="text-blue-300 text-sm mt-2">Taylor Gerring</div>
            </div>
          </div>
        </div>
      ),
      background: "from-slate-900 via-purple-900 to-slate-900"
    },
    {
      id: 2,
      title: "Proven Digital Entertainment & Blockchain Leadership",
      subtitle: "Founder Spotlight",
      content: (
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            { year: "2005", milestone: "Launched BusinessOfCinema.com – the first Indian entertainment industry portal." },
            { year: "2008", milestone: "Produced the world's first Facebook Live stream for Indian cinema." },
            { year: "2008–2012", milestone: "Led the mass migration of Indian actors & studios to Facebook and YouTube." },
            { year: "2015", milestone: "Collaborated with Taylor Gerring, Ethereum Co-Founder, on blockchain advisory initiatives." },
            { year: "2025", milestone: "Launch of Fankoin – the fractionalized NFT & creator economy platform for the entertainment industry." }
          ].map((item, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 border border-white/20 hover-lift">
              <div className="flex items-start space-x-6">
                <div className="text-3xl font-black text-yellow-400 min-w-[100px]">{item.year}</div>
                <div className="text-lg text-purple-100 leading-relaxed">{item.milestone}</div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center glass-effect rounded-2xl p-6">
              <div className="text-3xl font-black text-white mb-2">20+</div>
              <div className="text-purple-200">Years Experience</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6">
              <div className="text-3xl font-black text-white mb-2">1000+</div>
              <div className="text-purple-200">Industry Connections</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6">
              <div className="text-3xl font-black text-white mb-2">$100M+</div>
              <div className="text-purple-200">Value Created</div>
            </div>
          </div>
        </div>
      ),
      background: "from-purple-900 via-purple-800 to-pink-800"
    },
    {
      id: 3,
      title: "Fankoin's Mission",
      subtitle: "The Vision",
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-green-500/10 rounded-2xl p-8 border border-green-400/30">
            <p className="text-2xl text-green-100 leading-relaxed">
              To revolutionize entertainment by allowing fans to own a piece of the stories they love 
              through fractionalized NFTs and creator-issued assets.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "💎 Fan Tokens", desc: "Digital assets linked to creators, movies, and studios, allowing fans to own a piece of their favorite entertainment." },
              { title: "🔄 FAN-FRAC Model", desc: "NFTs that can be fractionalized for broader ownership, making high-value entertainment assets accessible to all fans." },
              { title: "🎨 Creator Assets", desc: "Digital collectibles, passes, and perks minted directly by creators for their most dedicated fans." }
            ].map((feature, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-green-300 mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold text-white mb-2">🚀 Turning Global Fanbases into Engaged Micro-Investors</p>
            <p className="text-green-100 text-lg">Active fan participation • Real ownership • Financial upside</p>
          </div>
        </div>
      ),
      background: "from-gray-900 to-green-900"
    },
    {
      id: 4,
      title: "Problem & Opportunity",
      subtitle: "Market Analysis",
      content: (
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-red-500/10 rounded-3xl p-8 border border-red-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">⚠️</div>
              <h3 className="text-3xl font-bold text-red-300">The Problem</h3>
            </div>
            <p className="text-xl text-red-100 leading-relaxed mb-6">
              Fans are passionate, but current platforms limit them to being passive consumers.
            </p>
            <div className="space-y-3">
              {["No ownership in favorite content", "Limited engagement opportunities", "No financial upside from support", "Fragmented fan experiences"].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-red-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-green-500/10 rounded-3xl p-8 border border-green-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">🚀</div>
              <h3 className="text-3xl font-bold text-green-300">The Opportunity</h3>
            </div>
            <p className="text-xl text-green-100 leading-relaxed mb-6">
              Fankoin unlocks active fan participation, ownership, and financial upside, 
              turning global fanbases into engaged micro-investors.
            </p>
            <div className="space-y-3">
              {["Own fractions of entertainment assets", "Participate in creative decisions", "Earn from entertainment success", "Build engaged communities"].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      background: "from-red-900 via-gray-900 to-green-900"
    },
    {
      id: 5,
      title: "Raising $5M via 5,000 Founder NFTs @ $1,000 each",
      subtitle: "Founder NFT Pre-Sale",
      content: (
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 flex items-center justify-center space-x-8 flex-wrap gap-4">
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <div className="text-4xl font-black text-white">$5M</div>
              <div className="text-lg text-white">Target Raise</div>
            </div>
            <div className="text-6xl text-white">÷</div>
            <div className="text-center">
              <div className="text-4xl mb-2">💎</div>
              <div className="text-4xl font-black text-white">5,000</div>
              <div className="text-lg text-white">Founder NFTs</div>
            </div>
            <div className="text-6xl text-white">=</div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-4xl font-black text-white">$1,000</div>
              <div className="text-lg text-white">Each NFT</div>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-center text-white mb-8">Perks of Founder NFTs:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "🛡️ Lifetime Zero Fees", desc: "No transaction or listing fees, ever." },
              { title: "👑 Premium Governance Access", desc: "Exclusive voting & input on platform direction." },
              { title: "🚀 Early Creator Access", desc: "Priority entry to first 50 creator launches." },
              { title: "⭐ VIP Perks", desc: "Special event invites & direct creator calls." }
            ].map((perk, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-yellow-300 mb-3">{perk.title}</h4>
                <p className="text-orange-100 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      background: "from-orange-900 via-yellow-900 to-orange-900"
    },
    {
      id: 6,
      title: "Tokenomics & Revenue",
      subtitle: "Multiple Revenue Streams",
      content: (
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-5xl">💎</div>
              <div>
                <div className="text-3xl font-black text-white">Fankoin Token (FKN)</div>
                <div className="text-xl text-purple-100">Fuels platform transactions</div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "🏪 Fractionalized NFT Marketplace", desc: "Transaction fees from marketplace activities and trading." },
              { title: "🎨 Creator Asset Sales", desc: "Sales and resale royalties from creator-issued digital assets." },
              { title: "👑 Premium Fan Memberships", desc: "Recurring membership tiers with exclusive benefits and access." },
              { title: "📺 Advertising & Sponsorship", desc: "Entertainment brand partnerships and targeted advertising revenue." }
            ].map((stream, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-purple-300 mb-3">{stream.title}</h4>
                <p className="text-slate-300 leading-relaxed">{stream.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "$50M+", label: "Projected Volume" },
              { number: "500K+", label: "Target Users" },
              { number: "1,200+", label: "Creator Assets" },
              { number: "5+", label: "Revenue Streams" }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-effect rounded-2xl p-6">
                <div className="text-3xl font-black text-purple-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      ),
      background: "from-purple-900 via-pink-900 to-purple-900"
    },
    {
      id: 7,
      title: "Timeline of Innovation",
      subtitle: "2005 → 2008 → 2015 → 2025",
      content: (
        <div className="space-y-8 max-w-6xl mx-auto">
          <div className="text-center text-4xl font-bold text-blue-300 mb-12">
            2005 → 2008 → 2015 → 2025
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2005", event: "BusinessOfCinema.com launch", color: "from-blue-500 to-blue-600" },
              { year: "2008", event: "First Facebook Live stream in Indian cinema", color: "from-purple-500 to-purple-600" },
              { year: "2015", event: "Ethereum collaboration with Taylor Gerring", color: "from-pink-500 to-pink-600" },
              { year: "2025", event: "Fankoin launch – bringing blockchain to global entertainment fans", color: "from-cyan-500 to-cyan-600" }
            ].map((milestone, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-r ${milestone.color} rounded-2xl p-8 mb-4 hover-lift`}>
                  <div className="text-4xl font-black text-white mb-4">{milestone.year}</div>
                </div>
                <p className="text-blue-100 leading-relaxed">{milestone.event}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-500/10 rounded-2xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-blue-300 text-center mb-6">Two Decades of Digital Entertainment Innovation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "20+", label: "Years of Experience" },
                { number: "1000+", label: "Industry Connections" },
                { number: "$100M+", label: "Value Created" },
                { number: "Global", label: "Entertainment Reach" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      background: "from-blue-900 via-cyan-900 to-blue-900"
    },
    {
      id: 8,
      title: "We Are Seeking Strategic Partners",
      subtitle: "The Ask",
      content: (
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            {[
              { title: "💰 $5M via Founder NFT Pre-Sale", desc: "5,000 exclusive Founder NFTs at $1,000 each, providing lifetime benefits and governance rights to early supporters." },
              { title: "🎯 Strategic Investors", desc: "Seeking investors with deep entertainment industry expertise and blockchain technology experience to guide our growth." },
              { title: "🤝 Industry Partnerships", desc: "Partnerships with studios, OTT platforms, and talent agencies to accelerate adoption and content creation." }
            ].map((ask, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">{ask.title}</h3>
                <p className="text-pink-100 leading-relaxed text-lg">{ask.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white text-center mb-6">🚀 Join the Founding Team</h3>
            <p className="text-pink-100 text-center text-xl mb-8 leading-relaxed">
              Be part of the next entertainment revolution. Early partners get exclusive access, 
              governance rights, and the opportunity to shape the future of fan engagement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "$5M", label: "Founder NFT Raise" },
                { number: "Strategic", label: "Investors Needed" },
                { number: "Studios", label: "Partnership Target" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-pink-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      background: "from-pink-900 via-purple-900 to-pink-900"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }, 8000);

      // Progress bar animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / 800); // 8 seconds = 800 * 10ms
        });
      }, 10);

      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) setProgress(0);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-24 relative overflow-hidden min-h-screen">
      {/* Dynamic background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.background} transition-all duration-1000`}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl floating-animation delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl floating-animation delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-8">
            <span className="text-white font-medium">Slide {currentSlide + 1} of {slides.length}</span>
            <span className="text-white/60">•</span>
            <span className="text-white/80">{currentSlideData.subtitle}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 text-shadow leading-tight">
            {currentSlideData.title}
          </h2>
        </div>

        {/* Slide Content */}
        <div className="fade-in-up" key={currentSlide}>
          {currentSlideData.content}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-6 mt-16">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={togglePlay}
            className="bg-white/20 hover:bg-white/30 border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
          
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-pink-400 to-purple-500 h-full rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setProgress(0);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};