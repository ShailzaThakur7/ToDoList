const {Router}=require("express")
const {getToDo,saveToDo,updateToDo,DeleteToDo}=require('../controllers/ToDoController.js')

const router=Router()
router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',DeleteToDo)

module.exports=router