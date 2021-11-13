const express = require("express");
const path = require("path")
require("./db/conn")
const hbs = require ("hbs");
const app = express();
const port = process.env.PORT || 8888;

//middleware and how to use static html page 
const staticPath = path.join(__dirname,"../public");
const templatesPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");
//app.use(express.static(staticPath));

//How to import bbotstarp in our app.js file ---------
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

//Now i want to set view engin
app.set("view engine","hbs")
app.set("views",templatesPath);
hbs.registerPartials(partialsPath);

//Routing Part 
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/contact",(req,res)=>{
  res.render("contact")
})

//server create 
app.listen(port,() =>{
  console.log(`serevr os running at port number ${port}`);
})