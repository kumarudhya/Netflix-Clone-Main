import { Db } from "mongodb";
import mongoose from "mongoose";

const DBconfig = async() => {
    try {
        await mongoose.connect("mongodb://localhost/Netflix")
        .then(console.log("DB connected"))    
    } catch (error) {
      console.log("couldn't connected DB"+error.message);  
    }
}

export default DBconfig;