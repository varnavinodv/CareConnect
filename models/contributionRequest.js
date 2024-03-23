import mongoose,{Schema,model} from "mongoose";
import User from './user.js'


const contributionRequestSchema=Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    purpose:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    Bamount:{
        type:Number,
        default:0
    },
    status:{
        type:String,

    },
    description:{
        type:String
    }
})

const ContributionRequest=model('ContributionRequest',contributionRequestSchema)
export default  ContributionRequest