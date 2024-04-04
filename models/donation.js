import mongoose,{Schema,model} from "mongoose";
import User from './user.js'

const donationSchema=Schema({
       orphanageId:{
        type:mongoose.Types.ObjectId,
        ref:User
       },
       organizationId:{
              type:mongoose.Types.ObjectId,
              ref:User
             },
       deliveryboyId:{
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
        default:''
        
       },
       
       status:{
              type:String,
              default:'pending'
          }

})
const donation=model('donation',donationSchema)
export default donation