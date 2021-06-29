require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log(`Mongo Db connected`))
.catch(()=>console.log(`Mongo Db not connected`))
//express middleware
app.use(express.json());
const userRoute=require('./routes/users');
app.use('/users',userRoute)

const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Server running on ${port}`))