const mongoose=require('mongoose')

const todoSchema=mongoose.Schema({
    id:{
        type:Number,
        default: Date.now()
    },
    task:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const todoModel=mongoose.model("todos",todoSchema)
module.exports=todoModel