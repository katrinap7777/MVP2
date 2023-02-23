const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const port = 5001;
const server = require('http').Server(app)
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51MeIeBCDSrHORaZXaHh5JNrjHhgQ87hHixYPELgVZk0iesh7brDhdQdUBvipVrGkg6FsUws4JJCqcM5srXChPw3W00Ef5sRcW8');

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

app.get("/test", async (req, res) => {
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

module.exports = server

app.listen(5001, () => {
    console.log(`Server started on ${port}`);
});