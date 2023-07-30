import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import VideoBackgroundPlayer from '../components/video-player';
import { aboutMe } from '../components/data';
import styles from '../styles/About.module.css';

function About() {


    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const startAnimation = () => {
        setText('');
        setTitle('About Me');
        const words = aboutMe.split(" ");
        let wordIndex = 0;

        const animateText = () => {
            if (wordIndex < words.length) {
                setText((text) => (text ? text + ' ' : '') + words[wordIndex]);
                wordIndex++;
                requestAnimationFrame(animateText);
            }
        };

        animateText();
    };




    
    return <>
        <VideoBackgroundPlayer src="./abstract1.mp4" />

        <div className={styles.container}>
            <div>
                <Image className={styles['image-left']} src="/sujal.png" alt="Picture of the author" width={400} height={300} onLoad={startAnimation}/>
            </div>
            <div>
                <div className={styles['output-container']}>
                    <div className={styles['output-title']}>{title}</div>
                    <div className={styles['output-text']}>
                        {text}
                    </div>
                </div>
                <div className={styles['input-container']}>
                    Who is Sujal
                    <span className={styles['send-button']}
                        onClick={startAnimation}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="none" class="h-4 w-4 m-1 md:m-0"
                            strokeWidth="2">
                            <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </>
}

export default About;
