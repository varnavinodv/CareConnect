import mongoose,{Schema,model} from "mongoose";
import Cart from "./cart.js";
import User from "./user.js";
import product from "./product.js";

const orderSchema=Schema({
    products: [{
        productId:{
            type:mongoose.Types.ObjectId,
            ref:product
        },
        status: {
            type: String
        },
        count:{
            type:Number,
            required:true
        },
        deliveryBoyId:{
            type:mongoose.Types.ObjectId,
        },
        date:{
            type:String,
            default:''

            
        },
        Ostatus:{
            type:String,
            default:'pending'
        },
        userId:{
            type:mongoose.Types.ObjectId, 
            ref:User
        }

    }],
    organizationId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
  
    
    orderstatus:{
        type:String,
        default:'pending'
    }
})
const Orders = model('Orders',orderSchema);
export default Orders