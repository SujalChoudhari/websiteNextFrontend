import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/CircularLinks.module.css';
import Image from 'next/image'

const CircularLinks = ({ links }) => {
    const circleRef = useRef(null);
    const [circleSize, setCircleSize] = useState(400); // Initial circle size (width and height)
    useEffect(() => {
        if (!circleRef.current) return;

        const numLinks = links.length;
        const circle = circleRef.current;
        const angle = (Math.PI) / numLinks;
        const radius = circle.clientHeight * 0.5;


        links.forEach((link, index) => {
            const linkHolderEl = document.createElement('div');
            linkHolderEl.className = styles['link-holder'];
            const linkEl = document.createElement('a');
            linkEl.href = link.link;
            linkEl.className = styles.link;
            linkHolderEl.style.transform = `rotate(${(Math.PI * 0.4 - angle * index).toFixed(5)}rad) translate(${radius + (index * index)}px) rotate(${-(
                Math.PI * 0.4 - angle * index
            ).toFixed(5)}rad)`;
            linkEl.textContent = link.name;
            linkHolderEl.appendChild(linkEl);
            circle.appendChild(linkHolderEl);
        }, [links]);

        // Update circle size dynamically based on the container width
        const handleResize = () => {
            if (circleRef.current) {
                const containerWidth = circleRef.current.parentElement?.clientWidth || 400; // Default width if not available
                const newSize = Math.min(containerWidth, 400); // Set maximum circle size to 400px
                setCircleSize(newSize);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [links]);

    return (
        <div className={styles.container}>
            <div
                ref={circleRef}
                className={`${styles.holder} w-${circleSize} h-${circleSize}`}
                style={{ borderRadius: `${circleSize}px` }}
            >
                <div className={styles.circle} />
                <div className={styles.center}>
                    <Image
                        src="/pfp.png"
                        loading="lazy"
                        width={1024}
                        height={1024}
                        alt="My profile picture"
                        title='Sujal Choudhari'
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default CircularLinks;
