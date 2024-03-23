import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app=express() 
app.use(cors());
app.use(express.json())
app.use('/uploads', express.static('uploads'));
mongoose.connect('mongodb://127.0.0.1:27017/careconnect')
  .then(() => console.log('Connected!'));


import userRouter from './routes/user.js'
import  organizationRouter from './routes/organization.js'
import deliveryBoyRouter from './routes/deliveryboy.js'
import orphanageRouter from './routes/orphanage.js'
import adminRouter from './routes/admin.js'

app.use('/user',userRouter)
app.use('/organization',organizationRouter)
app.use('/deliveryboy', deliveryBoyRouter)
app.use('/orphanage',orphanageRouter)
app.use('/admin',adminRouter)





app.listen(4000)