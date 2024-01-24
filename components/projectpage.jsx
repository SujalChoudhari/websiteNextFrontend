import React, { useEffect, useState } from 'react';
import styles from '../styles/Projectpage.module.css';
import PortableText from 'react-portable-text';

function ProjectPage({ id }) {
    const [project, setProject] = useState({});

    const showProject = async () => {
        const res = await fetch(`/api/getProject?slug=${id}`);
        const { project } = await res.json();
        setProject(project);
        console.log(project)
    };

    useEffect(() => {
        showProject();
    }, []);


    const handleDestroy = () => {
        const projectPage = document.querySelector(`.${styles.main}`);
        projectPage.classList.add(styles['destroy']);
    };

    return (
        <div className={styles.main}>
            <div className={styles['overlay']}></div>
            <div className={styles.container}>
                <div className={styles['image-container']}>
                    <img className={styles['image']} src={project.image} alt={project.title} />
                </div>
                <div className={styles['project-data']}>
                    <h1 className={styles['project-title']}>{project.title}</h1>
                    {project.body && (
                        <PortableText
                            className={styles['project-body']}
                            content={project.body}
                            projectId={process.env.SANITY_PROJECT_ID}
                            dataset={process.env.SANITY_DATASET}
                        />
                    )}
                    <div className={styles['category-holder']}>
                        {project.categories && <h3>Tags</h3>}
                        {project.categories && project.categories.map((category, index) => (
                            <div key={index}>
                                <h4>{category.title} </h4>
                                <p>{category.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles['close-button']} onClick={handleDestroy}>
                    X
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
