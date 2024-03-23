import  express, { request }  from "express";
import Event from "../models/event.js";
import Review from "../models/review.js";
import donationRequest from "../models/donationRequest.js";
import ContributionRequest from "../models/contributionRequest.js";
import product from "../models/product.js";

const router=express()

router.post('/addevent',async(req,res)=>{
    console.log(req.body);
    const newEvent = new Event(req.body)
    const savedEvent = await newEvent.save()
    res.json({message:"Event added",savedEvent})
    
})

router.post('/postreview',async(req,res)=>{
    console.log(req.body);
    const newReview = new Review(req.body)
    const savedReview=await newReview.save()
    res.json({message:"review posted",savedReview})
})

router.post('/addrequest',async(req,res)=>{
    console.log(req.body);
    const newRequest = new donationRequest(req.body)
    const savedRequest=await newRequest.save()
    res.json({message:"request posted",savedRequest})
})

router.post('/addreport',async(req,res)=>{
    console.log(req.body);
    const newReport = new Report(req.body)
    const savedReport = await newReport.save()
    res.json({message:"Report added",savedReport})
})

router.post('/contributionRequest',async(req,res)=>{
    console.log(req.body);
    const newContributionRequest = new ContributionRequest({...req.body,Bamount:req.body.amount})
    const savedContribution=await newContributionRequest.save()
    res.json({message:"request posted",savedContribution})
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
    res.json(response)
})
export default router