import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';

async function sync() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is missing');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('cosengwebsite');
    const collection = db.collection('services');

    const dataRaw = fs.readFileSync('lib/cosengwebsite.services.json', 'utf8');
    const data = JSON.parse(dataRaw);

    // Convert $oid to ObjectId
    const preparedData = data.map(doc => {
      if (doc._id && doc._id.$oid) {
        doc._id = new ObjectId(doc._id.$oid);
      }
      return doc;
    });

    console.log(`Read ${preparedData.length} documents from JSON.`);

    // Replace all existing documents, or drop and insert
    await collection.deleteMany({});
    const result = await collection.insertMany(preparedData);
    console.log(`Inserted ${result.insertedCount} documents successfully.`);
  } catch (err) {
    console.error('Error syncing:', err);
  } finally {
    await client.close();
  }
}

sync();
