const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Welcome to homepage')
});

// app.get('/products', (req, res)=>{
//     const products = [
//         {
//             id: 1,
//             product: "computer"
//         },
//         {
//             id: 2,
//             product: "iphone"
//         },
//         {
//             id: 1,
//             product: "MacBook"
//         }
//     ]

//     res.json(products);
// });


app.get('/products/:id', (req, res)=>{
    const productId = parseInt(req.params.id);
    const products = [
        {
            id: 1,
            product: "computer"
        },
        {
            id: 2,
            product: "iphone"
        },
        {
            id: 3,
            product: "MacBook"
        }
    ]

    const findSingleProduct = products.find(products=>products.id === productId);
    if(findSingleProduct)
    {
        res.json(findSingleProduct.product);
    }
    else{
        res.status(400).send('Invalid Id');
    }
})

app.listen(port, ()=>
{
    console.log('Server is running')
})