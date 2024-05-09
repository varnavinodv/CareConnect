import  express, { request, response }  from "express";
import Event from "../models/event.js";
import Review from "../models/review.js";
// import donationRequest from "../models/donationRequest.js";
import ContributionRequest from "../models/contributionRequest.js";
import product from "../models/product.js";

import User from "../models/user.js";
import Contribution from "../models/contribution.js";
import Sponsorship from "../models/sponsorship.js";
import Report from "../models/report.js";
import { upload } from "../multer.js";
import Purpose from "../models/purpose.js";
import donationreq from "../models/donationreq.js";
import donation from "../models/donation.js";

const router=express()

router.post('/addevent',async(req,res)=>{
    try{
    console.log(req.body);
    const newEvent = new Event(req.body)
    const savedEvent = await newEvent.save()
    res.json(savedEvent)
}
catch(e){
        console.log(e);
    }
    
})

router.post('/postreview',async(req,res)=>{
    try{
    console.log(req.body);
    const newReview = new Review(req.body)
    const savedReview=await newReview.save()
    res.json({message:"review posted",savedReview})
}
catch(e){
        console.log(e);
    }
})

router.post('/addrequest',async(req,res)=>{
    try{
    console.log(req.body);
    const newRequest = new donationreq({...req.body,Bcount:req.body.count})
    const savedRequest=await newRequest.save()
    res.json({message:"request posted",savedRequest})
}
catch(e){
        console.log(e);
    }
})

// router.post('/addreport',upload.single('report'),async(req,res)=>{
//     console.log(req.file);
//     let reportpath=req.file.filename
//     const newReport = new Report({...req.body,report:reportpath})
//     const savedReport = await newReport.save()
//     res.json({message:"Report added",savedReport})
// })

router.post('/contributionRequest',async(req,res)=>{
    try{
    console.log(req.body);
    const newContributionRequest = new ContributionRequest({...req.body,Bamount:req.body.amount})
    const savedContribution=await newContributionRequest.save()
    res.json({message:"request posted",savedContribution})
}
catch(e){
        console.log(e);
    }
})

router.get('/vieworganization',async(req,res)=>{
    try{
    let response=await User.find({userType:'organization',status:'Accepted'})
    console.log(response);
    res.json(response)
}
catch(e){
        console.log(e);
    }
})

router.get('/vieworgdetail/:id',async(req,res)=> {
    try{
    let id=req.params.id
    console.log(id);
    let response=await User.findById(id)
    console.log(response,'pppppppppppppppppppppppppppppp');
    let report=await Report.find({UserId:id})
    let review=await Review.find({organizationId:id})
    let responsedata= []
    for (const newresponse of review){
        let orph=await User.findById(newresponse.orphanageId)
        responsedata.push({
            orph:orph,
            reviews:newresponse,
            reports:report,
        
            
        })
    }
    
    console.log(response);
    res.json({responsedata,response,report } )
}
catch(e){
        console.log(e);
    }
})


router.get('/viewdonation/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await donationreq.find({ orphanageId: id, })
    let responsedata=[]
    for (const newresponse of response){
    let donations=await donation.find({reqId:newresponse._id})
    for (const newdonation of donations) {
     
    let organization=await User.findById(newdonation.organizationId)
    let delboy=await User.findById(newdonation.deliveryboyId)
    responsedata.push({
        org:organization,
        response:newresponse,
        delboys:delboy,
        donation:newdonation

    })
}
    }
    console.log(response);
    res.json(responsedata)
}
catch(e){
        console.log(e);
    }
})

router.get('/viewdonationdetails/:id',async(req,res)=>{
    try{
    let id = req.params.id;
    let reqs=await donationreq.findById(id)
    let response=await donation.find({reqId:id})
    let responseData=[];
    
    for (const newresponse of response){
        let dboy=await User.findById(newresponse.deliveryboyId)
        let org=await User.findById(newresponse.organizationId)
        responseData.push({
            donation:newresponse,
            dboy:dboy,
            org:org,
            request:reqs,
       
            

            
        })
        
    }
    

    console.log(responseData);
    res.json(responseData);
}
catch(e){
        console.log(e);
    }

})




router.get('/viewcontrireq/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await ContributionRequest.find({orphanageId:id})
    if(response.Bamount==0){
        let response1=await ContributionRequest.findByIdAndUpdate(response._id)
    }
    console.log(response);
    res.json(response)
}
catch(e){
        console.log(e);
    }
})

router.get('/viewcontridetails/:id',async(req,res)=>{
   try{
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
    }
    catch(e){
            console.log(e);
        }

    
})


router.get('/vieweventupdate/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await Event.findById(id)
    console.log(response);
    res.json(response)
}
catch(e){
        console.log(e);
    }
})

router.put('/updateevent/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body );
    let response=await Event.findByIdAndUpdate(id,req.body)
    console.log(response);
}
catch(e){
        console.log(e);
    }

})


