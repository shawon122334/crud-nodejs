const {readData,writeData} = require('../utils/db.utils')

const getData = async (req,res)=>{
    try{
        const student = await readData()
        return res.status(200).send(student)
    }
    catch(err){
        return res.status(500).send({
            error : err
        })
    }
}

const createData = async (req,res)=>{
    try{
         // console.log(req.body); // posted data will be in request body. we just push req body to student
         const student = await readData();         // read data and store them in student
         student.push(req.body)                    // push data from user in student
         const result = await writeData({data: student}) // send data object to writeData()
         // we will receive either err or success from writeData ()
         if (result === 'success'){
             // if it is success send a message and data to user 
             return res.status(201).send({
                 message : 'Student data created successfully',
                 data : req.body 
             })
         }
    } 
    catch (err){
        return res.status(500).send({
            error : err
        })
    }
 
 }

const getSingleData = async (req, res) => {
    const id = req.params.id;
    try{
        const students = await readData()
        const findId = students.filter(item=> item.id === id)[0] // filter returns an array. we pick first item from the array
        if (findId) return res.status(200).send(findId) 
        return res.status(404).send('Not Found')
    }
    catch(err){
        res.status(500).send({
            error : err 
        })
    }
}

const updateData = async (req,res)=>{
    const id = req.params.id
    try{
        const student = await readData()
        const newStudent = student.map(item=>{
            if (item.id === id ){
                return {
                    ...item,
                    ...req.body 
                }
            } return item
        });
        // map returns an array, we take the first element of the array 
        const student1 = newStudent.filter(item=> item.id === id)[0]
        let result = null
        if(student1) result = await writeData({data:newStudent}) 
        if(result) return res.status(200).send({
            message : 'student updated successfully',
            data : student1
        })
        return res.status(404).send('no data found')
    }
    catch (err){
        return send(500).send({
            error : err
        })
    }
}

const deleteData = async (req,res) => {
    const id = req.params.id;
    try{
        const students = await readData();
        const delStudent = students.filter(item => item.id === id)[0]
        const newStudents= students.filter(item=> item.id !== id)
        
        let result = null 
        if(delStudent) result = await writeData({data: newStudents})
        if(result) return res.status(200).send({
            message : 'Student deleted successfully'
        })
        return res.send(404).send('Not Found')
    }
    catch (err){
        return res.status(500).send({
            error : err
        })
    }
}

module.exports = {
    getData,
    createData,
    getSingleData,
    updateData,
    deleteData
}