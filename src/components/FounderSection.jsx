import React, { useState } from 'react';
import { User, X, Briefcase, Award, TrendingUp, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VISHWANATH_PROFILE = {
    name: "Vishwanath N B",
    role: "Managing Director, Technical Operations Head",
    experience: [
        "M/s. Remidex Pharma",
        "M/s. Micro Labs",
        "M/s. The Himalaya Drug Co."
    ],
    roles: [
        "Responsible for production of all products for domestic and exports (in-house & CMLs).",
        "Reduced operational costs/production losses, improved yields, optimized Excise Duty savings in UK/HP, enhanced inventory control, and increased productivity.",
        "Delivered finished products on time as per marketing commitments: a) NLT 95% for Domestic products. b) NLT 95% for Pharma Export products (within 84 days). c) NLT 95% for PCD Export products (within 84 days).",
        "Continual upgradation of Quality Management System (QMS) in coordination with QA, aided by focused training programs. Resulted in: Result-oriented GMP trainings, reduced non-conformances (NCs) & rejections, successful GMP audits, and decreased batch failures.",
        "Ensured reduction in quality complaints compared to previous years and avoided critical/major quality complaints.",
        "Streamlined and harmonized contract manufacturing activities to continuously meet HDC’s quality requirements.",
        "Identified new CMLs to cater to Domestic/Export products as capacity increased. Negotiated competitive conversion charges resulting in savings.",
        "Increased productivity and reduced overtime at Makali production facility. Improved work culture and participated in team negotiations.",
        "Ensured effective handling of approved manufacturing-related projects at HDC.",
        "Responsible for approving SOPs and MFRs pertaining to production activities.",
        "Conducted performance evaluations of CMLs in coordination with QA and took appropriate actions.",
        "Consolidated CMLs for better control and improved product quality.",
        "Handled other responsibilities assigned by management from time to time."
    ],
    achievements: [
        "DELIVERY EFFICIENCY: Increased Domestic Production Value by 22.80% over previous year (Total ₹2691 Crores). Breakdown: Pharma (₹708 Cr, +23.8%), Baby Care (₹493 Cr, +15.8%), AHP (₹158 Cr, +46.8%), CPD (₹1213 Cr, +20.7%), Wellness (₹117 Cr, +47.3%).",
        "SAVINGS: Saved ₹86 Crores total by manufacturing in SEZ locations (₹7.10 Cr prior to GST, ₹79 Cr in last three years).",
        "Introduced Zonal Managers across India for effective monitoring of all Contract Manufacturing locations.",
        "Assigned five Vertical Heads with responsibility for delivery efficiencies to cater to market demand.",
        "Formed a Technology Transfer Team for smooth transfer of all new personal care, baby care, and mother care products.",
        "Reviewed Roles & Responsibilities of Production Representatives to monitor culture of compliance and shop floor discipline.",
        "Identified 14 Key Contract Manufacturers during consolidation in 2016-17.",
        "Successfully conducted Annual Key Contract Manufacturers’ meet in 2017-18.",
        "Introduced evaluation ranking system for Key Contract Manufacturers from 2018-19.",
        "Manufactured 100% of Domestic products at CMLs, de-congesting Makali facility.",
        "Shifted all PCD export products to job work locations (except US products).",
        "Successfully cleared In-house Audits for Makali facility.",
        "Created three Co-packing facilities with a potential of ₹500 Crores in offer packs per annum.",
        "Enhanced Soap production capacities to 1.5 Crore units per month at M/s. Devi Healthcare.",
        "Increased Steam Sterilization capacity from 33 tons to 100 tons per month through process improvement."
    ],
    initiatives: [
        "New LLs added: 1. Archeesh Healthcare, 2. Elegant Chemicals, 3. PIPL, 4. Sarvotham Care, 5. All Kind Healthcare, 6. Allure Products, 7. Welspun India Limited, 8. Leamak Healthcare, 9. Pegasus Farmaco, 10. Kushi Enterprises, 11. LMN Packers, 12. Yashaswini Enterprises, 13. Mor Medics, 14. Devi Healthcare, 15. Scoobee Pet Products, 16. Harshvardhan Laboratories, 17. G M Biochem, 18. Makson Healthcare, 19. BPRL, 20. Globe Enterprises."
    ],
    projects: [
        "Completed exclusive & dedicated facility for Corn Starch Powder and Sterilized Baby Talc by Oct-2018 (M/s. SRK Healthcare).",
        "Facilitated Baby Food products manufacturing setup by Dec-2018.",
        "Completed exclusive & dedicated facility for Tablets and Capsules (35-40 Lakh containers/month) by June-2019 (M/s. BPRL)."
    ],
    newRoles: [
        "Guiding Production and Supply Chain for effective delivery efficiencies in both Exports and Domestic markets.",
        "Reviewing process improvements, product safety, market complaints, and compliance culture with FD and QA on a monthly basis.",
        "Executing machine automation in coordination with Engineering Services for best facility utilization.",
        "Coordinating with Purchase/Agrotech to achieve objectives regarding market demand.",
        "Interacting effectively with vertical heads to ensure 100% on-time delivery of finished goods.",
        "Decentralizing Contract Manufacturing activities globally (Indonesia, South Korea, Bangladesh, Iran, Poland, Thailand, Vietnam, Malaysia, etc.).",
        "Creating fully Automated and Integrated lines to establish all 100 Crore+ brand products.",
        "Executing Tumkur Project for Liv.52 Tablets and Syrup by March 2020.",
        "Continual improvement of Quality Management System.",
        "Controlling manufacturing costs and maintaining competitive conversion charges.",
        "Supporting International Marketing / Hubs for global tech transfer of products.",
        "Finalizing new facilities and creating capacities as per marketing needs (right time, quality, and cost).",
        "Identifying new projects, from layout drawing approval to execution.",
        "Maintaining cordial employee-employer relationships in coordination with HR.",
        "Developing strong second-line managers to strengthen manufacturing verticals.",
        "Setting department objectives and KRAs for reporting staff.",
        "Providing support to departments like Formulation Development, International Hubs, and Domestic Marketing."
    ],
};

const NUVIKAS_DETAILS = {
    name: "NuVikas Pvt Ltd",
    founded: "April 08, 2023",
    mission: "To plan and achieve manufacturing of high-quality, low-cost products for all our customers.",
    vision: "By 2030, we aim to acquire 2-3 pharma companies and grow each to a valuation of ₹100 Cr.",
    objectives: [
        "Set up Global Pharmaceutical manufacturing to facilitate sales and marketing of value-added products globally.",
        "Acquire factories and upgrade them to higher standards.",
        "Utilize acquired facilities to manufacture healthcare and ethical pharmaceutical products via contract manufacturing or P2P models.",
        "Leverage existing subject matter expertise to expand into sterile manufacturing and distribution.",
        "Serve society by providing high-quality products at low costs, without compromising on quality."
    ]
};

const CompanyModal = ({ details, onClose }) => {
    if (!details) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }} onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                style={{
                    background: 'white', width: '90%', maxWidth: '700px', maxHeight: '90vh',
                    borderRadius: '12px', padding: '2rem', overflowY: 'auto', position: 'relative',
                    border: '4px solid var(--color-primary)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} style={{
                    position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer'
                }}>
                    <X size={24} color="#666" />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'var(--color-primary)', marginBottom: '1rem' }}>
                        <User size={48} color="white" />
                    </div>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{details.name}</h2>
                    <p style={{ fontSize: '1.1rem', color: '#666' }}>Founded: <strong>{details.founded}</strong></p>
                </div>

                <div className="modal-content" style={{ display: 'grid', gap: '1.5rem' }}>

                    <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Vision</h4>
                        <p style={{ fontStyle: 'italic', color: '#444' }}>"{details.vision}"</p>
                    </div>

                    <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--color-secondary)' }}>
                        <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Mission</h4>
                        <p style={{ fontStyle: 'italic', color: '#444' }}>"{details.mission}"</p>
                    </div>

                    <section>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#333' }}>
                            <Target size={20} /> Key Objectives
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: '#444', lineHeight: '1.6' }}>
                            {details.objectives.map((obj, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{obj}</li>)}
                        </ul>
                    </section>

                </div>
            </motion.div>
        </div>
    );
};

