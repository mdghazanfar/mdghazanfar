import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || '';

if (!uri || !dbName) {
  throw new Error('Please define MONGODB_URI and MONGODB_DB in .env.local');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Use the global object to store a reusable client promise
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      const client = await clientPromise;
      const db = client.db(dbName);
      const collection = db.collection('contacts');

      const result = await collection.insertOne({ name, email, message, createdAt: new Date() });

      return res.status(200).json({ message: 'Your message has been saved!', id: result.insertedId });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while saving your message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
