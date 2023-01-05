import { MongoClient } from "mongodb"

export default async function handler(req, res) {
    const url = process.env.MONGODB_URL
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
    const dbName = 'guestbook';

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('comments');

    var result =  await collection.find({}).toArray();
    result.slice(0,10)
    res.status(200).json({ message: 'Success', comments: result })
}