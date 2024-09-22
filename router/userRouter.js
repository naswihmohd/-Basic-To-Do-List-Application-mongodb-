const express=require('express')
const userControll=require('../controller/userController')

const router = express.Router()
router.use(express.json())


router.get('/todos',userControll.getItems)
router.post('/todos',userControll.addItem)
router.get('/todos/detail/:id',userControll.getOneItem)
router.get('/todos/:id/:status',userControll.doneItem)
router.get('/todosDe/:id',userControll.removeItem)

module.exports=router