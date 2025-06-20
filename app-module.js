const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.send('This is home page');
})

app.post('api/data', (req, res)=>{
    res.json({
        message: 'Data recieved',
        data: req.body
    })
})

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).send('something wrong');
})