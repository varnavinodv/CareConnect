import express from 'express'
// import  DeliveryBoy  from '../models/deliveryBoy.js';
import Cart from '../models/cart.js';
import Sponsorship from '../models/sponsorship.js';
import Report from '../models/report.js';

import product from '../models/product.js';
import User from '../models/user.js';

import Event from '../models/event.js';
import ContributionRequest from '../models/contributionRequest.js';
import Review from '../models/review.js';
import { upload } from '../multer.js'
import Orders from '../models/order.js';
import mongoose from 'mongoose';
import donation from '../models/donation.js';
import Purpose from '../models/purpose.js';
import donationreq from "../models/donationreq.js";


const router=express()

router.post('/adddeliveryboy',upload.single('idproof'), async (req, res) => {
    try{
        const existMail = await User.findOne({ email: req.body.email });
        if (existMail) {
            return res.status(400).json({ message: 'Mail exists' });
        }
        //console.log(req.file);
        let idproofpath=req.file.filename
        const newUser = new User({...req.body,idproof:idproofpath})
        const savedUser = await newUser.save()
        res.json({ message: "delivery boy added", savedUser })
    }   
    catch (e) {
       
        res.status(500).json(e);
    }

})


router.post('/addtocart', async (req, res) => {
    try {
        const { productId, status, count, organizationId, deliveryboyId, cartstatus, userId } = req.body;
        //console.log(productId,'[[[[');
        // Find the existing cart for the organizationId
        let existingCart = await Cart.findOne({ organizationId:organizationId});
        
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
        const productInCart = existingCart.products.find(product=>product.productId==req.body.productId);
      
        //console.log(productInCart,'=======================');

        if (productInCart) {
           let myProduct=await product.findById(productInCart.productId)
           if(productInCart.count<myProduct.count){
            if(productInCart.count+parseInt(count)<=myProduct.count){
                // If product already exists, update its count
                productInCart.count += parseInt(count);
            }
            else
            {
                let limit=myProduct.count-productInCart.count
                //console.log(limit);
               return res.status(400).json(limit); // Respond with the saved cart item


            }
        }
      
        } else {
            // If product doesn't exist, add it to the products array
            existingCart.products.push({
                productId,
                status,
                count,
                userId
            });
        }
        const savedCartItem = await existingCart.save();

      return res.json(savedCartItem)
        // Save the updated cart object to the database
    } catch (error) {
       return res.json(error.message ); // Respond with an error if something goes wrong
    }
});




// router.post('/addtocart', async (req, res) => {
//     try {
//         const { productId, status, count, organizationId, deliveryboyId, cartstatus } = req.body;
         


//         // Find the existing cart for the organizationId
//         let existingCart = await Cart.findOne({ organizationId });

//         // If no existing cart found, create a new cart object
//         if (!existingCart) {
//             existingCart = new Cart({
//                 products: [],
//                 organizationId,
//                 deliveryboyId, // Assuming deliveryboyId should be added at cart level, if not, adjust accordingly
//                 cartstatus // Assuming cartstatus should be added at cart level, if not, adjust accordingly
//             });
//         }
// //console.log(existingCart.products,'--------------------');
//         const productInCart = existingCart.products.find({productId:productId});
//             existingCart.products.push({
//                 productId,
//                 status,
//                 count
//             });
        
//         // Save the updated cart object to the database
//         const savedCartItem = await existingCart.save();

//         res.status(201).json(savedCartItem); // Respond with the saved cart item
//     } catch (error) {
//         res.status(400).json({ message: error.message }); // Respond with an error if something goes wrong
//     }
// });





// -----------------------cart code 
// router.post('/addtocart', async (req, res) => {
//     try {
//         // Assuming req.body contains productId, status, count, organizationId, deliveryboyId, cartstatus
//         const { productId, status, count, organizationId, deliveryboyId, cartstatus } = req.body;

