const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

require('dotenv').config()

const app=express()
const PORT=process.env.PORT || 5000


//middleware
app.use(express.json())
app.use(cors())

//routers
const routes=require('./routes/ToDoRoutes.jsx')

//apply routes
app.use(routes)

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error(err));
  

app.listen(PORT,()=>console.log(`Listening on: ${PORT}`))