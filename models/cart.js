import mongoose,{Schema,model} from "mongoose";
import User from './user.js'
import product from "./product.js";

const cartSchema =new Schema({
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
        userId:{
            type:mongoose.Types.ObjectId, 
            ref:User
        }

    }],
    organizationId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
  
    deliveryboyId:{
        type:mongoose.Types.ObjectId,
        
    },
    cartstatus:{
        type:String,
        default:'pending'
    }
})


const Cart = model('Cart',cartSchema,"cart");
export default Cart