import express, { json } from 'express'
import User from '../models/user.js'
import product from '../models/product.js'
import Contribution from '../models/contribution.js'
import ContributionRequest from '../models/contributionRequest.js'
import { upload } from '../multer.js'
import Event from '../models/event.js'
import Orders from '../models/order.js'
import mongoose from 'mongoose'
import Review from '../models/review.js'
import Report from '../models/report.js'


const router = express()




router.post('/api/auth/authenticate',async (req,res)=>{
    try{

        console.log(req.body);
        let response=await  User.findOne(req.body)
        console.log(response);
        res.json(response)
    }
    catch(e){
        console.log(e);
    }
})



router.post('/register',upload.single('license'), async (req, res) => {
    try{

        const existMail = await User.findOne({ email: req.body.email });
        if (existMail) {
            return res.status(400).json({ message: 'Mail exists' });
        }
        const existphonenumber = await User.findOne({ phno: req.body.phno });
        if (existphonenumber) {
            return res.status(400).json({ message: 'phone number exists' });
        }
        const existlicense = await User.findOne({ licenseNo: req.body.licenseNo });
        if (existlicense) {
            return res.status(400).json({ message: 'License number exists' });
        }
        console.log(req.file);
        let licensepath=req.file.filename
        const newUser = new User({...req.body,license:licensepath})
        const savedUser = await newUser.save()
        res.json({ message: "Registered", savedUser })
    }   
    catch (e) {
       
        console.log(e);
        res.status(500).json({ message: e.message });
    }

})

