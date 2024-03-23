import mongoose,{Schema,model} from "mongoose";
import Event from "./event.js";
import User from "./user.js";

const sponsosrshipSchema=Schema({
    eventId:{
         type:mongoose.Types.ObjectId,
         ref:Event
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

    }
})

const Sponsosrship=model('Sponsorship',sponsosrshipSchema)
export default Sponsosrship