import mongoose,{Schema,model} from "mongoose";
import Cart from "./cart.js";

const orderSchema=Schema({
    cartId:{
        type:mongoose.Types.ObjectId,
        ref:Cart
    },
    status:{
        type:String,
        required:true
    }
})
const Orders = model('Orders',orderSchema);
export default Orders