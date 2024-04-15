import mongoose,{Schema,model} from "mongoose";
import User from './user.js'

        
const productSchema=new Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:'pending'
    },

})

 const product = model('product',productSchema);
 export default product