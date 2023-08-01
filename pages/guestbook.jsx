import React from 'react'
import styles from '../styles/Guestbook.module.css'
import SignBook from '../components/mobile-sign-book'
import VideoBackgroundPlayer from '../components/video-player'

function GuestBook(props) {
    const { comments } = props
    return (
        <div className={styles.container}>
            <div className={styles['display-container']}>
                {comments.map(comment => (
                    <div className={styles['comment-container']}>
                            <span className={styles['comment-message']}>"{comment.message}"</span>
                            <div className={styles['comment-name']}>-{comment.name}</div>
                    </div>
                ))}
            </div>
            {/* <div className={styles['input-container']}>
                <input className={styles['name-field']} type="text" name="name" id="name" placeholder="Name" />
                <textarea className={styles['input-field']} name="message" id="message" cols="30" rows="7" placeholder='He is ...'></textarea>
                <button className={styles['submit-button']}>Sign</button>
            </div> */}
            <SignBook/>
        </div>
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