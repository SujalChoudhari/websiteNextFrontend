import React, { useState } from 'react';
import { createClient } from 'next-sanity';
import { motion } from 'framer-motion';
import styles from '../styles/Notes.module.css';
import Link from 'next/link';

function Notes(props) {
    const { notes } = props;

    const cardVariants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.0,
                duration: 0.8
            }
        }
    };

    const inputTexts = [
        'Generate Academic Notes',
        'Generate Notes',
        'Regenerate Notes created by Sujal',
        'Generate Notes created by Sujal',
    ]

    const [inputText, setInputText] = React.useState('Projects created by Sujal');
    const changeInputText = () => {
        const randomIndex = Math.floor(Math.random() * inputTexts.length);
        setInputText(inputTexts[randomIndex]);
    }

    const [showOutput, setShowOutput] = React.useState(true);

    const showOutputHandler = () => {
        setShowOutput(false);
        setTimeout(() => {
            setShowOutput(true);
        }, 200);
    }

    return (
        <section className={styles['container']}
        >
            <div className={styles['input-container']}>
                <p className={styles['input-title']}>Start with a detailed description
                    <span onClick={changeInputText} className={styles['input-surprise']}> Surprise Me</span>
                </p>
                <div className={styles['input-text']}>
                    {inputText}
                    <div
                        onClick={showOutputHandler}
                        className={styles['generate-button']}>Generate</div>
                </div>
                <div className={styles['input-subtitle']}>
                    <p>Or,</p>
                    <b>upload an image</b>
                    <p>to edit</p>
                </div>
            </div>
            <motion.section
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`${styles['output-card-section']} ${showOutput ? styles['output-section-show'] : ''
                    }`}
            >
                {notes.map((note) => {
                    return (
                        <Link href={note.link} key={note._id}>
                            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
                                <div key={note._id} className={styles['box']}>
                                    <motion.div className={styles['project-image-holder']} variants={cardVariants}>
                                        <img className={styles['project-image']} src={`https://source.unsplash.com/720x400/?${note.slug}`} alt="" />
                                    </motion.div>
                                    <h2 className={styles['project-title']}>{note.title}</h2>
                                </div>
                            </motion.div>
                        </Link>
                    );
                })}
            </motion.section>
        </section>
    );
}

export default Notes;

export async function getServerSideProps() {
    const client = createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        useCdn: process.env.SANITY_USE_CDN,
    })


    const query = `*[_type == "notes"]{
        title,
        _id,
        link,
        "slug": slug.current,
        languages[]->{title},
        "date": publishedAt
    }`
    const notes = await client.fetch(query)

    return {
        props: {
            notes
        }
    }

}   