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
        image_url: item.image
        // image_url: `https://paguru-challenge-api.herokuapp.com/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ProductsController;
