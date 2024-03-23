import express, { response } from 'express'

import ContributionRequest from '../models/contributionRequest.js'
import Contribution from '../models/contribution.js';
import User from '../models/user.js';
import Event from '../models/event.js';
import product  from '../models/product.js'
import Report from '../models/report.js';
import Review from '../models/review.js';

const router=express()
router.get('/viewcontrireq',async(req,res)=>{
    console.log(req.body);
    let response=await ContributionRequest.find()
    console.log(response);
    res.json(response)
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
        console.log(responseData);
    }
    res.json(responseData);
})

router.get('/viewreports',async(req,res)=>{
    console.log(req.body);
    let response=await Report.find()
    console.log(response);
    res.json(response);
})
router.get('/viewreview',async(req,res)=>{
    console.log(req.body);
    let response=await Review.find()
    console.log(response);
    res.json(response);
})

export default router
