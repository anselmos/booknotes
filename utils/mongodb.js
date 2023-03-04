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
  client.close();
  return books;
}

export async function getOneBook(bookId) {
  console.log(bookId);
  const client = await mongoClient();
  const db = client.db();
  const collection = db.collection("books");
  const book = await collection.findOne({
    bookId: bookId,
  });
  client.close();
  console.log(book);
  return book;
}