//         // Find the existing cart for the organizationId and cartstatus
//         let existingCart = await Cart.findOne({ organizationId, cartstatus });

//         // If no existing cart found, create a new cart object
//         if (!existingCart) {
//             existingCart = new Cart({
//                 products: [],
//                 organizationId,
//                 deliveryboyId,
//                 cartstatus
//             });
//         }
//         //console.log(product.productId,'==============================');

//         // Check if the product already exists in the cart
//         const existingProductIndex = existingCart.products.findIndex(product => product.productId === productId);

//         if (existingProductIndex !== -1) {
//             // If product already exists, update its count
//             existingCart.products[existingProductIndex].count += count;
//         } else {
//             // If product doesn't exist, add it to the products array
//             existingCart.products.push({
//                 productId,
//                 status,
//                 count
//             });
//         }

//         // Save the updated cart object to the database
//         const savedCartItem = await existingCart.save();

//         res.status(201).json(savedCartItem); // Respond with the saved cart item
//     } catch (error) {
//         res.status(400).json({ message: error.message }); // Respond with an error if something goes wrong
//     }
// });
  

// ------------add report
router.post('/addreport',upload.single('report'),async(req,res)=>{
    //console.log(req.file);
    let reportpath=req.file.filename
    const newReport = new Report({...req.body,report:reportpath})
    const savedReport = await newReport.save()
    res.json({message:"Report added",savedReport})
})


// ----------viewreport update
router.get('/viewreportupdate/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(id);
    let response=await Report.findById(id)
    //console.log(response);
    res.json(response)

})



router.put('/updatereport/:id',upload.fields([{name:'report'}]),async(req,res)=>{
    try{
        if(req.files['report']){
            const report =req.files['report'][0].filename;
            //console.log(report);
            req.body={...req.body,report:report}
        }
    
    let id=req.params.id
    //console.log(req.body );
    let response=await Report.findByIdAndUpdate(id,req.body)
    //console.log(response);
}
catch(e){
    res.json(e.message)
}

})

// ----------update report
// router.put('/updatereport/:id',async(req,res)=>{
//     let id=req.params.id
//     //console.log(id);
//     //console.log(req.body );
//     let response=await Report.findByIdAndUpdate(id,req.body)
//     //console.log(response);

// })

// ----------viewreports
router.get('/viewreports/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(id);
    let response=await Report.find({UserId:id})
    //console.log(response);
    res.json(response)

})

router.post('/sponsorship',async(req,res)=>{
    try{

        const newSponsorship = new Sponsorship(req.body)
        const savedSponsorship = await newSponsorship.save()
        //console.log(req.body,'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
        let purpose= await Purpose.findByIdAndUpdate(req.body.purposeId,{status:'sponsored'})
        res.json({message:"provided sponsorship",savedSponsorship})
    }
    catch (e) {
        res.status(500).json(e.message)
    }
})

router.get('/viewpurposes/:id',async(req,res)=>{

    let id=req.params.id
    let response=await Purpose.find({eventId:id,status:'pending'})
    //console.log(response);
    res.json(response)
})


router.get('/viewcart/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(req.body);
    let response=await Cart.find({organizationId:id})
    
    //console.log(response);
    let responseData=[];
      for (const newresponse of response){
        let organizations = await User.findById(newresponse.organizationId);
        
        for (const x of newresponse.products){
            let products=await product.findById(x.productId)
            // let products = await product.findById(x.productId, { count: { $gt: 0 } });

            //console.log(products);
         

                let users=await User.findById(products.userId)
                
                responseData.push({
                    organization: organizations,
                    users:users,
                    cart: newresponse,
                    product:products
                });
            
        }
        }
      //console.log(responseData);
      res.json(responseData);
})

router.get('/viewproductorg',async(req,res)=>{

    //console.log(req.body);
    const response = await product.find({ count: { $gt: 0 } });
    let responseData=[]
    for (const newresponse of response){
        let users=await User.findById(newresponse.userId)
        responseData.push({
            product:newresponse,
            user:users
        })
    }
    //console.log(response);
    res.json(responseData)
})

