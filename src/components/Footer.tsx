import React from 'react';
import { Zap, MessageCircle, Github, Mail, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Zap className="h-10 w-10 text-pink-400 pulse-glow" />
                <div className="absolute inset-0 h-10 w-10 bg-pink-400 rounded-full blur-lg opacity-30"></div>
              </div>
              <span className="text-white text-3xl font-bold gradient-text">FANKOIN</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Revolutionizing entertainment through blockchain technology. 
              Connecting fans, creators, and studios in a decentralized ecosystem.
            </p>
            <div className="flex space-x-4">
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-pink-500/50 transition-all duration-300 cursor-pointer group">
                <MessageCircle className="h-6 w-6 text-slate-400 group-hover:text-pink-400 transition-colors" />
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-pink-500/50 transition-all duration-300 cursor-pointer group">
                <Github className="h-6 w-6 text-slate-400 group-hover:text-pink-400 transition-colors" />
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Platform</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>Token Launchpad</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>NFT Marketplace</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>RWA Tokenization</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>DAO Governance</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>Creator Tools</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>Whitepaper</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>Documentation</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>Blog</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>Help Center</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>Community</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Stay Updated</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Get the latest updates on Fankoin development and exclusive access to new features.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-l-2xl text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-r-2xl text-white font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center shadow-lg">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
              <p className="text-slate-500 text-sm">
                🔒 We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm">
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Cookie Policy</a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Security</a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Careers</a>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-slate-400 text-sm">
                © 2024 Fankoin. All rights reserved.
              </div>
              <button 
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-110 shadow-lg"
              >
                <ArrowUp className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};