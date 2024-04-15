import mongoose,{Schema,model} from "mongoose";
import User from "./user.js";

const reportSchema=Schema({
    UserId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    year:{
        type:Number,
        required:true
    },
    report:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        
    }
    
})

const Report=model('Report',reportSchema)
export default Report