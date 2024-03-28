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
import Review from '../models/review.js';
import { upload } from '../multer.js'

const router=express()

// router.post('/addDeliveryBoy',async(req,res)=>{
//     console.log(req.body);
//     const newDeliveryBoy = new DeliveryBoy(req.body)
//     const savedDeliveryBoy = await newDeliveryBoy.save()
//     console.log(newDeliveryBoy);
//     console.log(savedDeliveryBoy);
//     res.json({message:"DeliveryBoy added",savedDeliveryBoy})
// })

router.post('/addtocart', async (req, res) => {
    try {
        // Assuming req.body contains productId, status, count, organizationId, deliveryboyId, cartstatus
        const { productId, status, count, organizationId, deliveryboyId, cartstatus } = req.body;

        // Find the existing cart for the organizationId and cartstatus
        let existingCart = await Cart.findOne({ organizationId, cartstatus });

        // If no existing cart found, create a new cart object
        if (!existingCart) {
            existingCart = new Cart({
                products: [],
                organizationId,
                deliveryboyId,
                cartstatus
            });
        }

        // Check if the product already exists in the cart
        const existingProductIndex = existingCart.products.findIndex(product => product.productId === productId);

        if (existingProductIndex !== -1) {
            // If product already exists, update its count
            existingCart.products[existingProductIndex].count += count;
        } else {
            // If product doesn't exist, add it to the products array
            existingCart.products.push({
                productId,
                status,
                count
            });
        }

        // Save the updated cart object to the database
        const savedCartItem = await existingCart.save();

        res.status(201).json(savedCartItem); // Respond with the saved cart item
    } catch (error) {
        res.status(400).json({ message: error.message }); // Respond with an error if something goes wrong
    }
});
  

// ------------add report
router.post('/addreport',upload.single('report'),async(req,res)=>{
    console.log(req.file);
    let reportpath=req.file.filename
    const newReport = new Report({...req.body,report:reportpath})
    const savedReport = await newReport.save()
    res.json({message:"Report added",savedReport})
})


// ----------viewreport update
router.get('/viewreportupdate/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Report.findById(id)
    console.log(response);
    res.json(response)

})


// ----------update report
router.put('/updatereport/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body );
    let response=await Report.findByIdAndUpdate(id,req.body)
    console.log(response);

})

// ----------viewreports
router.get('/viewreports/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Report.find({UserId:id})
    console.log(response);
    res.json(response)

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
        
        for (const x of newresponse.products){
            let products=await product.findById(x.productId)
            console.log(products);
            let users=await User.findById(products.userId)

            responseData.push({
                organization: organizations,
                users:users,
                cart: newresponse,
                product:products
            });
        }
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



router.get('/viewreviews/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Review.find({organizationId:id})
    console.log(response);
    
    let responseData=[];
    for (const newresponse of response){
      let orphanage = await User.findById(newresponse.orphanageId);
      responseData.push({
          orphanage: orphanage,
          review: newresponse
      });
    }
    console.log(responseData);
    res.json(responseData);
})

router.get('/viewsponshistory/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id,'dsds');
    let response=await Sponsosrship.find({organizationId:id})
    // console.log(response);
    let responseData=[];
    for (const newresponse of response){
      let events = await Event.findById(newresponse.eventId);
      let orphanages=await User.findById(events?.orphanageId);
      let organizations=await User.findById(newresponse.organizationId);
      responseData.push({
        event: events,
        organization:organizations,
        orph:orphanages,
        spons: newresponse
    });
  }

  res.json(responseData);

})

router.get('/viewdonation/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await donation.find({organizationId:id})
    console.log(response);
})

router.get('/vieworpheventdetailspons/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let events=await  Event.findById(id)
    let orph=await User.findById(events?.orphanageId)
    res.json({events,orph})
})

// router.get('/vieworder/:id',async(req,res)=>{
//     let id=req.params.id
//     console.log(id);
//     let response=await Orders.find()
// })

router.put('/changecartstatus/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body);
    let carts=await Cart.find({organizationId:id})
    console.log(carts)
    let cart=await Cart.findByIdAndUpdate(carts._id,req.body)
    console.log(cart);
})



export default router