// const ToDoModel=require('../models/ToDoModel.js')

// module.exports.getToDo=async(req,res)=>{
//     const toDo=await ToDoModel.find()
//     res.send(toDo)
// }

// module.exports.saveToDo=async(req,res)=>{
//     const {text}=req.body

//     ToDoModel
//     .create({text})
//     .then((data) =>{
//         console.log("Added successfully..");
//         console.log(data);    
//         res.send(data)
//     })
// }

const ToDoModel = require('../models/ToDoModel.js');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports.saveToDo = async (req, res) => {
    try {
        console.log(req.body);
        const { text } = req.body;

        if (!text) {
            return res.status(400).send("Bad Request: 'text' is required in the request body");
        }

        const data = await ToDoModel.create({ text });
        console.log("Added successfully..");
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports.updateToDo = async (req, res) => {
    const {_id,text}=req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=> res.send("Updated successfully..."))
    .catch((err)=>console.log(err));
};

module.exports.DeleteToDo = async (req, res) => {
    const {_id,text}=req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted successfully..."))
    .catch((err)=>console.log(err));
};
