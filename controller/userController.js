const todo = require('../models/todos')


module.exports.getItems = async (req, res) => {
    const todos = await todo.find()
    res.render('index', { todos })
}

module.exports.addItem=async(req,res)=>{
console.log(req.body)
}

module.exports.getOneItem = async (req, res) => {
    const Id = req.params.id
    const todoItem = await todo.findOne({ id: Id })
    res.render('detail', { todoItem })
}

module.exports.doneItem = async (req, res) => {
    const Id= req.params.id
    const status = req.params.status
    if (status=="true") {
        await todo.updateOne({ id:Id }, {
            $set: {
                completed: false
            }
        })
    } else {
        await todo.updateOne({ id:Id }, {
            $set: {
                completed: true
            }
        })
    }
    res.redirect('/todos')
}

module.exports.removeItem=async(req,res)=>{
    const Id = req.params.id
    await todo.deleteOne({id:Id})
    console.log('hi')
    res.redirect('/todos')
}