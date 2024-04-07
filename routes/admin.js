import express, { response } from 'express'

import ContributionRequest from '../models/contributionRequest.js'
import Contribution from '../models/contribution.js';
import User from '../models/user.js';
import Event from '../models/event.js';
import product  from '../models/product.js'
import Report from '../models/report.js';
import Review from '../models/review.js';
import donation from '../models/donation.js';
import Sponsosrship from '../models/sponsorship.js';
import Orders from '../models/order.js';

const router=express()



router.put('/acceptusers/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body);
    let response=await User.findByIdAndUpdate(id,req.body)
    console.log(response);
})

router.get('/viewuser',async(req,res)=>{
    console.log(req.body);
    let response=await User.find({userType:'user'})
    console.log(response);
    res.json(response)

})
router.get('/viewcontrireq',async(req,res)=>{
    console.log(req.body);
    let response=await ContributionRequest.find()
   let  responseData=[]
    for (const newresponse of response){
    let orph=await User.findById(newresponse.orphanageId)
    responseData.push({
        orph:orph,
        response:newresponse
    })

    }
    console.log(response);
    res.json(responseData)
})

router.get('/viewcontridetails/:id', async (req, res) => {
    try {
        let id = req.params.id;
        console.log(id);

        // Find contributions based on contributionRequestId
        let contributions = await Contribution.find({ contributionRequestId: id });
        console.log(contributions);

        let responseData = [];

        for (const contribution of contributions) {
            // Fetch user details for each contribution
            let user = await User.findById(contribution.userId);
            
            // Fetch contribution request details for each contribution
            let contributionRequest = await ContributionRequest.findById(contribution.contributionRequestId);

            // Combine contribution, user, and contribution request data
            responseData.push({
                contribution: contribution,
                user: user,
                contributionRequest: contributionRequest
            });
        }

        res.json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/viewdeliveryboy',async(req,res)=>{
    console.log(req.body);
    let response=await User.find({userType:'deliveryboy'})
    let responseData = [];

        for (const newresponse of response) {
            // Fetch user details for each contribution
         
            // Fetch contribution request details for each contribution
            let Organizations = await User.findById(newresponse.organizationId);

            // Combine contribution, user, and contribution request data
            responseData.push({
                Deliveryboy: newresponse,
                Organization: Organizations

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

router.get('/vieworganization',async(req,res)=>{
    console.log(req.body);
    let response=await User.find({userType:'organization'})
    console.log(response);
    res.json(response);
})


router.get('/filterstatusorg/:status',async(req,res)=>{
   
    let status1=req.params.status
    console.log(status1);
    if(status1=='all'){
        let response=await User.find({userType:'organization'})
        console.log(response);
    res.json(response);
    }
    else{
        let response=await User.find({userType:'organization',status:status1})
        console.log(response);
    res.json(response);
    }
    

})



router.get('/filterstatusorph/:status',async(req,res)=>{
   
    let status1=req.params.status
    console.log(status1);
    if(status1=='all'){
        let response=await User.find({userType:'orphanage'})
        console.log(response);
    res.json(response);
    }
    else{
        let response=await User.find({userType:'orphanage',status:status1})
        console.log(response);
    res.json(response);
    }
    

})


router.get('/vieworphanage',async(req,res)=>{
    console.log(req.body);
    let response=await User.find({userType:'orphanage'})
    console.log(response);
    res.json(response);
})

router.get('/viewproduct',async(req,res)=>{
    console.log(req.body);
    let response=await product.find()
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
        let user= await User.findById(newresponse.userId);
        responseData.push({
            product:newresponse,
            users:user
        });
        
    }
    console.log(responseData);
    res.json(responseData);
})

router.get('/viewreports',async(req,res)=>{
    console.log(req.body);
    let response=await Report.find()
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
        let users=await User.findById(newresponse.UserId);
        responseData.push({
            report:newresponse,
            user:users
        })
    }
    console.log(responseData);
    res.json(responseData);
})
router.get('/viewreview',async(req,res)=>{
    console.log(req.body);
    let response=await Review.find()
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
        let orphanages=await User.findById(newresponse.orphanageId);
        let organizations=await User.findById(newresponse.organizationId);
        responseData.push({
            review:newresponse,
            organization:organizations,
            orphanage:orphanages
        })
    }
    console.log(responseData);
    res.json(responseData);
})


router.get('/viewsponsorship',async(req,res)=>{
    console.log(req.body);
    let response=await Sponsosrship.find()
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
        let user=await User.findById(newresponse.organizationId);
        responseData.push({
            sponsosrship:newresponse,
            users:user

        })
    }
    console.log(responseData);
    res.json(responseData);
})

router.get('/viewdonation',async(req,res)=>{
    console.log(req.body);
    let response=await donation.find()
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
        let orphanages=await User.findById(newresponse.orphanageId);
        let org=await User.findById(newresponse.organizationId);
        responseData.push({
            donation:newresponse,
           orphanage:orphanages,
           orgs:org

        })
    }
    console.log(responseData);
    res.json(responseData);
})

router.get('/viewsponshistory',async(req,res)=>{
    console.log(req.body);
    let response=await Sponsosrship.find()
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
        let organizations=await User.findById(newresponse.organizationId);
        let events=await Event.findById(newresponse.eventId);
        
        console.log(events,'events');
        let orphanages=await User.findById(events?.orphanageId)
        console.log(orphanages,'orphanage ------------------');
        responseData.push({
            sponsorship:newresponse,
           organization:organizations,
           event:events,
           orphanage:orphanages

        })
    }
    console.log(responseData);
    res.json(responseData);
})


router.get('/viewspons/:id',async(req,res)=>{
    let id=req.params.id

    let response=await Sponsosrship.find({eventId:id})
 
    let responseData=[];
    for (const newresponse of response){
        let organizations=await User.findById(newresponse.organizationId);
        let events=await Event.findById(newresponse.eventId);
        let orphanages=await User.findById(events?.orphanageId)
    
        responseData.push({
            spons:newresponse,
           organization:organizations,
           orphanage:orphanages,
           event:events,

        })
    } 

    res.json(responseData);
})



router.get('/vieworders',async(req,res)=>{
    let response=await Orders.find()   
    console.log(response);
    // res.json(response)
    let responseData=[]
    for (const newresponse of response){
        for (const x of newresponse.products){
        let products=await product.findById(x.productId)
        let user=await User.findById(products.userId)
        const delboys = await User.findById(x.deliveryBoyId)
        responseData.push({
            product:products,
            user:user,
            order:newresponse,
            delboy:delboys
        })
         } }
    res.json(responseData)

})

export default router