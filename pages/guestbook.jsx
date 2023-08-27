import React from 'react'
import styles from '../styles/Guestbook.module.css'
import SignBook from '../components/mobile-sign-book'
import VideoBackgroundPlayer from '../components/video-player'

function GuestBook(props) {
    const { comments } = props
    return (
        <section className={styles.container}>
            <div className={styles['display-container']}>
                {comments.map(comment => (
                    <div className={styles['comment-container']}>
                            <span className={styles['comment-message']}>"{comment.message}"</span>
                            <div className={styles['comment-name']}>-{comment.name}</div>
                    </div>
                ))}
            </div>
            <SignBook/>
        </section>
    )
}

export default GuestBook


export async function getServerSideProps(ctx) {
    // const data = await fetch('http://localhost:3000/api/getComments')
    const data = await fetch('https://sujalchoudhari.vercel.app/api/getComments')
    console.log(data)
    var { comments } = await data.json()
    comments = comments.reverse()
    return {
        props: {
            comments
        }
    }
}