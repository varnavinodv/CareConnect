import mongoose,{ Schema, model } from "mongoose";
import User from "./user.js";

const reviewSchema=Schema({
    userId:({
        type:mongoose.Types.ObjectId,
        ref:User
    }),
    review:({
        type:String,
        required:true
    })
})

const Review=model('Review',reviewSchema)
 export default Review
