const express=require('express');
const { addTask, updateTask } = require('../controllers/listController');
const router=express.Router();


router.route('/addTask').post(addTask);
router.route('/updateTask').put(updateTask);




module.exports=router;