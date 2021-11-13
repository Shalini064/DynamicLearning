const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/nodedynamic",{
    //useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
  console.log("connection successfully");
}).catch((error)=>{
  console.log(error)
})