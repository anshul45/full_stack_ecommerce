import jwt from "jsonwebtoken";
import Auth from "../models/authSchema.js";

export const verifyUser = async (req, res, next) => {
  const token = req.body.accessToken;

  if (!token) res.status(403).send("You Are Not authorized");

  const user = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await Auth.findOne({ email: user.email });
  next();
};
