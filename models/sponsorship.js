import mongoose,{Schema,model} from "mongoose";
import Event from "./event.js";
import User from "./user.js";
import Purpose from "./purpose.js";

const sponsorshipSchema=  new Schema({
   
    organizationId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    organizationId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    purposeId:{
        type:mongoose.Types.ObjectId,
        ref:Purpose,
        required:true
    },
    status:{
        type:String,
        default:'pending'

    }
})

const Sponsorship=model('Sponsorship',sponsorshipSchema)
export default Sponsorship