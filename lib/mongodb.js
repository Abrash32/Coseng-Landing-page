// import { MongoClient } from "mongodb";
// const client = new MongoClient(process.env.MONGODB_URI);
// let db;

// export async function connectToDb(dbName) {
//   try {
//     if (!db) {
//       await client.connect();
//       db = client.db(dbName); // Get the services database
//     }
//     return db;
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// }

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 30000, // Adjust timeout settings
  socketTimeoutMS: 45000, // Optional: Adjust socket timeout for longer operations
});

let db;

export async function connectToDb(dbName) {
  try {
    if (!db) {
      await client.connect();
      db = client.db(dbName); // Get the services database
      // console.log("Connected to MongoDB");
    }
    return db;
  } catch (error) {
    // console.error("Database connection failed:", error);
    throw new Error("Unable to connect to the database"); // Ensure better error propagation
  }
}
