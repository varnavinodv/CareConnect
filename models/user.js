import mongoose,{Schema,model} from "mongoose"


const userSchema = Schema({

    organizationId:{
        type:mongoose.Types.ObjectId,
        ref:'User'

    },

    name:{
        type:String,
        required:true

    },
    age:{
        type:Number,
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    phno:{
        type:Number,
        required:true
    },
    houseName:{
        type:String,
    },
    postoffice:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        
    },   
   
    district:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    houseName:{
        type:String,
    },
    fyear:{
        type:Number,
    },
    licenseNo:{
        type:String,
    },
    license:{
        type:String,
    },
    idproof:{
        type:String,
    },
    idno:{
        type:String,
    },
    
    userType:{
        type:String,
       

    },
    status:{
        type:String,
        default:'pending'
    },
    childrenCount:{
        type:Number
    },
    staffCount:{
        type:Number
    }
})

 const User = model('user',userSchema);
 export default User