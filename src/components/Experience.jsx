import React, { useRef } from 'react';
import { ScrollControls, Scroll, Text, Float, Stars } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import PieChart3D from './PieChart3D';
import BarChart3D from './BarChart3D';
import FlowDiagram3D from './FlowDiagram3D';

const Background = () => {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <mesh ref={ref} position={[0, 0, -20]}>
                <torusKnotGeometry args={[10, 3, 100, 16]} />
                <meshStandardMaterial color="#0056b3" wireframe opacity={0.05} transparent />
            </mesh>
        </group>
    );
};

const Experience = () => {
    const { width, height } = useThree((state) => state.viewport);

    // Responsive scale factor
    const scaleFactor = Math.min(1, width / 10);
    const isMobile = width < 5;

    return (
        <>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <spotLight position={[-10, 10, 5]} angle={0.5} penumbra={1} intensity={2} />
            <Background />

            <ScrollControls pages={4} damping={0.3}>
                <Scroll>
                    {/* PAGE 1: Intro & Founder */}
                    <group position={[0, 0, 0]}>
                        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                            <Text
                                position={[0, 1.5, 0]}
                                fontSize={isMobile ? 0.5 : 0.8}
                                scale={scaleFactor}
                                maxWidth={width * 0.9}
                                color="#0056b3"
                                anchorX="center"
                                anchorY="middle"
                                textAlign="center"
                                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                            >
                                Strategic Investment Overview
                            </Text>
                            <Text
                                position={[0, 0.5, 0]}
                                fontSize={0.3}
                                scale={scaleFactor}
                                maxWidth={width * 0.8}
                                color="#666"
                                anchorX="center"
                                anchorY="middle"
                                textAlign="center"
                            >
                                NuVikas Pvt Ltd • Embiotic Pharma • Sun Pharma
                            </Text>
                        </Float>

                        <group position={[0, -2, 0]} scale={scaleFactor}>
                            <mesh position={[isMobile ? 0 : -2, 0, 0]}>
                                <sphereGeometry args={[0.6, 32, 32]} />
                                <meshStandardMaterial color="#008080" />
                            </mesh>
                            <group position={[isMobile ? 0 : -0.8, 0, 0]}>
                                <Text
                                    position={[0, 0.2, 0]}
                                    fontSize={0.4}
                                    color="#333"
                                    anchorX={isMobile ? "center" : "left"}
                                    anchorY="bottom"
                                >
                                    Vishwanath
                                </Text>
                                <Text
                                    position={[0, -0.1, 0]}
                                    fontSize={0.2}
                                    color="#666"
                                    anchorX={isMobile ? "center" : "left"}
                                    anchorY="top"
                                >
                                    Founder of NuVikas Pvt Ltd
                                </Text>
                            </group>
                        </group>
                    </group>

                    {/* PAGE 2: Equity Charts */}
                    <group position={[0, -height, 0]} scale={scaleFactor}>
                        <group position={[isMobile ? 0 : -3.5, isMobile ? 2 : 0, 0]}>
                            <PieChart3D
                                title="Sheekakula Equity"
                                data={[
                                    { name: 'Vishwanath', value: 20 },
                                    { name: 'Others', value: 80 },
                                ]}
                            />
                        </group>
                        <group position={[isMobile ? 0 : 3.5, isMobile ? -2 : 0, 0]}>
                            <PieChart3D
                                title="Embiotic Equity"
                                data={[
                                    { name: 'Vishwanath', value: 14.28 },
                                    { name: 'Others', value: 85.72 },
                                ]}
                            />
                        </group>
                    </group>

                    {/* PAGE 3: Overview & Cost */}
                    <group position={[0, -height * 2, 0]} scale={scaleFactor}>
                        <group position={[isMobile ? 0 : 3, 0, 0]}>
                            <BarChart3D
                                title="Acquisition Cost"
                                data={[
                                    { name: 'Shares', cost: 65 },
                                    { name: 'Raw/Pkg', cost: 5 },
                                ]}
                            />
                        </group>

                        <group position={[isMobile ? 0 : -3, isMobile ? 3 : 1, 0]}>
                            <Text position={[0, 0.5, 0]} fontSize={0.35} color="#333" anchorX={isMobile ? "center" : "left"} maxWidth={5}>
                                Embiotic Pharma Overview
                            </Text>
                            <Text position={[0, 0, 0]} fontSize={0.2} color="#666" anchorX={isMobile ? "center" : "left"} anchorY="top" maxWidth={5}>
                                • Pharmaceutical Manufacturer{'\n'}
                                • 125+ Licenses Held{'\n'}
                                • Valuation: ₹70 Cr
                            </Text>
                        </group>
                    </group>

                    {/* PAGE 4: Deal Flow */}
                    <group position={[0, -height * 3, 0]} scale={scaleFactor * 0.9}>
                        <FlowDiagram3D position={[0, 0, 0]} />
                    </group>

                </Scroll>
            </ScrollControls>
        </>
    );
};

export default Experience;
