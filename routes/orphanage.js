import  express, { request, response }  from "express";
import Event from "../models/event.js";
import Review from "../models/review.js";
// import donationRequest from "../models/donationRequest.js";
import ContributionRequest from "../models/contributionRequest.js";
import product from "../models/product.js";
import donation from "../models/donation.js";
import User from "../models/user.js";
import Contribution from "../models/contribution.js";
import Sponsosrship from "../models/sponsorship.js";
import Report from "../models/report.js";
import { upload } from "../multer.js";

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
    const newRequest = new donation(req.body)
    const savedRequest=await newRequest.save()
    res.json({message:"request posted",savedRequest})
})

// router.post('/addreport',upload.single('report'),async(req,res)=>{
//     console.log(req.file);
//     let reportpath=req.file.filename
//     const newReport = new Report({...req.body,report:reportpath})
//     const savedReport = await newReport.save()
//     res.json({message:"Report added",savedReport})
// })

router.post('/contributionRequest',async(req,res)=>{
    console.log(req.body);
    const newContributionRequest = new ContributionRequest({...req.body,Bamount:req.body.amount})
    const savedContribution=await newContributionRequest.save()
    res.json({message:"request posted",savedContribution})
})

router.get('/vieworganization',async(req,res)=>{
    let response=await User.find({userType:'organization'})
    console.log(response);
    res.json(response)
})

router.get('/vieworgdetail/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await User.findById(id)
    console.log(response);
    res.json(response)
})


router.get('/viewdonation/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await donation.find({orphanageId:id})
    console.log(response);
    res.json(response)
})


router.get('/viewcontrireq/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await ContributionRequest.find({orphanageId:id})
    console.log(response);
    res.json(response)
})

router.get('/viewcontridetails/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Contribution.find({ contributionRequestId: id });
    console.log(response);
    let responseData=[];
      for (const newresponse of response){

        let user = await User.findById(newresponse.userId);
        let contrireq = await ContributionRequest.findById(newresponse.contributionRequestId);
        responseData.push({
            contrirequest: contrireq,
            user: user,
            contribution: newresponse
        });
      }
      console.log(responseData);
      res.json(responseData);
})


router.get('/vieweventupdate/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Event.findById(id)
    console.log(response);
    res.json(response)
})

router.put('/updateevent/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body );
    let response=await Event.findByIdAndUpdate(id,req.body)
    console.log(response);

})


router.get('/viewevent/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    // res.json(id)
    let response=await Event.find({orphanageId:id})
    console.log(response);
    res.json(response)
})


router.get('/orgdetailonpostreview/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await User.findById(id)
    console.log(response);
    res.json(response)
})


router.get('/viewsponshistory/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
let events=await Event.find({orphanageId:id})
console.log(events);
let responseData=[]
for (let x of events){
    let sponsors=await Sponsosrship.find({eventId:x._id})
    console.log(sponsors,'sd');
    console.log(sponsors.organizationId,'-----------------------------------------');
    for( let sp of sponsors){

        let organizations=await User.findById(sp.organizationId)
        let myevents=await Event.findById(sp.eventId)
        console.log(organizations,'sds');
        responseData.push({
            sponsor:sponsors,
            organization:organizations,
            event:myevents
        })
    }
}
console.log(responseData);
res.json(responseData)

})

// router.get('/viewspons/:id',async(req,res)=>{
//     let id=req.params.id
//     console.log(id);
//     let response=await Sponsosrship.find({eventId:id})
//     console.log(response);
//     let responseData=[];
//       for (const newresponse of response){

//         let organizations = await User.findById(newresponse.organizationId);
//         let events = await Event.findById(newresponse.eventId);
//         responseData.push({
//             event: events,
//             organization: organizations,
//             sponsorship: newresponse
//         });
//       }
//       console.log(responseData);
//       res.json(responseData);
// })


// router.get('/viewsponsorhistory/:id',async(req,res)=>{
//     let id=req.params.id;
//     console.log.apply(id);
//     let response=await Sponsosrship.find({})...how to find orph id ??
// })


// router.get('/viewsponshistory/:id',async(req,res)=>{
//     let id=req.params.id;
//     console.log('id')
// })


router.get('/donationreq/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    // res.json(id)
    let response=await donation.find({orphanageId:id})
    console.log(response);
    res.json(response)
})


// router.get('/viewreport/:id',async(req,res)=>{
//     let id=req.params.id
//     console.log(id);
//     // res.json(id)
//     let response=await Report.find({UserId:id})
//     console.log(response);
//     res.json(response)  
// })

export default router