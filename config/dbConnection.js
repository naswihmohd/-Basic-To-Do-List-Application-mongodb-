const mongoose=require('mongoose')

const dbConnection=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/todoDb").then(()=>{
        console.log('database connected');
    }).catch((err)=>{
        console.log(err);
        
    })
}

module.exports=dbConnection