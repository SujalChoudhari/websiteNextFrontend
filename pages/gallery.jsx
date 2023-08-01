import React from 'react'
import { useState } from 'react'
import { createClient } from 'next-sanity'
import ImageGallery from 'react-image-gallery';
import styles from '../styles/Gallery.module.css'

function Gallery(props) {
    const { urls } = props;
    return (
        <div className={styles.container}>
            <ImageGallery 
            items={urls}
            lazyLoad={true}
            className={styles.gallery}
            thumbnailPosition='bottom'
            autoPlay={true}
            slideInterval={3000}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
             />

        </div>
    )
}

export default Gallery


export async function getServerSideProps() {
    const client = createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        useCdn: process.env.SANITY_USE_CDN,
    })

    const query = '*[_type == "art"]{title,_id,slug,"image" : mainImage.asset->{url},tag[]->{title}}'
    var images = await client.fetch(query)
    const urls = [];
    images.map(image =>
        urls.push(
            {original: image.image.url,
            originalTitle:image.title,
            description: image.title,
            thumbnail: image.image.url,
        })
    )
    images = images.sort( ()=>Math.random()-0.5 );
    return {
        props: {
            urls: urls
        }
    }

}