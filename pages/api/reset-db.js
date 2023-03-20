import { resetCollection } from "../../utils/mongodb";
export default async function handler(req, res) {
  await resetCollection();
  return res.json({ done: "true" });
}
