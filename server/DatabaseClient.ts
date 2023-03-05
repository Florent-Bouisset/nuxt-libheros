import { Db, MongoClient } from "mongodb";
// Connection URL
const url = "mongodb://root:example@127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "myProject";

let DatabaseInstance: Db;
export async function getDatabaseInstance() {
  if (!DatabaseInstance) {
    await client.connect();
    DatabaseInstance = client.db(dbName);
  }
  return DatabaseInstance;
}
