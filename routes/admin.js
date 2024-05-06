import express, { response } from 'express'

import ContributionRequest from '../models/contributionRequest.js'
import Contribution from '../models/contribution.js';
import User from '../models/user.js';
import Event from '../models/event.js';
import product  from '../models/product.js'
import Report from '../models/report.js';
import Review from '../models/review.js';

import Sponsosrship from '../models/sponsorship.js';
import Orders from '../models/order.js';
import Purpose from '../models/purpose.js';
import donationreq from '../models/donationreq.js';
import donation from '../models/donation.js';
import nodemailer from 'nodemailer'
const router=express()




const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'careconnectt01@gmail.com',
    pass: 'enqy ufbi gmrt wava',
  },
});

router.post('/sendOTP', async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
  const mailOptions = {
    from: 'careconnectt01@gmail.com',
    to: email,
    subject: 'Your OTP for Verification',
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'OTP sent successfully',otp });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).send({ error: 'Failed to send OTP' });
  }
});


router.put('/changepass/:email',async(req,res)=>{
    try{

    
    let email=req.params.email
    let response=await User.findOne({email:email})
    console.log(response);
    let response1=await User.findByIdAndUpdate(response._id, req.body,{new:true})
    console.log(req.body); 
    console.log(response1);
}
catch(e){
    res.json(e.message)
}
})


router.put('/acceptusers/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body);
    let response=await User.findByIdAndUpdate(id,req.body)
    console.log(response);
}
catch(e){
    res.json(e.message)
}
    
})

router.get('/viewuser',async(req,res)=>{
    try{
    console.log(req.body);
    let response=await User.find({userType:'user'})
    console.log(response);
    res.json(response)
}
catch(e){
    res.json(e.message)
}

})
router.get('/viewcontrireq',async(req,res)=>{
    try{
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

}
catch(e){
    res.json(e.message)
}
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
    try{
    console.log(req.body);
    let response=await User.find({userType:'deliveryboy',status:'pending'})
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
    
}
catch(e){
    res.json(e.message)
}

})

router.get('/viewevent',async(req,res)=>{
    try{
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
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/vieworganization',async(req,res)=>{
    try{
    console.log(req.body);
    let response=await User.find({userType:'organization'})
    console.log(response);
    res.json(response);
}
catch(e){
    res.json(e.message)
}
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



router.get('/filterreport/:type', async (req, res) => {
    try {
        let type1 = req.params.type;
        console.log(type1,'ppppppppppppppppppppppppppppppppppppppp');
        console.log(req.body);
        if(type1=='all'){
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

        }
        else{
        let response=await Report.find({usertype:type1})
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
    }
    } catch (error) {
        console.error('Error filtering data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



router.get('/vieworphanage',async(req,res)=>{
    console.log(req.body);
    let response=await User.find({userType:'orphanage'})
    console.log(response);
    res.json(response);
})

router.get('/viewproduct',async(req,res)=>{
    console.log(req.body);
    let response=await product.find({status:'pending',count: { $gt: 0 }})
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
        console.log(newresponse.orphanageId,'lllllllllllllllllllllll');
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




router.get('/viewdonation',async(req,res)=>{
    console.log(req.body);
    let response=await donationreq.find()
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
        let orphanages=await User.findById(newresponse.orphanageId);
        // let org=await User.findById(newresponse.organizationId);
        responseData.push({
            donation:newresponse,
           orphanage:orphanages,
        //    orgs:org

        })
    }
    console.log(responseData);
    res.json(responseData);
})





router.get('/viewdonationdetails/:id',async(req,res)=>{
    let id = req.params.id;
    let reqs=await donationreq.findById(id)
    let orph=await User.findById(reqs.orphanageId)
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
        orph:orph
            

            
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
        let purpose=await Purpose.findById(newresponse.purposeId)
        let events=await Event.findById(purpose.eventId);
        
        let orphanages=await User.findById(events.orphanageId)
        responseData.push({
            sponsorship:newresponse,
           organization:organizations,
           event:events,
           orphanage:orphanages,
           purpose:purpose

        })
    }
    console.log(responseData);
    res.json(responseData);
})


router.get('/viewspons/:id',async(req,res)=>{
    let id=req.params.id

    let response=await Purpose.find({eventId:id})
    let event =await Event.findById(id)
    let orph=await User.findById(event.orphanageId)
    console.log(response); 
    let responseData=[];
    for (const newresponse of response){
    let sponsor=await Sponsosrship.findOne({purposeId:newresponse._id})
    console.log(sponsor,'ppppppppppppppppppppppppppppp');
   
    let org=await User.findById(sponsor?.organizationId)
    responseData.push({
                sponsor: sponsor,
                organization: org,
                purpose: newresponse,
                event:event,
                orphanage:orph
            });
    }
      console.log(responseData);
      res.json(responseData);   
 
    
})



router.get('/vieworders',async(req,res)=>{
    let response=await Orders.find()   
    console.log(response);
    let responseData=[]
    for (const newresponse of response){
        for (const x of newresponse.products){
            let products=await product.findById(x.productId)
            let user=await User.findById(products.userId)
            const delboys = await User.findById(x.deliveryBoyId)
            let org=await User.findById(newresponse.organizationId)
      
        responseData.push({
            product:products,
            user:user,
            order:newresponse,
            delboy:delboys,
            org:org
        })
         } }
    res.json(responseData)

})


// router.put('/forgotpass/:num'),async(req,res)=>{
//     let num=req.params.num
//     const user=await User.find({phno:num})
// }




// const app = express();
// app.use(bodyParser.json());
// app.use(cors())
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'careconnectt01@gmail.com',
//     pass: 'wdnu jlyj lrtu acyj',
//   },
// });


export default router
