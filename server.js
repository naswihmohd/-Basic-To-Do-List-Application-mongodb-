const express = require('express')
const userRouter=require('./router/userRouter')
const dbConnection = require('./config/dbConnection')

const app=express()
dbConnection()
app.use('/',userRouter)
app.set("view engine","hbs")
app.set("views","./views")


app.listen(3000,()=>{
    console.log('server is running');
})