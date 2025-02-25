const express=require('express');
const { addTask, updateTask, deleteTask, getTask } = require('../controllers/listController');
const router=express.Router();


router.route('/addTask').post(addTask);
router.route('/updateTask/:id').put(updateTask);
router.route('/deleteTask/:id').delete(deleteTask);
router.route('/getTask/:id').get(getTask)




module.exports=router;