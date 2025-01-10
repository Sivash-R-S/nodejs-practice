const express = require("express");
const cors=require("cors");

const app=express();
const options={orgin:"*"}

app.use(cors(options));
app.use(express.json());

let studentData =[
    {
    name:"sivash",
    age:22,
    rollNumber:103
},
];
app.post('/',(req,res)=>{
    studentData.push(req.body);
    console.log(req.body);
    res.send("Done")
})
const data=["world",123,{"key":"value"}];

app.get('/',(req,res)=>{
    res.send(data)
})

app.get('/student',(req,res)=>{
    res.send(studentData)
})
app.listen(3333,()=>{
    console.log("started")
})




