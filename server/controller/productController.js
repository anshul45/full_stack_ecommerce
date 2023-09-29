import Products from "../models/productSchema.js";
export const getAllProducts = async (req, res) => {
  const products = await Products.find();
  res.status(200).send(products);
};

export const setProducts = async (req, res) => {
  const data = req.body;
  const addProduct = new Products({
    ...data,
  });
  await addProduct.save();
  res.status(201).json("added products sucessfully");
};
