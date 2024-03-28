import mongoose, { Schema } from "mongoose";
import Feed from "./userFeedSChema.js";
const User= mongoose.model("User",mongoose.Schema({
    profile:{
        type:String
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
        
    },
    phoneNumber:{
        type:String,
        require:false
    },
    password:{
        type:String,
        require:true
    },
    Dob:{
        type:String,
        require:false
    },
    Bio:{
        type:String,
    },
    feedcollection:[{
        type:Schema.Types.ObjectId, ref:"Feed"
    }],
    plancollection:[{
        type:Schema.Types.ObjectId, ref:"Plan"
    }]

}))

export default User