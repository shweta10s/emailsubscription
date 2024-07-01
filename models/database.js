const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/database01")
.then(()=> {
    console.log("Database Connected")
})
.catch((error)=> {
    console.log(error.message)
})