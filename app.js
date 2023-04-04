const express = require("express");
const app = express();
const server = app.listen(process.env.PORT || 8081, ()=>console.log("Listening on 8081"));

app.use(express.static("public"));

app.locals.items = require('./items.json').items;

app.get('/api/v1/items',(req,res)=>{
    res.json(app.locals.items);
})

