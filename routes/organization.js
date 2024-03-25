import express from 'express'
// import  DeliveryBoy  from '../models/deliveryBoy.js';
import Cart from '../models/cart.js';
import Sponsosrship from '../models/sponsorship.js';
import Report from '../models/report.js';
import Donation from '../models/donation.js';
import product from '../models/product.js';
import User from '../models/user.js';
import donation from '../models/donation.js';
import Event from '../models/event.js';
import ContributionRequest from '../models/contributionRequest.js';

const router=express()

// router.post('/addDeliveryBoy',async(req,res)=>{
//     console.log(req.body);
//     const newDeliveryBoy = new DeliveryBoy(req.body)
//     const savedDeliveryBoy = await newDeliveryBoy.save()
//     console.log(newDeliveryBoy);
//     console.log(savedDeliveryBoy);
//     res.json({message:"DeliveryBoy added",savedDeliveryBoy})
// })

router.post('/addtocart',async(req,res)=>{
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
    const newSponsorship = new Sponsosrship(req.body)
    const savedSponsorship = await newSponsorship.save()
    res.json({message:"provided sponsorship",savedSponsorship})
})


router.get('/viewcart/:id',async(req,res)=>{
    let id=req.params.id
    console.log(req.body);
    let response=await Cart.find({organizationId:id})
    console.log(response);
    let responseData=[];
      for (const newresponse of response){
        let organizations = await User.findById(newresponse.organizationId);
        let products = await product.findById(newresponse.productId);
        let users=await User.findById(products?.userId)
        responseData.push({
            organization: organizations,
            product:products,
            user:users,
            cart: newresponse
        });
      }
      console.log(responseData);
      res.json(responseData);
})

router.get('/viewproductorg',async(req,res)=>{

    console.log(req.body);
    let response= await product.find()
    console.log(response);
    res.json(response)
})

router.get('/viewproductdltorganisation/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await product.findById(id)
    console.log(response);
     
       let users=await User.findById(response.userId)
   
     res.json({response,users});
})


router.get('/assigndboy',async(req,res)=>{
    let response=await User.find({userType:'deliveryboy'})
    console.log(response);
    res.json(response)
})

// router.get('/viewcart',async(req,res)=>{
//     let response=await Cart.find()
//     console.log(response);
//     res.json(response)
// })

router.get('/viewdeliveryboy',async(req,res)=>{
    let response=await User.find({userType:'deliveryboy'})
    console.log(response)
    res.json(response)
})

router.get('/vieworphanage',async(req,res)=>{
    let response=await User.find({userType:'orphanage'})
    console.log(response);
    res.json(response)
})

router.get('/vieworphdetail/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await User.findById(id)
    let events=await Event.find({orphanageId:id})
    let contrireq=await ContributionRequest.find({orphanageId:id})
    console.log(response);
    res.json({response,events,contrireq})
})

router.get('/viewdonationrequests',async(req,res)=>{
    let response=await donation.find()
    console.log(response);
    
    let responseData=[];
      for (const newresponse of response){
        let orphanages = await User.findById(newresponse.orphanageId);
        responseData.push({
            orphanage: orphanages,
            donation: newresponse
        });
      }
      console.log(responseData);
      res.json(responseData);
})


router.get('/viewevent',async(req,res)=>{
    console.log(req.body);
    let response=await Event.find()
    console.log(response);
  
    let responseData=[];
      for (const newresponse of response){
        let orphanage = await User.findById(newresponse.orphanageId);
        responseData.push({
            orphanage: orphanage,
            event: newresponse
        });
      }
      console.log(responseData);
      res.json(responseData);
})

router.get('/viewreports/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Report.findById(id)
    console.log(response);
    res.json(response)

})

router.get('/viewreviews',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Review.findById(id)
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
      let orphanage = await User.findById(newresponse.orphanageId);
      responseData.push({
          orphanage: orphanage,
          event: newresponse
      });
    }
    console.log(responseData);
    res.json(responseData);
})

router.get('/viewsponshistory/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Sponsosrship.findById({organizationId:id})
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
      let events = await Event.findById(newresponse.eventId);
      let organizations=await User.findById(newresponse.organizationId);
      responseData.push({
        event: events,
        organization:organizations,
        spons: newresponse
    });
  }
  console.log(responseData);
  res.json(responseData);

})

// router.get('/vieworder/:id',async(req,res)=>{
//     let id=req.params.id
//     console.log(id);
//     let response=await Orders.find()
// })



export default router