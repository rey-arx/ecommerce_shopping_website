const express = require('express');
const Category = require('./models/category');
const mongoose = require('mongoose');
const cors = require('cors');
// const morgan = require('morgan')
const app= express();
app.use(express.json());

// Enable CORS for all requests
app.use(cors());
app.listen(3001)
const dbURI = 'mongodb+srv://ReyhanMaddy:allah786@teamtrack.offsab8.mongodb.net/ecommerce_website?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console. log('connected to db'))
.catch((err) => console.log(err));
app.get('/add-category',(req,res)=>{
const category = new Category({
    title:'MEN SHOES COLLECTION',
    body:'Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.',
    button:'SHOP MEN'
});
    category.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
     }); 
})
//To get the category
app.get('/api/category', async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
