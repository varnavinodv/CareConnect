import mongoose,{Schema,model} from "mongoose";
import User from './user.js'
import product from "./product.js";

const cartSchema = Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    productId:{
        type:mongoose.Types.ObjectId,
        ref:product
    },
    // organizationId:{
    //     type:mongoose.Types.ObjectId,
    //     ref:Organization
    // },
    count:{
        type:Number,
        required:true
    }
})


const Cart = model('Cart',cartSchema,"cart");
export default Cart