const ProfileModal = ({ director, onClose }) => {
    if (!director) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }} onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                style={{
                    background: 'white', width: '90%', maxWidth: '800px', maxHeight: '90vh',
                    borderRadius: '12px', padding: '2rem', overflowY: 'auto', position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} style={{
                    position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer'
                }}>
                    <X size={24} color="#666" />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <div style={{ background: '#e6f0ff', padding: '1rem', borderRadius: '50%' }}>
                        <User size={40} color="var(--color-primary)" />
                    </div>
                    <div>
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.2rem' }}>{director.name}</h2>
                        <p style={{ fontSize: '1.1rem', color: '#666' }}>{director.role}</p>
                    </div>
                </div>

                <div className="modal-content" style={{ display: 'grid', gap: '2rem' }}>

                    {/* Experience */}
                    <section>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)' }}>
                            <Briefcase size={20} /> Professional Experience
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: '#444' }}>
                            {director.experience.map((exp, i) => <li key={i}>{exp}</li>)}
                        </ul>
                    </section>

                    {/* Achievements */}
                    <section>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)' }}>
                            <Award size={20} /> Major Achievements
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: '#444' }}>
                            {director.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                        </ul>
                    </section>

                    {/* Current Roles */}
                    <section>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)' }}>
                            <Target size={20} /> Key Responsibilities & Initiatives
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: '#444' }}>
                            {director.roles.map((role, i) => <li key={i}>{role}</li>)}
                            {director.initiatives.map((init, i) => <li key={i}>{init}</li>)}
                        </ul>
                    </section>

                    {/* Projects */}
                    <section>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)' }}>
                            <TrendingUp size={20} /> Projects in Pipeline
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: '#444' }}>
                            {director.projects && director.projects.map((proj, i) => <li key={i}>{proj}</li>)}
                        </ul>
                    </section>

                    {/* New Roles */}
                    <section>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)' }}>
                            <TrendingUp size={20} /> Future Goals & New Roles
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: '#444' }}>
                            {director.newRoles.map((role, i) => <li key={i}>{role}</li>)}
                        </ul>
                    </section>

                </div>
            </motion.div>
        </div>
    );
};

