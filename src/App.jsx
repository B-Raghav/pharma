import React from 'react';
import Header from './components/Header';
import FounderSection from './components/FounderSection';
import EquitySection from './components/EquitySection';
import CompanyOverview from './components/CompanyOverview';
import DealSection from './components/DealSection';
import FlowDiagram from './components/FlowDiagram';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />

      <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
        <FounderSection />
        <EquitySection />
      </div>

      <CompanyOverview />

      <DealSection />

      <FlowDiagram />

      <Footer />
    </div>
  );
}

export default App;
