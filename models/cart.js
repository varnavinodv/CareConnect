import mongoose,{Schema,model} from "mongoose";
import User from './user.js'
import product from "./product.js";

const cartSchema = Schema({
    productId:{
        type:mongoose.Types.ObjectId,
        ref:product
    },
    organizationId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    count:{
        type:Number,
        required:true
    },
    deliveryboyId:{
        type:mongoose.Types.ObjectId,
        required:User
    },
    status:{
        type:String,
        required:true
    }
})


const Cart = model('Cart',cartSchema,"cart");
export default Cart