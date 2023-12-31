import Auth from "../models/authSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userLogIn = async (req, res) => {
  const auth = await Auth.findOne({ email: req.body.email });
  if (!auth) {
    res.status(400).json({ error: "User or Passwrd incorrect" });
  }
  const comparePassword = bcrypt.compare(req.body.password, auth.password);
  if (!comparePassword) {
    res.status(400).json({ error: "User or Passwrd incorrect" });
  }
  const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET);

  res.status(200).send({ token });
};

export const userSignUp = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 5);
  const user = new Auth({
    ...req.body,
    password: hash,
  });
  await user.save();
  const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET);

  res.status(200).send({ token });
};
