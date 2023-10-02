import express from "express";
const productRoutes = express.Router();
import {
  getAllProducts,
  setProducts,
  getProductByCategory,
  getProductById,
  searchProducts,
} from "../controller/productController.js";

productRoutes.post("/", setProducts);
productRoutes.get("/", getAllProducts);
productRoutes.get("/category", getProductByCategory);
productRoutes.get("/id", getProductById);
productRoutes.get("/search", searchProducts);

export default productRoutes;
