const express=require('express');
const { addTask, updateTask, deleteTask } = require('../controllers/listController');
const router=express.Router();


router.route('/addTask').post(addTask);
router.route('/updateTask/:id').put(updateTask);
router.route('/deleteTask/:id').delete(deleteTask);




module.exports=router;