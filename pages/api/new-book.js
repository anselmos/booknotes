import { addNewBook } from "../../utils/mongodb";

// POST /api/new-book
export default async function handle(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    console.log("Adding book ", data);
    const output = await addNewBook(data);

    res.status(201).json({ message: "Book inserted!", output: output });
  }
}
