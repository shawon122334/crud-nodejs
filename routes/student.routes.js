const studentRouter = require('express').Router() 
const {
    getData,
    createData,
    getSingleData,
    updateData,
    deleteData
} = require('../controllers/student.controller')


studentRouter.route('/')
    .get(getData)
    .post(createData)

studentRouter.route('/:id')
    .get(getSingleData)
    .patch(updateData)
    .put(updateData)
    .delete(deleteData)

module.exports = studentRouter;