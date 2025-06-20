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
        <div className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto">

            {/* 3D arka plan */}
            <Canvas className="absolute inset-0 z-0">
                <BackgroundNodes />
            </Canvas>

            {/* Karanlık şeffaf overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 z-10 pointer-events-none" />

            {/* Ana içerik */}
            <main
                className="relative flex flex-col items-center justify-center text-white z-20 px-6 py-10"
                style={{
                    textAlign: 'center',
                }}
            >
                {/* HELIOS Başlık */}
                <h1
                    className="font-extrabold tracking-widest drop-shadow-lg"
                    style={{ fontSize: '56px' }}
                >
                    HELIOS
                </h1>

                {/* Alt İsim */}
                <p
                    className="font-medium mt-2"
                    style={{ fontSize: '18px' }}
                >
                    Ömür Buğra Gündüz
                </p>

                {/* Link Butonları */}
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    {tabs.map((tab, i) => (
                        <a
                            key={i}
                            href={tab.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-6 bg-green-600 bg-opacity-90 rounded-lg hover:bg-green-500 transition font-medium shadow-md"
                            style={{ fontSize: '16px' }}
                        >
                            {tab.title}
                        </a>
                    ))}
                </div>

                {/* Açıklama */}
                <div
                    className="max-w-4xl mt-6"
                    style={{ fontSize: '16px', lineHeight: '1.6' }}
                >
                    The Sustainability Dashboard is a three-part web application designed to support different users in making informed, energy-conscious decisions throughout the building lifecycle. The Energy+ Parametric Dashboard enables architects, engineers, and researchers to analyze complex building simulations, exploring the relationships between design variables and metrics. Residential Design Insights Dashboard helps homeowners and consultants compare design strategies—such as façade options or PV layouts—by visualizing energy outcomes and calculating cost impacts. The Smart Use Guidance Dashboard empowers residents with real-time, personalized recommendations to optimize energy use, reduce bills, and increase self-sufficiency.
                </div>

                {/* Documentation Butonu */}
                <div className="mt-6">
                    <a
                        href="https://docs.google.com/document/d/1wMcuWDc8ZzWqaEL9ooeCUWgUVFF_28LKQ9a37EJbnCQ/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-6 bg-white bg-opacity-10 rounded-lg hover:bg-blue-500 transition font-medium shadow-md"
                        style={{ fontSize: '16px' }}
                    >
                        Documentation
                    </a>
                </div>
            </main>
        </div>
    );
}
