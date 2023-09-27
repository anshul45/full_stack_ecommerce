import express from "express";
const productRoutes = express.Router();
import { getAllProducts } from "../controller/productController";

productRoutes.get("/products", getAllProducts);
