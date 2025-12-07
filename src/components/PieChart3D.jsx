import React, { useState } from 'react';
import { Text } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const Slice = ({ value, total, startAngle, color, label, radius = 1, height = 0.5 }) => {
    const [hovered, setHovered] = useState(false);
    const angle = (value / total) * Math.PI * 2;
    const endAngle = startAngle + angle;

    // Calculate mid-angle for label position
    const midAngle = startAngle + angle / 2;
    const labelX = Math.cos(midAngle) * (radius + 0.5);
    const labelZ = Math.sin(midAngle) * (radius + 0.5);

    const { scale, hoverColor } = useSpring({
        scale: hovered ? 1.1 : 1,
        hoverColor: hovered ? '#ff9900' : color,
        config: { tension: 300, friction: 20 }
    });

    // Create a shape for the slice (simplified as a cylinder segment for now, or just a full cylinder if 100%)
    // For true pie slices in 3D, we'd need ExtrudeGeometry with a custom shape.
    // To keep it simple and robust, let's use a Cylinder with thetaLength.

    return (
        <group>
            <animated.mesh
                scale={scale}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                rotation={[0, -startAngle, 0]} // Rotate to start position
                position={[0, height / 2, 0]}
            >
                {/* CylinderGeometry args: [radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength] */}
                {/* Note: Three.js cylinder theta starts from +X (0) and goes counter-clockwise. We need to handle this. */}
                <cylinderGeometry args={[radius, radius, height, 32, 1, false, 0, angle]} />
                <animated.meshStandardMaterial color={hoverColor} />
            </animated.mesh>

            {/* Label */}
            <Text
                position={[labelX, height + 0.2, -labelZ]} // Adjust Z because of rotation frame
                fontSize={0.2}
                color="black"
                anchorX="center"
                anchorY="middle"
                billboard
            >
                {label}
                {'\n'}
                {value}%
            </Text>
        </group>
    );
};

const PieChart3D = ({ data, title, position = [0, 0, 0] }) => {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    let currentAngle = 0;

    return (
        <group position={position}>
            <Text position={[0, 1.5, 0]} fontSize={0.3} color="#0056b3" anchorX="center">
                {title}
            </Text>
            <group rotation={[Math.PI / 6, 0, 0]}> {/* Tilt slightly for better 3D view */}
                {data.map((item, index) => {
                    const slice = (
                        <Slice
                            key={index}
                            value={item.value}
                            total={total}
                            startAngle={currentAngle}
                            color={index % 2 === 0 ? '#0056b3' : '#008080'}
                            label={item.name}
                        />
                    );
                    currentAngle += (item.value / total) * Math.PI * 2;
                    return slice;
                })}
            </group>
        </group>
    );
};

export default PieChart3D;
