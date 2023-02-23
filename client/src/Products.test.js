const request = require("supertest");
// const path = require("path");
// const jestOpenAPI = require("jest-openapi").default;
const app = require("../app");
const db = require("../db");
const { default: Products } = require("./Products");


// jestOpenAPI(path.join(__dirname, "../apispec.yaml"));

describe("GIVEN that the GET /products route exist", () => {
  afterAll(() => {
    db.end();
  });

  test("WHEN there are products THEN return status 200 and an array of products", async () => {

    const products = await Products();

    

    const expectedResponseData = {
      products
    };

    const response = await request(app)
      .get("/products")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseData);
  });

  test("WHEN there are no products THEN return status 200 and an empty array", async () => {

    const expectedResponseData = {
      products: [],

    };

    const response = await request(app)
      .get(`//products`)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseData);

  });

});