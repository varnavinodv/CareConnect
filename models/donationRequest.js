import mongoose,{Schema,model} from "mongoose";
import User from './user.js'

const donationRequestSchema=Schema({
       userId:{
        type:mongoose.Types.ObjectId,
        ref:User
       },
       product:{
        type:String,
        required:true
       },
       count:{
        type:Number,
        required:true
       },
       date:{
        type:String,
        
       },
       status:{
        type:String,
        
       }

})
const donationRequest=model('donationRequest',donationRequestSchema)
export default donationRequest