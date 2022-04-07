const express = require('express');
const app = express ();
const {readData,writeData} = require('./utils/db.utils')
app.get('/',async (req,res)=>{
    try{
        const student = await readData()
        return res.status(200).send(student)
    }
    catch(err){
        return res.status(500).send({
            error : err
        })
    }
});
app.listen(3000,()=>{
    console.log('Listening on port 3000');
})