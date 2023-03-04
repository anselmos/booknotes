// this import will only be available on server side (next-js does only includes imports if used by client side)
import { MongoClient } from "mongodb";

export const mongoClient = () => {
  return MongoClient.connect(
    "mongodb://anselmos:mongoPass@localhost:27017/?retryWrites=true&w=majority"
  );
};

export async function getBooks() {
  const client = await mongoClient();
  const db = client.db();
  const collection = db.collection("books");
  const books = await collection.find().toArray();

  console.log(books);

  client.close();
  return books;
}
