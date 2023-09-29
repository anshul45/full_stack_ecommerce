import mongoose from "mongoose";

export const db = async () => {
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
      console.log("db connection established");
    })
    .catch((err) => console.error(err));
};
