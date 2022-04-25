const express = require('express');
const app = express ();
const studentRouter = require('./routes/student.routes')
const mongoose = require('mongoose')   

// db connection 
mongoose.connect('mongodb://localhost:27017/crud')
    .then(()=> console.log('Connected to MongoDb'))
    .catch((err)=> console.error('Could not connect to MongoDb'))

//req,res
//middleware -> callback -> req,res -> access , modify
// request response cycle  

app.use(express.json()); // parse data receives from user
app.use((req,res,next)=>{
    console.log('I am middleware');
    next()
})

// connecting router 
app.use('/api',studentRouter);

app.use((req,res)=>{
    return req.status(404).send('Resource Not Found')
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})  