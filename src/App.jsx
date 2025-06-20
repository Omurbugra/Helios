import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function BackgroundNodes() {
    const pointsRef = useRef();
    const positions = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 2000; i++) {
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;
            temp.push(x, y, z);
        }
        return temp;
    }, []);

    useFrame(({ clock }) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} limit={2000}>
            <PointMaterial size={0.12} color="white" />
        </Points>
    );
}

export default function App() {
    const tabs = [
        { title: 'Energy+ Parametric Dashboard', href: 'https://graph-qb9l.onrender.com/' },
        { title: 'Residential Sustainability Insights Dashboard', href: 'https://omurbugra.github.io/Dashboard/' },
        { title: 'Smart Use Guidance Dashboard', href: 'https://omurbugra.github.io/Smart-Use-Guidance/' },
    ];

    return (
        <div className="relative h-screen w-screen overflow-hidden">

            {/* 3D Canvas Background */}
            <Canvas className="absolute inset-0 z-0">
                <BackgroundNodes />
            </Canvas>

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 z-10 pointer-events-none" />

            {/* Main content centered */}
            <main className="absolute inset-0 flex flex-col items-center z-20 text-white px-6 pt-44">

                {/* HELIOS Logo-like Title */}
                <div className="mb-10 text-center">
                    <h1 className="text-7xl font-extrabold tracking-widest text-white drop-shadow-lg">HELIOS</h1>
                    <p className="text-xl font-medium text-white mt-2">Ömür Buğra Gündüz</p>
                </div>

                {/* Navigation Tabs */}
                <nav className="flex space-x-6 mt-16 mb-6">
                    {tabs.map((tab, i) => (
                        <a
                            key={i}
                            href={tab.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-6 bg-green-600 bg-opacity-90 rounded-lg hover:bg-green-500 transition text-lg font-medium shadow-md"
                        >
                            {tab.title}
                        </a>
                    ))}
                </nav>

                {/* Description Paragraph */}
                <div className="max-w-5xl text-lg leading-relaxed text-center mt-10 mb-0">
                    The Sustainability Dashboard is a three-part web application designed to support different users in making informed, energy-conscious decisions throughout the building lifecycle. The Energy+ Parametric Dashboard enables architects, engineers, and researchers to analyze complex building simulations, exploring the relationships between design variables and metrics. Residential Design Insights Dashboard helps homeowners and consultants compare design strategies—such as façade options or PV layouts—by visualizing energy outcomes and calculating cost impacts. The Smart Use Guidance Dashboard empowers residents with real-time, personalized recommendations to optimize energy use, reduce bills, and increase self-sufficiency.
                </div>

                {/* Documentation Button (new) */}
                <div className="mt-10">
                    <a
                        href="https://documentation.example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-6 bg-white bg-opacity-10 rounded-lg hover:bg-blue-500 transition text-lg font-medium shadow-md"
                    >
                        Documentation
                    </a>
                </div>
            </main>
        </div>
    );
}
