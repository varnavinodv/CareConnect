import express from 'express'
// import  DeliveryBoy  from '../models/deliveryBoy.js';
import Cart from '../models/cart.js';
import Sponsosrship from '../models/sponsorship.js';
import Report from '../models/report.js';
import Donation from '../models/donation.js';
import product from '../models/product.js';
import User from '../models/user.js';

const router=express()

// router.post('/addDeliveryBoy',async(req,res)=>{
//     console.log(req.body);
//     const newDeliveryBoy = new DeliveryBoy(req.body)
//     const savedDeliveryBoy = await newDeliveryBoy.save()
//     console.log(newDeliveryBoy);
//     console.log(savedDeliveryBoy);
//     res.json({message:"DeliveryBoy added",savedDeliveryBoy})
// })

router.post('/cart',async(req,res)=>{
    console.log(req.body);
    const newCart = new Cart(req.body)
    const savedCart = await newCart.save()
    res.json({message:"Cart",savedCart}) 
})


router.post('/addreport',async(req,res)=>{
    console.log(req.body);
    const newReport = new Report(req.body)
    const savedReport = await newReport.save()
    res.json({message:"Report added",savedReport})
})

router.post('/sponsorship',async(req,res)=>{
    console.log(req.body);
    const newSponsorship = new Sponsosrship(req.body)
    const savedSponsorship = await newSponsorship.save()
    res.json({message:"provided sponsorship",savedSponsorship})
})

router.post('/donation',async(req,res)=>{
    console.log(req.body);
    const newDonation = new Donation(req.body)
    const  savedDonation = await newDonation.save()
    res.json({message:"donation",savedDonation})
})


// router.get('/assigndboy',async(req,res)=>{
//     let id=req.params.id
//     console.log(id);
//     let response=await User
// })
export default router