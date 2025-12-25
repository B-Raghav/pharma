import React, { useRef } from 'react';
import { Text, Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Node = ({ position, label, subLabel, color }) => {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.005;
    });

    return (
        <group position={position}>
            <mesh ref={meshRef}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
            </mesh>
            <Text position={[0, 1.2, 0]} fontSize={0.25} color="#333" anchorX="center">
                {label}
            </Text>
            <Text position={[0, 0.9, 0]} fontSize={0.15} color="#666" anchorX="center">
                {subLabel}
            </Text>
        </group>
    );
};

const Connection = ({ start, end }) => {
    return (
        <Line
            points={[start, end]}
            color="#ccc"
            lineWidth={2}
            dashed={false}
        />
    );
};

const FlowDiagram3D = ({ position = [0, 0, 0] }) => {
    const nodes = [
        { id: 1, pos: [-3, 2, 0], label: "NuVikas", subLabel: "Buys Embiotic @ ₹70Cr", color: "#0056b3" },
        { id: 2, pos: [3, 2, 0], label: "Sun Pharma", subLabel: "Funds ₹40-50Cr", color: "#008080" },
        { id: 3, pos: [0, -2, 0], label: "Post-Deal", subLabel: "26% Equity / Royalty", color: "#666666" },
    ];

    return (
        <group position={position}>
            <Text position={[0, 4, 0]} fontSize={0.4} color="#0056b3" anchorX="center">
                Deal Logic Flow
            </Text>

            {nodes.map((node, i) => (
                <Node key={i} position={node.pos} label={node.label} subLabel={node.subLabel} color={node.color} />
            ))}

            <Connection start={nodes[0].pos} end={nodes[2].pos} />
            <Connection start={nodes[1].pos} end={nodes[2].pos} />
            <Connection start={nodes[0].pos} end={nodes[1].pos} />
        </group>
    );
};

export default FlowDiagram3D;
