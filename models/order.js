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

    }],
    organizationId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
  
    deliveryboyId:{
        type:mongoose.Types.ObjectId,
        
    },
    orderstatus:{
        type:String,
        default:'pending'
    }
})
const Orders = model('Orders',orderSchema);
export default Orders