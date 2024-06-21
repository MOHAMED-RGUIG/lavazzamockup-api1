const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const db = require("./db");

const Product = require('./models/productModel');
const productsRoute = require('./routes/productsRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');

dotenv.config();

const app = express();

// Use CORS middleware
app.use(cors({
    origin: "https://lavazzamockup7.onrender.com",
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

// Use relative paths for the routes
app.use('/api/products', productsRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', ordersRoute);

app.get("/", (req, res) => {
    res.send("Server working!!!");
});

/*
app.get('/getproducts', async (req, res) => {
    try {
        const docs = await Product.find({}).exec();
        res.send(docs);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching products');
    }
});*/




app.listen(process.env.PORT, () =>`server running on port `);
