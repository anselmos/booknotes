import { mongoClient } from "../../utils/mongodb";

// POST /api/new-book
export default async function handle(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    // const {bookTitle, chapters} = data;
    const client = await mongoClient();
    const db = client.db();
    const collection = db.collection("books");
    const result = await collection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Book inserted!" });
  }
}