router.get('/viewevent/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    // res.json(id)
    let response=await Event.find({orphanageId:id})
    console.log(response);
    res.json(response)
}
catch(e){
        console.log(e);
    }
})


router.get('/orgdetailonpostreview/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let response=await User.findById(id)
    console.log(response);
    res.json(response)
}
catch(e){
        console.log(e);
    }
})


router.get('/viewsponshistory/:id', async (req, res) => {
    try{
    let id = req.params.id;
    console.log(id);
    let events = await Event.find({ orphanageId: id });
    console.log(events);
    let responseData = [];
    let processedEvents = new Set(); // Set to track processed event IDs

    for (let x of events) {
        // Check if the event is already processed
        if (processedEvents.has(x._id)) {
            continue; // Skip processing if the event is already processed
        }

        let eventProcessed = false;

        let purposes = await Purpose.find({ eventId: x._id });
        for (let y of purposes) {
            let sponsor = await Sponsorship.find({ purposeId: y._id });
            for (let z of sponsor) {
                let organizations = await User.findById(z.organizationId);
                responseData.push({
                    purpose: y,
                    sponsor: z,
                    organization: organizations,
                    event: x
                });
                eventProcessed = true;
            }
        }

        // If at least one purpose was found for the event, mark the event as processed
        if (eventProcessed) {
            processedEvents.add(x._id);
        }
    }
    console.log(responseData);
    res.json(responseData);
}
catch(e){
        console.log(e);
    }
});


router.get('/viewspons/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let event =await Event.findById(id)
    let response=await Purpose.find({eventId:id})
    let responseData=[];
    for (const newresponse of response){
    let sponsor=await Sponsorship.findOne({purposeId:newresponse._id})
    console.log(sponsor,'ppppppppppppppppppppppppppppp');
   
    let org=await User.findById(sponsor?.organizationId)
    responseData.push({
                sponsor: sponsor,
                organization: org,
                purpose: newresponse,
                event:event
            });
    }
    // console.log(response);
    // let responseData=[];
    //   for (const newresponse of response){

    //     let organizations = await User.findById(newresponse.organizationId);
    //     let events = await Event.findById(newresponse.eventId);
    //     responseData.push({
    //         event: events,
    //         organization: organizations,
    //         sponsorship: newresponse
    //     });
    //   }
      console.log(responseData);
      res.json(responseData);
    }
    catch(e){
            console.log(e);
        }
})






router.get('/donationreq/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    // res.json(id)
    //should filter it foronly wviewing pendig status...............................?
    let response=await donationreq.find({orphanageId:id})
    res.json(response)
    // let responseData=[]
    // for (const newresponse of response){
    // let org=await User.findById(newresponse.organizationId)
    // responseData.push({
    //     orgs:org,
    //     response: newresponse
    // })


    // console.log(response);
}
catch(e){
        console.log(e);
    }
    
})


// router.get('/viewreport/:id',async(req,res)=>{
//     let id=req.params.id
//     console.log(id);
//     // res.json(id)
//     let response=await Report.find({UserId:id})
//     console.log(response);
//     res.json(response)  
// })


router.put('/acceptsponsrequest/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body);
    let response=await Sponsorship.findByIdAndUpdate(id,req.body)
    console.log(response);
    res.json(response)
}
catch(e){
        console.log(e);
    }
})

router.post('/addpurpose',async(req,res)=>{
    try{
    console.log(req.body);
    const newpurpose = new Purpose(req.body)
    const savedpurpose=await newpurpose.save()
    res.json({message:" purpose added",savedpurpose})
}
catch(e){
        console.log(e);
    }
})

router.get('/viewpurposes/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(req.body);
    let purpose= await Purpose.find({eventId:id})
    res.json(purpose)
}
catch(e){
        console.log(e);
    }
})


router.delete('/deletecontrireq/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let response=await ContributionRequest.findByIdAndDelete(id)
}
catch(e){
        console.log(e);
    }
})


router.delete('/deleteevent/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        
        // Step 1: Find purposes associated with the event and delete them
        const purposesToDelete = await Purpose.find({ eventId });
        for (const purpose of purposesToDelete) {
            // Delete associated sponsorships first
            await Sponsorship.deleteMany({ purposeId: purpose._id });
            // Then delete the purpose
            await Purpose.findByIdAndDelete(purpose._id);
        }

        // Step 2: Delete the event
        await Event.findByIdAndDelete(eventId);

        res.status(200).json({ message: 'Event, associated purposes, and sponsorships deleted successfully.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/deletepurpose/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let response=await Purpose.findByIdAndDelete(id)
}
catch(e){
        console.log(e);
    }
})

router.delete('/deletedonationreq/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let response=await donationreq.findByIdAndDelete(id)
    console.log(response);
}
catch(e){
        console.log(e);
    }

})




export default router