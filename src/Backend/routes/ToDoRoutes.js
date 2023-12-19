const {Router}=require("express")
const {getToDo,saveToDo}=require('../controllers/ToDoController.js')

const router=Router()
router.get('/',getToDo)
router.post('/save',saveToDo)

module.exports=router