const express=require('express')
const app=express();

app.use(express.json());
const auth=require('./routes/auth')
const list=require('./routes/list');

app.use('/api/v1',auth)
app.use('/api/v1',list);

module.exports=app;
