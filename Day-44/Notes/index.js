const express = require('express');
const z = require('zod');

const app = express();

app.use(express.json());

const userSchema = z.object({
    username : z.string().min(3),
    password : z.string().min(6)
})

app.post('/login',(req,res) => {
    const {username,password} = req.body;

    try{
        userSchema.parse({username,password});
        res.json({success : true})
    }
    catch(error){
        res.status(403).json({error : "Invalid Input",details : error.errors})
    }
})

app.listen(3000);