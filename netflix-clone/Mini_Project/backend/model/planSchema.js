import mongoose from "mongoose";

const Plan = mongoose.model("Plan",new mongoose.Schema({
    selected:{
        type:String,
        unique: true
        
    },
    price:{
        type:String,
          
    },
    date:{
        type:Date,
        default: Date.now

    },
    
     
}))

export default Plan;