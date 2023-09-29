import express from "express";
const productRoutes = express.Router();
import {
  getAllProducts,
  setProducts,
} from "../controller/productController.js";

productRoutes.get("/", getAllProducts);
productRoutes.post("/", setProducts);

export default productRoutes;
