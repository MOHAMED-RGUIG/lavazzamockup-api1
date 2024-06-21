const express = require("express");
const path = require('path');
const cors = require('cors');
require("dotenv").config();

const Product = require('./models/productModel');
const db = require("./db");

const productsRoute = require('./routes/productsRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');
// const cartsRoute = require('./routes/cartsRoute');

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
// app.use('/api/carts', cartsRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});



app.listen(process.env.PORT, () =>server running on port );