router.post('/registeruser', async (req, res) => {
    try {
        console.log(req.body);
        const existMail = await User.findOne({ email: req.body.email });
        if (existMail) {
            return res.status(400).json({ message: 'Mail exists' });
        }
        const existphonenumber = await User.findOne({ phno: req.body.phno });
        if (existphonenumber) {
            return res.status(400).json({ message: 'phone number exists' });
        }

        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.json({ message: "Registered", savedUser });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});



router.post('/login', async (req, res) => {
    
    const { email, password } = req.body
    let users = await User.findOne({ email: email, password: password })

    res.json(users)
})

router.post('/addProduct', upload.single('img'), async (req, res) => {
    console.log(req.file);
    let imagepath = req.file.filename
    const newProduct = new product({ ...req.body, img: imagepath })
    const savedProduct = await newProduct.save()
    res.json({ message: "Product added", savedProduct })
})

router.get('/viewupdateproduct/:id', async (req, res) => {
    let id = req.params.id
    console.log(id);
    let response = await product.findById(id)
    console.log(response);
    res.json(response)
})

router.put('/updateproduct/:id', upload.fields([{ name: 'img' }]), async (req, res) => {
    try {
        if (req.files['img']) {
            const image = req.files['img'][0].filename;
            console.log(image);
            req.body = { ...req.body, img: image }
        }
        let id = req.params.id
        console.log(req.body)
        let response = await product.findByIdAndUpdate(id, req.body)
        console.log(response, 'fsefesdfsffdsgsgfsg');
    }
    catch (e) {
        res.json(e.message)
    }
})



router.post('/contribution', async (req, res) => {
    console.log(req.body);
    const newContribution = new Contribution(req.body)
    let response = await ContributionRequest.findById(req.body.contributionRequestId)
    console.log(response);
    let balanceAmount = response.Bamount - req.body.amount
    console.log(balanceAmount);

    if (balanceAmount === 0) {
        let responseUpdate = await ContributionRequest.findByIdAndUpdate(req.body.contributionRequestId, { Bamount: balanceAmount, status: 'Completed' })

    } else {




        let responseUpdate = await ContributionRequest.findByIdAndUpdate(req.body.contributionRequestId, { Bamount: balanceAmount })
    }
    const savedContribution = await newContribution.save()
    res.json({ message: "Contributed", savedContribution })
})



router.get('/viewprofile/:id', async (req, res) => {
    let id = req.params.id
    console.log(id);
    let response = await User.findById(id)
    console.log(response);
    res.json(response)

})

router.put('/editprofile/:id',upload.fields([{name:'license'}]), async (req, res) => {
    try {
        if (req.files['license']){
            const license1=req.files['license'][0].filename; 
            console.log(license1);
            req.body = { ...req.body, license: license1 }
        }
    let id = req.params.id
    console.log(req.body);
    let response = await User.findByIdAndUpdate(id, req.body)
    console.log(response, 'fsefesdfsffdsgsgfsg');
    }
    catch (e) {
        res.json(e.message)
    }

})

router.put('/editprofileuser/:id',async(req,res)=>{
    let id = req.params.id
    console.log(req.body);
    let response = await User.findByIdAndUpdate(id, req.body)
    console.log(response, 'fsefesdfsffdsgsgfsg');


})

router.put('/editprofiledboy/:id',upload.fields([{name:'idproof'}]), async (req, res) => {
    try {
        if (req.files['idproof']){
            const idproof1=req.files['idproof'][0].filename; 
            console.log(idproof1);
            req.body = { ...req.body, idproof: idproof1 }
        }
    let id = req.params.id
    console.log(req.body);
    let response = await User.findByIdAndUpdate(id, req.body)
    console.log(response, 'fsefesdfsffdsgsgfsg');
    }
    catch (e) {
        res.json(e.message)
    }

})


router.get('/viewproduct/:id', async (req, res) => {
    let id = req.params.id
    console.log(req.body);
    let response = await product.find({ userId: id,count: { $gt: 0 } });
    console.log(response);
    res.json(response)
})

router.get('/viewcontrireq', async (req, res) => {
    console.log(req.body);
    let response = await ContributionRequest.find()
    console.log(response);
    res.json(response)
})

router.get('/vieworg', async (req, res) => {
    console.log(req.body);
    let response = await User.find({ userType: 'organization' })
    console.log(response);
    res.json(response)
})

router.get('/vieworgdetail/:id', async (req, res) => {
    let id = req.params.id
    console.log(id);
    let response = await User.findById(id)
    let report = await Report.find({ UserId: id })
    let review = await Review.find({ organizationId: id })
    let responsedata = []
    for (const newresponse of review) {
        let orph = await User.findById(newresponse.orphanageId)
        responsedata.push({
            orph: orph,
            reviews: newresponse,
            reports: report,

        })
    }
    // console.log(response);
    res.json({ responsedata, response })
})

// router.get('/viewcontributions/:id',async(req,res)=>{
//     let id=req.params.id
//     console.log(id);
//     let response=await Contribution.findById(id)
//     console.log(response);
//     res.json(response)
// })
router.get('/vieworph', async (req, res) => {
    console.log(req.body);
    let response = await User.find({ userType: 'orphanage' })
    console.log(response);
    res.json(response)
})
router.get('/vieworphdetail/:id', async (req, res) => {
    let id = req.params.id
    console.log(id);
    let response = await User.findById(id)
    let events = await Event.find({ orphanageId: id })
    let contrireq = await ContributionRequest.find({ orphanageId: id ,status:'pending'})
    let reports = await Report.find({ UserId: id })
    console.log(response);
    res.json({ response, events, contrireq, reports })
})




router.get('/viewcontribution/:id', async (req, res) => {
    let id = req.params.id
    console.log(id);
    let response = await Contribution.find({ userId: id })
    console.log(response);
    let responseData = [];
    for (const newresponse of response) {
        //   let orphanage = await User.findById(newresponse.orphanageId);
        let contrireq = await ContributionRequest.findById(newresponse.contributionRequestId);
        let orphanage = await User.findById(contrireq?.orphanageId)
        responseData.push({
            orphanage: orphanage,
            contrireq: contrireq,
            contribution: newresponse
        });
    }
    console.log(responseData);
    res.json(responseData);

})

router.get('/vieworder/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        // Find orders associated with the user ID
        const orders = await Orders.find({ 'products.userId': id });
        let responseData = [];

        for (let ord of orders) {
            // console.log(ord, '----------------------');
            // Filter products based on userId
            const products = ord.products.filter(p => p.userId == id);
            const orgs = await User.findById(ord.organizationId)
            for (let x of products) {

                const productdetails = await product.findById(x.productId)
                const delboys = await User.findById(x.deliveryBoyId)





                // Now products contains the filtered products for the user
                // console.log(products, '===================');

                responseData.push({
                    products: products,
                    order: ord,
                    org: orgs,
                    productdetail: productdetails,
                    dboy: delboys
                });
            }
        }

        // Send the order details containing filtered products
        res.json(responseData);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// router.put('/acceptorder/:id', async (req, res) => {
//     try {
//         const id = new mongoose.Types.ObjectId(req.params.id);
//         console.log(id);
//         console.log(req.body);
//         // --------------
//         let prod=await product.findById(id)



//         // Find the order that contains the product with the given productId
//         const order = await Orders.findOne({ 'products.productId': id });
//         console.log(order,'oooooooooooooooooooooooooo');

//         // If the order containing the product is found
//         if (order) {    
//             // Update the Ostatus of the product with the given productId
//             order.products.forEach(product => {
//                 console.log("Product ID:", product.productId); // Debugging: Log product ID
//                 console.log("Target ID:", id); // Debugging: Log target ID
//                 if (product.productId.equals(id)) {
//                     console.log(product,'-0-0-09-098');
//                     product.Ostatus = req.body.status; 
//                     //--------------------------------
//                     if(product.Ostatus=='Accepted'){
//                         prod.count=prod.count-product.count
//                     }
//                     // Assuming Ostatus is updated from req.bodys
//                 }
//             });

//             // Save the updated order
//             await order.save();

//             console.log("Order updated successfully:", order);
//             res.status(200).json({ message: "Order updated successfully" });
//         } else {
//             // If the order containing the product is not found
//             console.log("Order not found for the given productId:", id);
//             res.status(404).json({ message: "Order not found for the given productId" });
//         }
//     } catch (error) {
//         console.error("Error updating order:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });


router.put('/acceptorder/:id/:productId', async (req, res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id);

        const prod = await product.findById(req.params.productId);

    

        console.log(prod,'pp');

        const orders = await Orders.findOne({ 'products._id': id });
        orders.products.map((p) => {

            if (String(id) === String(p._id)) {
                p.Ostatus = req.body.status

                if(req.body.status === 'Accepted'){
                    prod.count -= p.count
                    prod.save()
                }

                if(req.body.status === 'Rejected'){
                    prod.count += p.count
                    prod.save()
                }
            }
        })
        await orders.save()

        res.status(200).json({ message: "Orders updated successfully" });
    } catch (error) {
        console.error("Error updating orders:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});





//======================================================
// router.put('/acceptorder/:id', async (req, res) => {
//     try {
//         const id = new mongoose.Types.ObjectId(req.params.id);
//         console.log(id);
//         console.log(req.body);

//         // Find the product by ID
//         let prod = await product.findById(id);

//         // Find the order that contains the product with the given productId
//         const order = await Orders.findOne({ 'products.productId': id });
//         console.log(order, 'oooooooooooooooooooooooooo');

//         // If the order containing the product is found
//         if (order) {
//             // Update the Ostatus of the product with the given productId
//             order.products.forEach(product => {
//                 console.log("Product ID:", product.productId); // Debugging: Log product ID
//                 console.log("Target ID:", id); // Debugging: Log target ID
//                 if (product.productId.equals(id)) {
//                     console.log(product, '-0-0-09-098');
//                     product.Ostatus = req.body.status;

//                     // Assuming Ostatus is updated from req.body
//                     if (product.Ostatus === 'Accepted') {
//                         // Decrease the product count based on the count in the order
//                         prod.count -= product.count;
//                     }
//                 }
//             });

//             // Save the updated order
//             await order.save();

//             // Save the updated product count
//             await prod.save();

//             console.log("Order updated successfully:", order);
//             res.status(200).json({ message: "Order updated successfully" });
//         } else {
//             // If the order containing the product is not found
//             console.log("Order not found for the given productId:", id);
//             res.status(404).json({ message: "Order not found for the given productId" });
//         }
//     } catch (error) {
//         console.error("Error updating order:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });
// ---------------------------------------------------------------------------------delete-----

// router.delete('/deleteproduct/:id', async (req, res) => {
//     try {
//       const id = req.params.id;
  
//       // Check if the product exists in any order
//       const existingInOrders = await Orders.find({ 'products.productId': id });
//       console.log(existingInOrders,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
  
//       // If the product exists in any order, update its status to 'disabled'
//       if (existingInOrders.length > 0) {
//         for (const order of existingInOrders) {
//             console.log(order,'ppppppppppppppppppppppppppppppppp');
//           const productInOrder = order.products.find(product => product.productId == id);
//           if (productInOrder) {
//             // Update the status of the product in the order
//             await Orders.findOneAndUpdate(
//               { _id: order._id, 'products.productId': id },
//               { $set: { 'products.$.status': 'disabled' } }
//             );
//           }
//         }
//       } else {
//         // If the product doesn't exist in any order, delete it
//         await product.findByIdAndDelete(id);
//       }
  
//       res.status(200).json({ message: 'Product deleted successfully.' });
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       res.status(500).json({ error: 'An error occurred while deleting the product.' });
//     }
//   });

router.delete('/deleteproduct/:id', async (req, res) => {
    try {
        let id = req.params.id;
        // Check if there are any orders associated with this delivery boy
        const inorder = await Orders.findOne({'products.productId': id});
        
        if (!inorder) {
            // If there are no orders, directly delete the delivery boy
            let response = await product.findByIdAndDelete(id);
            res.status(200).json({ message: "product deleted successfully" });
        } else {
            // If there are orders associated, update the status of delivery boy to 'disabled'
            let response = await product.findByIdAndUpdate(id, { status: 'disabled' });
            res.status(200).json({ message: "product status updated to disabled" });
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
  

export default router