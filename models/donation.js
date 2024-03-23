import mongoose,{Schema,model} from "mongoose";
import User from "./user.js";
import donationRequest from "./donationRequest.js";

const donationSchema = Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    donationRequestId:{
        type:mongoose.Types.ObjectId,
        ref:donationRequest
    },
    product:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true

    },
    status:{
        type:String,
    }

})
const Donation=model('Donation',donationSchema)
export default Donation