const FounderSection = () => {
    const [selectedDirector, setSelectedDirector] = useState(null);
    const [showCompanyModal, setShowCompanyModal] = useState(false);

    const directors = [
        { name: 'Vishwanath N B', role: 'Managing Director, Technical Operations Head', profile: VISHWANATH_PROFILE },
        { name: 'Suresh', role: 'Director, Investor' },
        { name: 'Rekha J', role: 'Director, Investor, HR and IR' },
        { name: 'Madhur Jain', role: 'Director, Financial Operations Head' },
        { name: 'Dimple Jain', role: 'Director, Investor' },
        { name: 'Kasturi S', role: 'Executive Director, Sales and Marketing, Business Development' }
    ];

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="card"
            >
                <div className="section-title">
                    <User size={24} />
                    <h3
                        onClick={() => setShowCompanyModal(true)}
                        style={{ cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--color-primary)' }}
                        title="Click to view Company Profile"
                    >
                        NuVikas Pvt Ltd
                    </h3>
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Directors & Roles
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                        {directors.map((director, index) => (
                            <div
                                key={index}
                                onClick={() => director.profile && setSelectedDirector(director.profile)}
                                style={{
                                    display: 'flex',
                                    gap: '0.8rem',
                                    alignItems: 'flex-start',
                                    padding: '0.8rem',
                                    background: director.profile ? '#f0f7ff' : '#f8f9fa',
                                    borderRadius: '8px',
                                    border: director.profile ? '1px solid #b3d1ff' : '1px solid #eee',
                                    cursor: director.profile ? 'pointer' : 'default',
                                    transition: 'transform 0.2s',
                                    boxShadow: director.profile ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                                }}
                                onMouseEnter={(e) => director.profile && (e.currentTarget.style.transform = 'translateY(-2px)')}
                                onMouseLeave={(e) => director.profile && (e.currentTarget.style.transform = 'translateY(0)')}
                            >
                                <div style={{
                                    background: director.profile ? '#0056b3' : '#e0e0e0',
                                    padding: '0.5rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: director.profile ? 'white' : '#666'
                                }}>
                                    <User size={18} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'var(--color-text)' }}>
                                        {director.name}
                                        {director.profile && <span style={{ fontSize: '0.7rem', color: 'var(--color-primary)', marginLeft: '6px', background: '#dbeafe', padding: '2px 6px', borderRadius: '10px' }}>View Profile</span>}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.3' }}>{director.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedDirector && (
                    <ProfileModal director={selectedDirector} onClose={() => setSelectedDirector(null)} />
                )}
                {showCompanyModal && (
                    <CompanyModal details={NUVIKAS_DETAILS} onClose={() => setShowCompanyModal(false)} />
                )}
            </AnimatePresence>
        </>
    );
};

export default FounderSection;
