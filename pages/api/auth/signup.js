import { connectToDB } from "../../../lib/db";
import { hashPassword } from "../../../lib/encryptPassword";

async function signupHandle(req, res) {
  if (req.method !== "POST") return;
  const data = req.body;
  const { name, email, password } = data;
  const client = await connectToDB();

  if (!name || !email || !password) {
    res
      .status(422)
      .json({ status: "error", message: "Something went wrong!!" });
  }
  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    res
      .status(422)
      .json({
        status: "error",
        message: "Email address already exists!!",
      });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);
  const newUser = await db
    .collection("users")
    .insertOne({ name, email, password: hashedPassword });

  return res
    .status(201)
    .json({ status: "success", message: "User created!!", data: newUser });
}

export default signupHandle;
