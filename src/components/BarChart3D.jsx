import React, { useState } from 'react';
import { Text } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const Bar = ({ value, label, color, position, maxValue }) => {
    const [hovered, setHovered] = useState(false);
    const height = (value / maxValue) * 3; // Scale height

    const { scale, hoverColor } = useSpring({
        scale: hovered ? 1.1 : 1,
        hoverColor: hovered ? '#ff9900' : color,
        config: { tension: 300, friction: 20 }
    });

    return (
        <group position={position}>
            <animated.mesh
                position={[0, height / 2, 0]}
                scale={scale}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <boxGeometry args={[0.8, height, 0.8]} />
                <animated.meshStandardMaterial color={hoverColor} />
            </animated.mesh>
            <Text
                position={[0, -0.5, 0]}
                fontSize={0.2}
                color="#333"
                anchorX="center"
                anchorY="top"
            >
                {label}
            </Text>
            <Text
                position={[0, height + 0.2, 0]}
                fontSize={0.2}
                color="#333"
                anchorX="center"
                anchorY="bottom"
            >
                ₹{value} Cr
            </Text>
        </group>
    );
};

const BarChart3D = ({ data, title, position = [0, 0, 0] }) => {
    const maxValue = Math.max(...data.map(d => d.cost));

    return (
        <group position={position}>
            <Text position={[0, 4, 0]} fontSize={0.4} color="#0056b3" anchorX="center">
                {title}
            </Text>
            {data.map((item, index) => (
                <Bar
                    key={index}
                    value={item.cost}
                    label={item.name}
                    color={index === 0 ? '#0056b3' : '#008080'}
                    position={[(index - (data.length - 1) / 2) * 1.5, 0, 0]}
                    maxValue={maxValue}
                />
            ))}
        </group>
    );
};

export default BarChart3D;