router.get('/viewproductdltorganisation/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(id);
    let response=await product.findById(id)
    //console.log(response);
     
       let users=await User.findById(response.userId)
   
     res.json({response,users});
})

// router.get('/assigndboy', async (req, res) => {
//     try {
//         let response = await User.find({ userType: 'deliveryboy' });
//         let responseData = [];
        
//         for (const deliveryboy of response) {
//             let deliveryBoyData = {
//                 dboy: deliveryboy,
//                 assignedDetails: []  // Array to store assigned details
//             };

//             let donations = await donation.find({ deliveryboyId: deliveryboy._id ,status:'assigned'});
//             let orders = await Orders.find({ 'products.deliveryBoyId': deliveryboy._id });

//             for (const donationItem of donations) {
//                 let orphanage = await User.findById(donationItem.orphanageId);
//                 let assignedDetail = {
//                     type: 'donation',
//                     date: donationItem.date,
//                     address: orphanage.address,
//                     details: donationItem,
//                     orphanageDetails: orphanage // Include orphanage details
//                 };
//                 deliveryBoyData.assignedDetails.push(assignedDetail);
//             }

//             for (const order of orders) {
//                 for (const product of order.products) {
//                     let user = await User.findById(product.userId);
//                     let assignedDetail = {
//                         type: 'order',
//                         date: order.date,
//                         address: user.address,
//                         details: order,
//                         userDetails: user // Include user details
//                     };
//                     deliveryBoyData.assignedDetails.push(assignedDetail);
//                 }
//             }
            
//             responseData.push(deliveryBoyData);
//         }
        
//         res.json(responseData);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while processing the request.' });
//     }
// });


