import jwt from "jsonwebtoken";
import Auth from "../models/authSchema.js";

export const verifyUser = (req, res, next) => {
  const token = req.headers.accesstoken;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) {
        res.status(403).send("You Are Not authorized");
      }
      const data = await Auth.findOne({ email: user.email }).select(
        "-password"
      );
      req.user = data;
      next();
    });
  } else {
    res.status(403).send("You Are Not authorized");
  }
};
