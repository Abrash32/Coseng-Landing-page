import { connectToDb } from "./mongodb";

/**
 * Saves data to a specified MongoDB collection.
 * 
 * @param {Object} data - The data object to be saved.
 * @param {string} collectionName - The name of the collection to insert the data into.
 * @param {string} [dbName="cosengregistrations"] - Optional: The name of the database to use.
 * @returns {Promise<import('mongodb').InsertOneResult>}
 */
export async function saveToDatabase(data, collectionName, dbName = "cosengregistrations") {
  try {
    const db = await connectToDb(dbName);
    const collection = db.collection(collectionName);
    
    // Add a timestamp for tracking
    const dataWithTimestamp = {
      ...data,
      createdAt: new Date(),
    };
    
    const result = await collection.insertOne(dataWithTimestamp);
    return result;
  } catch (error) {
    console.error(`Error saving to collection ${collectionName}:`, error);
    throw new Error("Failed to save data to the database");
  }
}
