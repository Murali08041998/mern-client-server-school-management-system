var express = require('express');
var router = express.Router();
var StudentController=require('../controllers/studentdetails')

router.get('/all',StudentController.GetAllStudent)
router.post('/signsup',StudentController.PostStudent)
router.get('/:id',StudentController.GetStudentById)
router.put('/edit-student/:id',StudentController.EditStudentById)
router.delete('/delete-student/:id',StudentController.DeleteStudentById)
module.exports = router;
