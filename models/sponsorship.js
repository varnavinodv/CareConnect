import mongoose,{Schema,model} from "mongoose";
import Event from "./event.js";
import User from "./user.js";

const sponsosrshipSchema=  new Schema({
    eventId:{
         type:mongoose.Types.ObjectId,
         ref:Event
    },
    organizationId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    organizationId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    purpose:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'pending'

    }
})

const Sponsosrship=model('Sponsorship',sponsosrshipSchema)
export default Sponsosrship