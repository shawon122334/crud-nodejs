const express = require('express');
const app = express ();
const studentRouter = require('./routes/student.routes')

//middleware
app.use(express.json()); // parse data receives from user

// connecting router 
app.use('/api',studentRouter);

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})  