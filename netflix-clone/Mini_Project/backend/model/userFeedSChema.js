import mongoose from "mongoose";

const Feed = mongoose.model("Feed",new mongoose.Schema({
    title:{
        type:String,
        // required:[true,"uploading Video must have the Title"]
    },
    description:{
        type:String,
        // required:true  
    },
    url:{
        type:String
    },
    cloudinary_id:{
        type:String
    } 
}))

export default Feed