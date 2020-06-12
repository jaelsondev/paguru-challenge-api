import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("products").insert([
    {
      name: "Concha New Classic",
      image: "new-classic.png",
      price: 39.97
    },
    {
      name: "Concha Destroyed",
      image: "destroyed.png",
      price: 69.97
    },
    {
      name: "Concha Classic",
      image: "classic.png",
      price: 29.55
    },
    {
      name: "Concha Tie-Dye",
      image: "tie-dye",
      price: 50.55
    },
  ]);
}
