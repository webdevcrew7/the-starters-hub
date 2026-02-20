'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader({ onComplete }) {
    const [fadeOut, setFadeOut] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
        const hideTimer = setTimeout(() => {
            setHidden(true);
            onComplete?.();
        }, 3000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, [onComplete]);

    if (hidden) return null;

    return (
        <div
            className={`preloader ${fadeOut ? 'preloader-fade-out' : ''}`}
            aria-label="Loading"
        >
            {/* Fire glow orbs */}
            <div className="preloader-glow preloader-glow-1"></div>
            <div className="preloader-glow preloader-glow-2"></div>

            {/* Ember particles */}
            <div className="ember ember-1"></div>
            <div className="ember ember-2"></div>
            <div className="ember ember-3"></div>
            <div className="ember ember-4"></div>
            <div className="ember ember-5"></div>
            <div className="ember ember-6"></div>

            {/* Logo with pulsing ring */}
            <div className="preloader-logo-wrap">
                <div className="preloader-ring"></div>
                <div className="preloader-logo">
                    <Image
                        src="/assets/logos/s-hub.png"
                        alt="The Starters Hub"
                        width={140}
                        height={140}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Loading bar */}
            <div className="preloader-bar-track">
                <div className="preloader-bar-fill"></div>
            </div>
        </div>
    );
}
