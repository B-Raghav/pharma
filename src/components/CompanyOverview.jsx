import React from 'react';
import { Factory, BarChart as BarChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

const costData = [
    { name: 'Shares (100%)', cost: 65 },
    { name: 'Raw/Pkg Material', cost: 5 },
];

const CompanyOverview = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
        >
            <div className="section-title">
                <Factory size={24} />
                <h3>Embiotic Pharma Overview</h3>
            </div>

            <div className="grid-2">
                <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)' }}></div>
                            <span>Pharmaceutical Manufacturer</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)' }}></div>
                            <span><strong>125+</strong> Licenses Held</span>
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <span className="sub-text">Total Valuation</span>
                            <div className="highlight-value">₹70 Cr</div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Acquisition Cost Structure</h4>
                    <div style={{ height: '200px', width: '100%' }}>
                        <ResponsiveContainer>
                            <BarChart data={costData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                <XAxis type="number" unit=" Cr" />
                                <YAxis dataKey="name" type="category" width={120} style={{ fontSize: '0.8rem' }} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="cost" fill="var(--color-secondary)" radius={[0, 4, 4, 0]} barSize={30}>
                                    {
                                        costData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index === 0 ? 'var(--color-primary)' : 'var(--color-secondary)'} />
                                        ))
                                    }
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CompanyOverview;
