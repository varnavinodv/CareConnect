import mongoose,{Schema,model} from "mongoose";
import User from './user.js'
import ContributionRequest from './contributionRequest.js'

const contributionSchema =Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    contributionRequestId:{
        type:mongoose.Types.ObjectId,
        ref:ContributionRequest
    },
    amount:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
        
    },
    hideidentity:{
        type:String
    },
    status:{
        type:String,
        
    }
})
const Contribution = model('Contribution',contributionSchema)
export default Contribution