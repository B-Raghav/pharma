import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PieChart as PieIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const dataSheekakula = [
    { name: 'Vishwanath', value: 20 },
    { name: 'Others', value: 80 },
];

const dataEmbiotic = [
    { name: 'Vishwanath', value: 14.28 },
    { name: 'Others', value: 85.72 },
];

const COLORS = ['#0056b3', '#e0e0e0'];

const EquitySection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
        >
            <div className="section-title">
                <PieIcon size={24} />
                <h3>Current Equity Holdings</h3>
            </div>

            <div className="grid-2">
                {/* Sheekakula */}
                <div style={{ textAlign: 'center' }}>
                    <h4>Sheekakula</h4>
                    <p className="sub-text">Valuation: ₹3.5 Cr</p>
                    <div style={{ height: '200px', width: '100%' }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={dataSheekakula}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {dataSheekakula.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="sub-text" style={{ marginTop: '10px' }}>
                        <strong>Note:</strong> Sheekakula also owns 20% of New Vikas
                    </p>
                </div>

                {/* Embiotic */}
                <div style={{ textAlign: 'center' }}>
                    <h4>Embiotic Pharma</h4>
                    <p className="sub-text">Vishwanath Value: ₹10 Cr</p>
                    <div style={{ height: '200px', width: '100%' }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={dataEmbiotic}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {dataEmbiotic.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default EquitySection;