router.get('/assigndboy/:id', async (req, res) => {
    try {
        let id=req.params.id
        //console.log(id);
        let response = await User.find({ userType: 'deliveryboy',status:'pending',organizationId:id });
        let responseData = [];
        
        for (const newresponse of response) {
            let deliveryBoyData = {
                dboy: newresponse,
                orphanages: [], // Array to store orphanages associated with the delivery boy
                donations: [] ,
                req:[]
                // orders:[],
                // users:[]  // Array to store donations associated with the delivery boy
            };

            let donations = await donation.find({ deliveryboyId: newresponse._id , status:{ $ne: 'delivered' }});
            // let orders = await Orders.find({['products.deliveryBoyId']:newresponse._id})
            // //console.log(orders,'ooooooooooooooooooooooooooooooooooooo');
// //console.log(donations,'dddddddddddddddddddddddddddddddddddd');
            
            for (const donationItem of donations) {
                let req=await donationreq.findById(donationItem.reqId)
                
                let orphanage = await User.findById(req.orphanageId);
                //console.log(orphanage,'pppppppppppppppppppppppppppppp');
                deliveryBoyData.orphanages.push(orphanage);
                deliveryBoyData.donations.push(donationItem);
                deliveryBoyData.req.push(req);
            }
            // for (const ord of orders){
            //     deliveryBoyData.orders.push(ord)
                
            //     // let user=await User.findById(ord?.products?.userId)
            //     for(let x of ord.products){

            //         let user=await User.findById(x.userId)
            //         // if(deliveryBoyData.includes(user._id))
            //           deliveryBoyData.users.push(user)
            //     }
            //     // let user=await User.findById(ord?.products?.userId)
            //     // deliveryBoyData.orphanages.push(user);
            //     // deliveryBoyData.orders.push(orders);
            // }
            
            responseData.push(deliveryBoyData);
        }
        //console.log(responseData,'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
        res.json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
});



//yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
router.get('/assignorderdboy',async(req,res)=>{
    let response = await User.find({ userType: 'deliveryboy' });
    //console.log(response,'-----------');
    let responseData2 = [];
     for (const newresponse of response) {
        let deliveryBoyData = {
            dboy: newresponse,
            orders:[],
            users:[]  // Array to store donations associated with the delivery boy
        };
        let orders = await Orders.find({['products.deliveryBoyId']:newresponse._id,['products.status']:{ $ne: 'delivered' }})
        //console.log(orders,'ooooooooooooooooooooooooooooooooooooo');
        for (const ord of orders){
            deliveryBoyData.orders.push(ord)
            
            // let user=await User.findById(ord?.products?.userId)
            for(let x of ord.products){

                let user=await User.findById(x.userId)
                // if(deliveryBoyData.includes(user._id))
                  deliveryBoyData.users.push(user)
            }
            // let user=await User.findById(ord?.products?.userId)
            // deliveryBoyData.orphanages.push(user);
            // deliveryBoyData.orders.push(orders);
        }
        responseData2.push(deliveryBoyData);

     }
     //console.log(responseData2,'yyyyyyyyyyyyyyyyyyyyyyyyyyy');
     res.json(responseData2);
    

})


// router.get('/viewcart',async(req,res)=>{
//     let response=await Cart.find()
//     //console.log(response);
//     res.json(response)
// })

router.get('/viewdeliveryboy/:id',async(req,res)=>{
    let id=req.params.id
    let response=await User.find({organizationId:id,userType:'deliveryboy',status:'pending'})
    // //console.log(response)
    res.json(response)
})

router.get('/vieworphanage',async(req,res)=>{
    let response=await User.find({userType:'orphanage'})
    // //console.log(response);
    res.json(response)
})

router.get('/vieworphdetail/:id',async(req,res)=>{
    let id=req.params.id
    // //console.log(id);
    let response=await User.findById(id)
    let events=await Event.find({orphanageId:id})
    let contrireq=await ContributionRequest.find({orphanageId:id})
    let report=await Report.find({UserId:id})
    // //console.log(response);
    res.json({response,events,contrireq,report})
})

router.get('/viewdonationrequests',async(req,res)=>{
    let response=await donationreq.find({status:'pending'})
    let responseData=[];
    for (const newresponse of response){
        
        let orph=await User.findById(newresponse.orphanageId)
        responseData.push({
            reqs:newresponse,
            orphs:orph
            
       
            

            
        })
        
    }
    

    //console.log(responseData);
    res.json(responseData);
})


router.get('/viewevent',async(req,res)=>{
    // //console.log(req.body);
    let response=await Event.find()
    // //console.log(response);
  
    let responseData=[];
      for (const newresponse of response){
        let orphanage = await User.findById(newresponse.orphanageId);
        responseData.push({
            orphanage: orphanage,
            event: newresponse
        });
      }
      //console.log(responseData);
      res.json(responseData);
})



router.get('/viewreviews/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(id);
    let response=await Review.find({organizationId:id})
    //console.log(response);
    
    let responseData=[];
    for (const newresponse of response){
      let orphanage = await User.findById(newresponse.orphanageId);
      responseData.push({
          orphanage: orphanage,
          review: newresponse
      });
    }
    //console.log(responseData);
    res.json(responseData);
})

router.get('/viewsponshistory/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(id,'dsds');
    let response=await Sponsorship.find({organizationId:id})
    // //console.log(response);
    let responseData=[];
    for (const newresponse of response){
        let organizations=await User.findById(newresponse.organizationId);
        let purposes=await Purpose.findById(newresponse.purposeId);
        let events=await   Event.findById(purposes?.eventId);
      let orphanages=await User.findById(events?.orphanageId);
      responseData.push({
        event: events,
        organization:organizations,
        orph:orphanages,
        purpose:purposes,
        spons: newresponse
    });
  }

  res.json(responseData);

})

