import express from 'express'
import  User from '../models/user.js'
import product  from '../models/product.js'
import Contribution from '../models/contribution.js'
import ContributionRequest from '../models/contributionRequest.js'
import { upload } from '../multer.js'


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

router.post('/contributionrequest',async(req,res)=>{
    console.log(req.body);
    const newcontributionRequest = new ContributionRequest({...req.body,Bamount:req.body.amount})
    const savedcontributionRequest = await newcontributionRequest.save()
    res.json({message:"Contribution request posted",savedcontributionRequest})
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

export default router