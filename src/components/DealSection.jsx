import React from 'react';
import { Handshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DealSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
            style={{ borderLeft: '4px solid var(--color-primary)' }}
        >
            <div className="section-title">
                <Handshake size={24} />
                <h3>Sun Pharma Investment Deal</h3>
            </div>

            <div className="grid-2">
                <div>
                    <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>The Goal</h4>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Sun Pharma invests in New Vikas to enable the outright acquisition of Embiotic Pharma.
                    </p>

                    <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Deal Terms</h4>
                    <div style={{ background: 'var(--color-accent)', padding: '1rem', borderRadius: '8px' }}>
                        <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>Funding Injection</span>
                            <strong>₹40–₹50 Cr (Debt)</strong>
                        </div>
                        <hr style={{ border: '0', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '0.5rem 0' }} />
                        <div style={{ marginBottom: '0.5rem' }}><strong>In Exchange For:</strong></div>
                        <ul style={{ paddingLeft: '1.2rem' }}>
                            <li>26% Equity in Embiotic</li>
                            <li>26% Royalty</li>
                            <li>10-Year Repayment Contract</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Key Shareholder Impact</h4>
                    <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
                        <h5>Harish Jain & Family</h5>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', color: '#666' }}>Current Equity</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>23%</div>
                            </div>
                            <ArrowRight size={20} color="#999" />
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.8rem', color: '#666' }}>Post-Deal</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>10%</div>
                            </div>
                        </div>
                        <p className="sub-text" style={{ marginTop: '0.5rem' }}>Retained stake after buyout</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DealSection;
