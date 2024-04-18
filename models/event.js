import mongoose,{Schema,model} from "mongoose";
import User from './user.js'

 const eventSchema=Schema({
    orphanageId:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
      type:String,
      required:true
    },
    venue:{
        type:String,
        required:true
    },
    desription:{
        type:String,
    }
 })
 const Event=model('Event',eventSchema)
 export default Event