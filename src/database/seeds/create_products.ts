import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("products").insert([
    {
      name: "Concha New Classic",
      // image: "new-classic.png",
      image:
        "https://res.cloudinary.com/jaelsondev/image/upload/v1591948967/uploads/new-classic_unthwu.png",
      price: 39.97,
    },
    {
      name: "Concha Destroyed",
      // image: "destroyed.png",
      image:
        "https://res.cloudinary.com/jaelsondev/image/upload/v1591948967/uploads/destoyed_m0kmbx.png",
      price: 69.97,
    },
    {
      name: "Concha Classic",
      // image: "classic.png",
      image:
        "https://res.cloudinary.com/jaelsondev/image/upload/v1591948967/uploads/classic_vtujnl.png",
      price: 29.55,
    },
    {
      name: "Concha Tie-Dye",
      // image: "tie-dye",
      image:
        "https://res.cloudinary.com/jaelsondev/image/upload/v1591948967/uploads/tie-dye_l7zxqh.png",
      price: 50.55,
    },
  ]);
}
