import React from 'react'
import { createClient } from 'next-sanity'
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from "../styles/Projects.module.css";

function Projects(props) {
    const { projects } = props;

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
        'Show all projects',
        'Show projects',
        'Show all projects created by Sujal',
        'Show me some projects created by Sujal',
        'Show me some projects',
        'Create a list of projects created by Sujal',
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
        <div className={styles['container']}
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
                className={`${styles['output-card-section']} ${showOutput ? styles['output-section-show'] : ""}`}>
                {projects.map((project) => {
                    return (
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Link href={`/projectpage/${project._id}`} key={project._id}>
                                <motion.div
                                    key={project._id}
                                    className={styles["box"]}

                                >
                                    <motion.div
                                        className={styles['project-image-holder']}
                                        variants={cardVariants}
                                    >
                                        <img className={styles['project-image']} src={project.image.url} alt="" />
                                    </motion.div>
                                    <h2 className={styles['project-title']} >{project.title}</h2>
                                </motion.div>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.section>
        </div>
    );
}

export default Projects;

export async function getServerSideProps() {
    const client = createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        useCdn: process.env.SANITY_USE_CDN,
    })

    const query = '*[_type == "project"]{title,_id,body,slug,"image" : mainImage.asset->{url},tag[]->{title}}'
    const projects = await client.fetch(query)

    return {
        props: {
            projects
        }
    }

}