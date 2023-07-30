import React, { useEffect, useState } from 'react';
import styles from '../styles/Cursor.module.css';


export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);



    const cursorStyle = {
        left: `${mousePosition.x - 8}px`,
        top: `${mousePosition.y - 8}px`,
        transform: 'scale(1)',
    };

    return (
        <div className={styles.cursor} style={cursorStyle} />
    );
}
