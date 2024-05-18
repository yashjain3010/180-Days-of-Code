const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

app.post('/form',(req,res) => {
    const username = req.query.username
    res.json({username});
})

app.listen(3000);