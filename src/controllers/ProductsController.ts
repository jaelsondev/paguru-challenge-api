import { Request, Response } from "express";
import knex from "../database/connection";

class ProductsController {
  async index(request: Request, response: Response) {
    const items = await knex("products").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        image_url: `http://192.168.1.6:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ProductsController;
