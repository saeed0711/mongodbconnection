const express=require("express")
var mongoose=require("mongoose")
mongoose.connect("mongodb+srv://saeedsanadi98:<db_password>@first.eac2q.mongodb.net/test")
.then(()=>{
    console.log("connected");
})
const app=express()

// // mongodb+srv://saeedsanadi98:<db_password>@cluster0.eac2q.mongodb.net/
// const student=new mongoose.Schema({
//     name:String,
//     age:Number,
//     email:String
// })

// const students=new mongoose.model("student",student)

// const adddata= ()=>{
//  students.create({
//     name:"saeed",
//     age:27,
//     email:"saeed@gmial.com"
//  })

// }
// adddata();


// app.get('/',(re,res)=>{
//     res.send("hello from server this is saeed how r u doing")
// })

app.listen(3000,()=>{
    console.log("servr started");
})