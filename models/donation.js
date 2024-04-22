import mongoose,{Schema,model} from "mongoose";
import User from './user.js'
import donationreq from "./donationreq.js";

const donationSchema=Schema({
       
       reqId:{
              type:mongoose.Types.ObjectId,
              ref:donationreq
             },
       organizationId:{
              type:mongoose.Types.ObjectId,
              ref:User
             },
       deliveryboyId:{
              type:mongoose.Types.ObjectId,
              ref:User
         
       },
       
       count:{
        type:Number,
        required:true
       },
       date:{
        type:String,
        default:''
        
       },
       
       status:{
              type:String,
              default:'pending'
          }

})
const donation=model('donation',donationSchema)
export default donation