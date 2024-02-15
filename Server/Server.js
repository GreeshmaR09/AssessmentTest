const express=require('express')
const app= express()
const mongoose=require('mongoose')
const route = require('./Route/Auth')
const cors=require('cors')
mongoose.connect('mongodb://localhost:27017/Assessment')
.then(()=>{
    console.log('DB connected')

})
.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send("server")
})
app.use(express.json())
app.use(cors())

app.use('/api',route)
app.listen(4000,()=>{
    console.log("server is on 4000")
})