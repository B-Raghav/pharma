import React from 'react';
import { Building2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
        >
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4" style={{ background: 'var(--color-accent)', borderRadius: '50%' }}>
                <Building2 size={48} color="var(--color-primary)" />
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Strategic Investment Overview</h1>
            <p className="sub-text" style={{ fontSize: '1.1rem' }}>
                New Vikas Pvt Ltd • Embiotic Pharma • Sun Pharma
            </p>
        </motion.header>
    );
};

export default Header;
