const express=require('express');
const { addTask } = require('../controllers/listController');
const router=express.Router();


router.route('/addTask').post(addTask);




module.exports=router;