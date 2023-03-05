import { MongoClient } from "mongodb";
import jsonEntry from "./collection.json" assert { type: "json" };
// Connection URL
const url = "mongodb://root:example@127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "myProject";
const collectionName = "collection";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  await collection.insertMany(jsonEntry);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