router.get('/viewdonation/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(id);
    let response=await donation.find({organizationId:id})
    //console.log(response);
   
    let responseData=[];
    for(const newresponse of response){
        let req=await donationreq.findById(newresponse.reqId);
        let orphanages=await User.findById(req?.orphanageId);
        let delboys = await User.findById(newresponse.deliveryboyId);
        
        responseData.push({
             orphanage:orphanages,
             donation:newresponse,
             delboy:delboys,
             req:req
        });
    }
    res.json(responseData);
})

router.get('/vieworpheventdetailspons/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(id);
    let events=await  Event.findById(id)
    let orph=await User.findById(events?.orphanageId)
    res.json({events,orph})
})

// router.get('/vieworder/:id',async(req,res)=>{
//     let id=req.params.id
//     //console.log(id);
//     let response=await Orders.find()
// })

router.put('/changecartstatus/:id', async (req, res) => {
    try {
        //console.log('---------------------------------------------------');
        let id = req.params.id;
        // //console.log(id);

        // //console.log(req.body);

        // Find the cart based on organizationId
        let cart = await Cart.findOne({ organizationId: id });


        // console.log(cart,'=-=-=-===');
        let newPrd = []
        for (let x of cart.products){
            let productDetails=await product.findById(x.productId)
            console.log(productDetails);
            if(productDetails.count !== 0){
                newPrd.push(x)
            }
        }



        // Create a new order based on the cart data
        let newOrder = new Orders({
            products: newPrd, // Assuming products structure is similar between Cart and Order
            organizationId: cart.organizationId,
            // Add other properties from cart if needed
        });
        
        // Save the new order to the database
        let savedOrder = await newOrder.save();
        // //console.log(savedOrder);

        // Remove the cart now that the order is created
        let deletedCart = await Cart.findByIdAndDelete(cart._id);
        //console.log(deletedCart);

        res.status(200).json({ message: 'Order created successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
});








router.get('/vieworder/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(id);
    let response = await Orders.find({ organizationId: id, 'products.Ostatus': 'pending' });

    
    //console.log(response);  
    let responseData=[]
    for (const newresponse of response){
        for (const x of newresponse.products){
        let products=await product.findById(x.productId)
        //console.log(products,'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
        let user=await User.findById(products.userId)
        let dboy=await User.findById(x.deliveryBoyId)
        responseData.push({
            product:products,
            user:user,
            order:newresponse,
            delboy:dboy
        })
         } }
    res.json(responseData)

})

router.get('/vieworderhistory/:id',async(req,res)=>{
    let id=req.params.id
    //console.log(id);
    let response = await Orders.find({ organizationId: id, 'products.Ostatus': { $ne: 'pending' } });

    
    //console.log(response);  
    let responseData=[]
    for (const newresponse of response){
        for (const x of newresponse.products){
        let products=await product.findById(x.productId)
        let user=await User.findById(products.userId)
        let dboy=await User.findById(x.deliveryBoyId)
        responseData.push({
            product:products,
            user:user,
            order:newresponse,
            delboy:dboy
        })
         } }
    res.json(responseData)

})


router.get('/filterproducts/:category',async(req,res)=>{
   
    let category=req.params.category
    //console.log(category);
    if(category=='books'){
        let response=await product.find({category:'books'})
        //console.log(response);
    res.json(response);
    }
    else if (category=='shoes') {
        let response=await product.find({category:'shoes'})
        //console.log(response);
    res.json(response);
    }
    else if (category=='bags') {
        let response=await product.find({category:'bags'})
        //console.log(response);
    res.json(response);
    }
    else if (category=='Others') {
        let response=await product.find({category:'Others'})
        //console.log(response);
    res.json(response);
    }
    else if (category=='toys') {
        let response=await product.find({category:'toys'})
        //console.log(response);
    res.json(response);
    }
    else if (category=='dress') {
        let response=await product.find({category:'dress'})
        //console.log(response);
    res.json(response);
    }
    else
    {
        let response=await product.find()
        //console.log(response);
    res.json(response);
    }


})


// router.get('/vieworderhistory/:id',async(req,res)=>{
//     //console.log(id);
//    let response = await Orders.find({ organizationId: id, status: { $ne: 'pending' } });

    
//     //console.log(response);  
//     let responseData=[]
//     for (const newresponse of response){
//         for (const x of newresponse.products){
//         let products=await product.findById(x.productId)
//         let user=await User.findById(products.userId)
//         let dboy=await User.findById(x.deliveryBoyId)
//         responseData.push({
//             product:products,
//             user:user,
//             order:newresponse,
//             delboy:dboy
//         })
//          } }
//     res.json(responseData)

// })

router.put('/assignorderdboy', async (req, res) => {
    try {
        //console.log(req.body);
        const { selectedOrders, deliveryboy, date ,orgId } = req.body;

        // Find the order by ID
        let order = await Orders.findById(orgId);
        //console.log(order)

        // Find the product within the order
        for (let x of selectedOrders){
//console.log(x,'xxxxxxxxxxxxxxxxxxx');
            const product = order.products.find(p=>p.productId==x);
            //console.log(product,'========================');
       

        // Update the delivery boy ID and date for the product
        product.deliveryBoyId = deliveryboy;
        product.date = date;
        product.Ostatus = 'assigned';

        // Save the updated order
        await order.save();
    }
        res.status(200).json({ message: "Delivery boy assigned successfully for the product." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
});

router.put('/acceptdonation/:id',async(req,res)=>{
    let id=req.params.id
    // //console.log(id);
    // //console.log(req.body);
    let response=await donationreq.findByIdAndUpdate(id,req.body)
    //console.log(response);
})


router.post('/donateproduct',async(req,res)=>{
    //console.log(req.body);
    const newdonation = new donation(req.body)
    let response = await donationreq.findById(req.body.reqId)
    //console.log(response);
    // //console.log(response.Bcount,'oooooooooooooooooooooooooooooooooooooooo');
    let balanceCount = response.Bcount - req.body.count
    //console.log(balanceCount);

    if (balanceCount === 0) {
        let responseUpdate = await donationreq.findByIdAndUpdate(req.body.reqId, { Bcount: balanceCount, status: 'Completed' },{ new: true })

    } else {




        let responseUpdate = await donationreq.findByIdAndUpdate(req.body.reqId, { Bcount: balanceCount })
    }
    const savedDonation = await newdonation.save()
    res.json({ message: "Contributed", savedDonation })
})


router.put('/assigndonationdboy/:id',async(req,res)=>{
    let id = req.params.id
    //console.log(req.body);
    let donations=await donation.findByIdAndUpdate(id,req.body)
    res.json(donations)

    
})

router.delete('/deletereport/:id',async(req,res)=>{
    let id=req.params.id
    let response=await Report.findByIdAndDelete(id)
})


router.delete('/deletecartproduct/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const cart = await Cart.findOneAndUpdate(
            { 'products.productId': productId },
            { $pull: { products: { productId: productId } } },
            { new: true }
        );

        if (!cart) {
            return res.status(404).json({ message: "Cart not found or product not in cart" });
        }

        res.status(200).json({ message: "Product removed from cart successfully" });
    } catch (error) {
        console.error("Error deleting product from cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



router.delete('/deletedeliveryboy/:id', async (req, res) => {
    try {
        let id = req.params.id;
        // Check if there are any orders associated with this delivery boy
        const inorder = await Orders.findOne({'products.deliveryBoyId': id});
        
        if (!inorder) {
            // If there are no orders, directly delete the delivery boy
            let response = await User.findByIdAndDelete(id);
            res.status(200).json({ message: "Delivery boy deleted successfully" });
        } else {
            // If there are orders associated, update the status of delivery boy to 'disabled'
            let response = await User.findByIdAndUpdate(id, { status: 'disabled' });
            res.status(200).json({ message: "Delivery boy status updated to disabled" });
        }
    } catch (error) {
        console.error("Error deleting delivery boy:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});













export default router