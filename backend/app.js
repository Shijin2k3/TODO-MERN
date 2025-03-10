const express=require('express')
const app=express();
const cors=require("cors")

app.use(express.json());
app.use(cors())
const auth=require('./routes/auth')
const list=require('./routes/list');

app.use('/api/v1',auth)
app.use('/api/v1',list);

module.exports=app;
