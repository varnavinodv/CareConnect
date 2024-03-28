import express from 'express'
import  User from '../models/user.js'
import product  from '../models/product.js'
import Contribution from '../models/contribution.js'
import ContributionRequest from '../models/contributionRequest.js'
import { upload } from '../multer.js'
import Event from '../models/event.js'


const router=express()

router.post('/register',async(req,res)=>{
    console.log(req.body);
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    res.json({message:"Registered",savedUser})
    
})

router.post('/login',async(req,res)=>{
    console.log(req.body);
    let users=await User.findOne(req.body)
    console.log(users);
    res.json(users)
})

router.post('/addProduct',upload.single('img'),async(req,res)=>{
    console.log(req.file);
    let imagepath=req.file.filename
    const newProduct = new product({...req.body,img:imagepath})
    const savedProduct = await newProduct.save()
    res.json({message:"Product added",savedProduct}) 
})

router.get('/viewupdateproduct/:id',async(req,res)=>{
      let id=req.params.id
      console.log(id);
      let response=await product.findById(id)
      console.log(response);
      res.json(response)
})

router.put('/updateproduct/:id',upload.fields([{name:'img'}]),async(req,res)=>{
    try{
        if(req.files['img']){
            const image =req.files['img'][0].filename;
            console.log(image)
            req.body={...req.body,img:image}
        }
        let id=req.params.id
        console.log(req.body)
        let response=await product.findByIdAndUpdate(id,req.body)
        console.log(response,'fsefesdfsffdsgsgfsg');  
    }
    catch(e){
        res.json(e.message)
    }
})



router.post('/contribution',async(req,res)=>{
    console.log(req.body); 
    const newContribution = new Contribution(req.body)
    let response=await ContributionRequest.findById(req.body.contributionRequestId)
    console.log(response);
    let balanceAmount=response.Bamount-req.body.amount
    console.log(balanceAmount);
    let responseUpdate=await ContributionRequest.findByIdAndUpdate(req.body.contributionRequestId,{Bamount:balanceAmount})
    const savedContribution=await newContribution.save()
    res.json({message:"Contributed",savedContribution})
})



router.get('/viewprofile/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await User.findById(id)
    console.log(response);
    res.json(response)

})

router.put('/editprofile/:id',async(req,res)=>{
    let id=req.params.id
    console.log(req.body);
    let response=await User.findByIdAndUpdate(id,req.body)
})


router.get('/viewproduct',async(req,res)=>{
    
    console.log(req.body);
    let response=await product.find()
    console.log(response);
    res.json(response)
})

router.get('/viewcontrireq',async(req,res)=>{
    console.log(req.body);
    let response=await ContributionRequest.find()
    console.log(response);
    res.json(response)
})

router.get('/vieworg',async(req,res)=>{
    console.log(req.body);
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

// router.get('/viewcontributions/:id',async(req,res)=>{
//     let id=req.params.id
//     console.log(id);
//     let response=await Contribution.findById(id)
//     console.log(response);
//     res.json(response)
// })
router.get('/vieworph',async(req,res)=>{
    console.log(req.body);
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


router.get('/viewcontribution/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Contribution.find({userId:id})
    console.log(response);
    let responseData=[];
    for (const newresponse of response){
    //   let orphanage = await User.findById(newresponse.orphanageId);
      let contrireq=await ContributionRequest.findById(newresponse.contributionRequestId);
      let  orphanage=await User.findById(contrireq?.orphanageId)
      responseData.push({
          orphanage: orphanage,
          contrireq:contrireq,
          contribution: newresponse
      });
    }
    console.log(responseData);
    res.json(responseData);

})

export default router