import express from "express";
import multer from 'multer';
import multerConfig from './config/multer';

import ProductsController from './controllers/ProductsController';

const routes = express.Router();

const productsController = new ProductsController();

routes.get("/products", productsController.index);

export default routes;
