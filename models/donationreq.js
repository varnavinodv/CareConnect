import mongoose,{Schema,model} from "mongoose";
import User from './user.js'    

const donationreqSchema=Schema({
    orphanageId:{
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
       Bcount:{
        type:Number,
        default:0
       },
       status:{
        type:String,
        default:'pending'
    }


})
const donationreq=model('donationreq',donationreqSchema)
export default donationreq