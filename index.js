const express = require('express');
require('dotenv').config();
const productRoutes = require('./src/routes/product.routes');
const userRoutes = require('./src/routes/user.routes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})

app.use(productRoutes);
app.use(userRoutes);