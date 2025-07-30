'use client';

import React, { useEffect, useRef } from 'react';
import styles from './imageScreen.module.css';

export const ImageScreenWrapper = ({ children }: { children: React.ReactNode }) => {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = particlesRef.current;
        if (!container) return;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const maxDistance = Math.max(window.innerWidth, window.innerHeight) * 0.6;

        const spawnParticle = (initial = false) => {
            const angle = Math.random() * 2 * Math.PI;
            const dx = Math.cos(angle) * maxDistance;
            const dy = Math.sin(angle) * maxDistance;

            const particle = document.createElement('div');
            particle.className = styles.particle;
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            particle.style.setProperty('--dx', `${dx}px`);
            particle.style.setProperty('--dy', `${dy}px`);
            particle.style.animationDuration = `${40 + Math.random() * 20}s`;

            if (initial) {
                const progress = Math.random();
                particle.style.animationDelay = `-${Math.floor(progress * 100)}s`;
            }

            particle.addEventListener('animationend', () => {
                particle.remove();
            });

            container.appendChild(particle);
        };

        for (let i = 0; i < 500; i++) {
            spawnParticle(true);
        }

        // ⏳ продолжаем рождать новые точки
        const interval = setInterval(() => {
            for (let i = 0; i < 5; i++) {
                spawnParticle();
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.block}>
            <div className={styles.glow}></div>
            <div ref={particlesRef} className={styles.particles}></div>
            {children}
        </div>
    );
};
