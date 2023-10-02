import Products from "../models/productSchema.js";

export const setProducts = async (req, res) => {
  const data = req.body;
  const addProduct = new Products({
    ...data,
  });
  await addProduct.save();
  res.status(201).json({ sucess: "added products sucessfully" });
};

export const getAllProducts = async (req, res) => {
  const products = await Products.find();
  res.status(200).send(products);
};

export const getProductByCategory = async (req, res) => {
  const { category } = req.query;
  if (!category) {
    return res
      .status(400)
      .json({ error: "Category is required in the query parameters" });
  }
  const productaByCategory = await Products.find({
    category,
  });
  res.status(200).send(productaByCategory);
};

export const getProductById = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res
      .status(400)
      .json({ error: "product id is required in the query parameters" });
  }
  const ProductById = await Products.find({
    _id: id,
  });
  res.status(200).send(ProductById);
};

export const searchProducts = async (req, res) => {
  const { search } = req.query;
  if (!search) {
    return res
      .status(400)
      .json({ error: "value is required in the query parameters" });
  }
  const productaBySearch = await Products.find({
    title: search,
  });
  res.status(200).send(productaBySearch);
};
