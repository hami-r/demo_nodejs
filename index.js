const express = require('express');
const productRoute = require('./src/routes/product.route');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})

app.use(productRoute);
app.get("/",(req,res)=>{
    res.send("Hiiiiiiiiiii");
})