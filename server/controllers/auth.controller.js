import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  // console.log(req.body)
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync("password", 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save(); //this will take some time so use await
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json(error.message)
  }
};
