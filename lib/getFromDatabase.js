import { connectToDb } from "./mongodb";

/**
 * Fetches data from a specified MongoDB collection.
 *
 * @param {string} collectionName - The name of the collection to fetch from.
 * @param {Object} [query={}] - Optional: The query filter.
 * @param {Object} [options={}] - Optional: Fetch options (sort, limit, etc).
 * @param {string} [dbName="cosengwebsite"] - Optional: The name of the database to use.
 * @returns {Promise<Array>} - The fetched data as an array.
 */
export async function getFromDatabase(collectionName, query = {}, options = {}, dbName = "cosengwebsite") {
  try {
    const db = await connectToDb(dbName);
    if (!db) return []; // Fallback if db connection failed
    
    const collection = db.collection(collectionName);
    
    let cursor = collection.find(query);
    
    if (options.sort) {
      cursor = cursor.sort(options.sort);
    }
    
    if (options.limit) {
      cursor = cursor.limit(options.limit);
    }

    const result = await cursor.toArray();
    
    // Convert MongoDB _id to string for Next.js compatibility
    return result.map(doc => ({
      ...doc,
      _id: doc._id.toString(),
    }));
  } catch (error) {
    console.error(`Error fetching from collection ${collectionName}:`, error);
    return []; // Return empty array on failure
  }
}

/**
 * Fetches a single document from a specified MongoDB collection.
 *
 * @param {string} collectionName - The name of the collection to fetch from.
 * @param {Object} query - The query filter.
 * @param {string} [dbName="cosengwebsite"] - Optional: The name of the database to use.
 * @returns {Promise<Object|null>} - The fetched document or null.
 */
export async function getOneFromDatabase(collectionName, query, dbName = "cosengwebsite") {
  try {
    const db = await connectToDb(dbName);
    if (!db) return null; // Fallback if db connection failed
    
    const collection = db.collection(collectionName);
    
    const doc = await collection.findOne(query);
    
    if (!doc) return null;

    return {
      ...doc,
      _id: doc._id.toString(),
    };
  } catch (error) {
    console.error(`Error fetching single document from collection ${collectionName}:`, error);
    return null; // Return null on failure
  }
}
