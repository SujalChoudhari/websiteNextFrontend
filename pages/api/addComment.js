import { MongoClient } from "mongodb"

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' })
        return
    }

    const { name, message } = req.body

    if (!name || !message) {
        res.status(422).json({ message: 'Invalid Input' })
        return
    }

    const url = process.env.MONGODB_URL
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
    const dbName = 'guestbook';

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('comments');

    await collection.insertOne({ name, message })

    res.status(200).json({ message: 'Success' })
}