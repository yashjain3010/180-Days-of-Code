const express = require('express');
const router = express.Router();
const zod = require('zod');
const { User, Account } = require('../db');
const jwt = require('jsonwebtoken');
const {authMiddleware} = require('../middleware');
const {JWT_SECRET} = require('../config');


const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

const signinBody = zod.object({
    username : zod.string().email(),
    password : zod.string()
})


router.post('/signup',async (req,res) => {
    //  const { success } = signupBody.safeParse(req.body);
    //  if(!success){
    //      return res.status(411).json({
    //      message : "Email already taken/Incorrect Inputs"
    //     })
    //  }

    const existingUser = await User.findOne({
        username : req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message : "Email already taken/Incorrect Inputs"
        })
    }

    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance : 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        message : "User create Successfully",
        token : token
    })
})

router.post('/signin',async (req,res) => {
    const { success } = signinBody.safeParse(body);
    if(!success){
        res.status(411).json({
            message : "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET);
        res.json({
          token: token,
        });
        return;
    }

    res.status(411).json({
        message : "Error after logging in"
    })
    
})

const updateBody = zod.object({
    password : zod.string().email(),
    firstname : zod.string().optional(),
    lastname : zod.string().optional(),
})

router.put('/',authMiddleware,async(req,res) => {
    const {success} = updateBody.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message : "Error while updating information"
        })
    }

    await User.updateOne({_id : req.userId},req.body);
    res.json({
        message : "Update Successfully"
    })
})

router.get('/bulk',async(req,res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname : {
                "$regex" : filter
            }
        }, {
            lastname : {
                "$regex" : filter
            }
        }]
    })

    res.json({
        user: User.map(user => ({
            username : req.username,
            firstname : req.firstname,
            lastname : req.lastname,
            _id : user._id
        }))
    })
})


module.exports = router;