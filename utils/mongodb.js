// this import will only be available on server side (next-js does only includes imports if used by client side)
import { MongoClient } from "mongodb";

export const mongoClient = () => {
  return MongoClient.connect(
    "mongodb://anselmos:mongoPass@localhost:27017/?retryWrites=true&w=majority"
  );
};
export async function getCollection(client) {
  const db = client.db();
  const collection = db.collection("books");
  return collection;
}
export async function getBooks() {
  const client = await mongoClient();
  const collection = await getCollection(client);
  const books = await collection.find().toArray();
  client.close();
  return books;
}

export async function getOneBook(bookId) {
  const client = await mongoClient();
  const collection = await getCollection(client);
  const book = await collection.findOne({
    bookId: bookId.toString(),
  });
  client.close();
  return book;
}
export async function resetCollection() {
  const client = await mongoClient();
  const db = client.db();
  await db.collection("books").drop();
  client.close();
}
export async function getLastBookId() {
  const client = await mongoClient();
  const collection = await getCollection(client);
  const allBooks = await collection.find().toArray();
  let lastBookId = 0;
  for (const bookData of allBooks) {
    const bookDataId = parseInt(bookData.bookId);
    if (bookDataId > lastBookId) {
      lastBookId = bookDataId;
    }
  }
  const bookId = lastBookId + 1;
  client.close();
  return bookId;
}
export async function addNewBook(bookData) {
  console.log("Adding new book", bookData);
  const lastBookId = await getLastBookId();
  const client = await mongoClient();
  const collection = await getCollection(client);

  const data = {
    bookTitle: bookData.bookTitle,
    bookId: lastBookId.toString(),
    chapters: bookData.chapters,
  };

  const result = await collection.insertOne(data);

  client.close();
}