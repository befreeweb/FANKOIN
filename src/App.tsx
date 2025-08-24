import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { TokenFlow } from './components/TokenFlow';
import { BusinessModel } from './components/BusinessModel';
import { CompetitiveAdvantage } from './components/CompetitiveAdvantage';
import { Roadmap } from './components/Roadmap';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <TokenFlow />
      <BusinessModel />
      <CompetitiveAdvantage />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;