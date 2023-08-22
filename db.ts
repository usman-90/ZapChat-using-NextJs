import { MongoClient, ServerApiVersion } from "mongodb";
const url: string = process.env.DATABASE_URL || "";
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const user_collection = async () => {
  await client.connect();
  const db = client.db("zapchat");
  const user_collection = db.collection("users");
  const chat_collection = db.collection("chats");
  return [user_collection, chat_collection];
};
