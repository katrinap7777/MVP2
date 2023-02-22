const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM product");   
        res.json(allProducts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await pool.query("SELECT * FROM product WHERE id = $1", [id]);       
        res.json(product.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// app.get("/products", async (req, res) => {
//     try {
//      const result = await pool.query(
//        `SELECT id, title, description, price, image FROM product`
//      );
//      res.json(result.rows);
//    } catch (error) {
//      throw Error(error);
//    }
//  });

app.listen(5001, () => {
    console.log("Server started on port 5001");
});