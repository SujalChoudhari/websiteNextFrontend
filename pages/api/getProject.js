// pages/api/project.js
import { createClient } from 'next-sanity';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { slug: id } = req.query;

    const client = createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        useCdn: process.env.SANITY_USE_CDN,
    });

    const query = `*[_id=="${id}"][0]{
    title,
    "image" : mainImage.asset->url,
    "slug": slug.current,
    body,
    categories[]->{title}
  }`;

    try {
        const project = await client.fetch(query);
        return res.status(200).json({ project });
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching project data' });
    }
}
