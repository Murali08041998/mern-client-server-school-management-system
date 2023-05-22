var express = require('express');
var router = express.Router();
const UserController=require('../controllers/users')
const auth=require('../common/auth')

router.post('/signup',UserController.handleSignup)

router.post('/login',UserController.handleLogin)

router.get('/all',UserController.GetallUser)
router.put('/edit-user/:id',UserController.handleGetUserDetails)
router.get('/:id',UserController.GetUserById)
router.delete('/delete-user/:id',UserController.DeleteUserById)
module.exports = router;
