import React from 'react'
import { useState } from 'react'
import { createClient } from 'next-sanity'
import ImageGallery from 'react-image-gallery';

function Projects(props) {
    const { urls } = props;

    const [currentImage, setCurrentImage] = useState(0);

    function gotoNext(){
        setCurrentImage(currentImage+ 1);
    }

    function gotoPrevious(){
        setCurrentImage(currentImage-1);
    };

    function closeViewer(){
        window.history.back();
    }

    return (
        <>
            <ImageGallery 
            items={urls}
            lazyLoad={true}
            
            thumbnailPosition='right'
            showIndex={true}
            indexSeparator=' of '
            
             />

        </>
    )
}

export default Projects


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