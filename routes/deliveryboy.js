import express from 'express'
import Orders from '../models/order.js';
import product from '../models/product.js';
import User from '../models/user.js';
import mongoose from 'mongoose';
// import Orders from '../models/order.js'

const router=express()

// router.post('/orderStatus',async(req,res)=>{
//     console.log(req.body);
//     const newOrder=new Orders(req.body)
//     const savedOrder= await  newOrder.save()
//     res.json({message:"orders",savedOrder})
// })



router.get('/vieworders/:id',async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const orders = await Orders.find({ 'products.deliveryBoyId': id });
    let responseData = [];
    for (let ord of orders) {
        for(let x of ord.products){ 
        const products=await product.findById(x.productId)
        const users=await User.findById(x.userId)
        responseData.push({
            order:orders,
            product:products,
            user:users
        })
    }
    }
    res.json(responseData);
})

router.put('/updatestatusorder/:id',async(req,res)=>{
    const id = new mongoose.Types.ObjectId(req.params.id);
    console.log(id,'[][][][][][][][');
    console.log(req.body,'-------------------- ');
    const order = await Orders.findOne({ 'products.productId': id });
        console.log(order,'ffdfdfdfdfd');
        if (order) {

            order.products.forEach(product => {
                console.log("Product ID:", product.productId); // Debugging: Log product ID
                console.log("Target ID:", id); // Debugging: Log target ID
                if (product.productId.equals(id)) {
                    console.log(product);
                    product.Ostatus = req.body.Ostatus; // Assuming Ostatus is updated from req.body
                }
            });
            await order.save();
        }
        res.json('success')
})

export default router