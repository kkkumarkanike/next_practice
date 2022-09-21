import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://kalyan:RnuIF4oqvY2DXpbb@practice.i2kvf.mongodb.net/next-users"
  );

  return client;
}
