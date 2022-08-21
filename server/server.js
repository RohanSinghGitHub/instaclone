const express = require("express");
const multer = require("multer")();
const mongoose = require("mongoose");
const cors = require("cors");
const postModal = require("./postmodal");
require ('dotenv').config();
const app = express();





app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({extended: false}));
app.use(multer.array());
app.use(cors());

mongoose.connect("mongodb+srv://rohan10xacadmey:rohan123@instagran.zhscx.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("connected to instaclone db");
},(err)=>{
    console.log(err);
});
app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log("Server Started at port 3001");
    }else{
        console.log(err);
    }
});


app.get("/post",(req,res)=>{
    postModal.find().then((itemData)=>{
        res.status(200).send({item : itemData})
    }).catch((err)=>{
        console.log(err);
    })
    
});


app.post("/post",(req,res)=>{
        postModal.create({name: req.body.name,location: req.body.location,
        likes: req.body.likes,description: req.body.description,postImage: req.body.postImage,date:req.body.date}).then((data)=>{
            res.status(200).send({data});
        }).catch((err)=>{
            res.status(400).send(err);
        })
});