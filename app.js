const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=5000;

app.use(express.static('static')); //to serve static files
//the folder called views contains all templates 

app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    res.render("index.pug");
})

app.get("/books",(req,res)=>{
    res.render("books.pug");
})

app.get("/skin",(req,res)=>{
    res.render("skin.pug");
})

app.get("/pop",(req,res)=>{
    res.render("pop.pug");
})

app.get("/word",(req,res)=>{
    res.render("word.pug");
})

app.listen(port,()=>{
    console.log("this is active website");
})