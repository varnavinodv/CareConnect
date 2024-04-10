import mongoose,{Schema,model} from "mongoose";
import User from "./user.js";
import Event from "./event.js";

const purposeSchema=Schema({
    eventId:{
        type:mongoose.Types.ObjectId,
        ref:Event
       
    },
    purpose:{
        type:String

    },
    status:{
        type:String,
        default:'pending'
    },
    organizationId:{
    type:mongoose.Types.ObjectId,
    ref:User
    }

})
const Purpose=model('Purpose',purposeSchema)
export default Purpose