import { connectToDb } from "./mongodb";
const dbName = "cosengregistrations";
export async function saveToDatabase(userData, dataCollection) {
  try {
    const db = await connectToDb(dbName);
    const collection = db.collection(dataCollection);
    await collection.insertOne(userData);
  } catch (err) {
    return;
  }
}
