import React from 'react';
import { GitMerge, ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const FlowDiagram = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card"
        >
            <div className="section-title">
                <GitMerge size={24} />
                <h3>Deal Logic Flow</h3>
            </div>

            <div className="flow-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

                {/* Step 1 & 2 Row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', width: '100%' }}>

                    {/* New Vikas */}
                    <div style={{ flex: 1, minWidth: '250px', padding: '1rem', background: '#e6f0ff', borderRadius: '8px', border: '1px solid #b3d1ff', position: 'relative' }}>
                        <h4 style={{ color: 'var(--color-primary)' }}>1. Acquisition</h4>
                        <p><strong>New Vikas</strong> buys <strong>Embiotic</strong></p>
                        <div className="highlight-value" style={{ fontSize: '1.2rem' }}>@ ₹70 Cr</div>
                    </div>

                    {/* Arrow */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ArrowRight size={32} color="#ccc" className="desktop-arrow" />
                        <ArrowDown size={32} color="#ccc" className="mobile-arrow" style={{ display: 'none' }} />
                    </div>

                    {/* Sun Pharma */}
                    <div style={{ flex: 1, minWidth: '250px', padding: '1rem', background: '#e6fffa', borderRadius: '8px', border: '1px solid #b3ffe6' }}>
                        <h4 style={{ color: 'var(--color-secondary)' }}>2. Funding</h4>
                        <p><strong>Sun Pharma</strong> injects funds</p>
                        <div className="highlight-value" style={{ fontSize: '1.2rem' }}>₹40–₹50 Cr</div>
                    </div>

                </div>

                {/* Down Arrow */}
                <ArrowDown size={32} color="#ccc" />

                {/* Outcome Row */}
                <div style={{ width: '100%', padding: '1rem', background: '#f9f9f9', borderRadius: '8px', border: '1px dashed #ccc' }}>
                    <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>3. Post-Deal Structure</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '1rem' }}>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>Sun Pharma Receives</div>
                            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#555' }}>
                                <li>26% Equity</li>
                                <li>26% Royalty</li>
                                <li>10-Year Repayment</li>
                            </ul>
                        </div>

                        <div style={{ width: '1px', background: '#ccc' }}></div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontWeight: 'bold', color: '#333' }}>Harish Jain Retains</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>10%</div>
                            <div style={{ fontSize: '0.8rem', color: '#666' }}>Post-Deal Equity</div>
                        </div>

                    </div>
                </div>

            </div>
            <style>{`
        @media (max-width: 768px) {
          .desktop-arrow { display: none !important; }
          .mobile-arrow { display: block !important; }
        }
      `}</style>
        </motion.div>
    );
};

export default FlowDiagram;
