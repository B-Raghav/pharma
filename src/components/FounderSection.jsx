import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const FounderSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
        >
            <div className="section-title">
                <User size={24} />
                <h3>New Vikas Pvt Ltd</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <User size={32} color="#666" />
                </div>
                <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>Vishwanath N B</h4>
                    <p className="sub-text">Director of New Vikas Pvt Ltd</p>
                </div>
            </div>
        </motion.div>
    );
};

export default FounderSection;
