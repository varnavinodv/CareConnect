import express from 'express'
import Orders from '../models/order.js'

const router=express()

router.post('/orderStatus',async(req,res)=>{
    console.log(req.body);
    const newOrder=new Orders(req.body)
    const savedOrder= await  newOrder.save()
    res.json({message:"orders",savedOrder})
})


export default router