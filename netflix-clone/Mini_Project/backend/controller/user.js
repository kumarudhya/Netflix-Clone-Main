import User from "../model/userSchema.js"
import Plan from "../model/planSchema.js"
import hash from "../middleware/hashPassword.js"
import jwt from "jsonwebtoken"

// User Register
// const register = async(req,res)=>{
//     try {
//         let {name,email,phoneNumber,Dob,password}=req.body;
//         const Xuser = await User.find({email:email});
//         if(Xuser){
//             console.log("User Already exits or invalid email id");
//         } 
//         let hashPassword = await hash.hashPassword(password)
//         const newUser = await User(
//             {
//                 name:name,
//                 email:email,
//                 phoneNumber:phoneNumber,
//                 Dob:Dob,
//                 password:hashPassword
//             }
//         )
//         const result = await newUser.save();
//         console.log(result);
//         return res.send(`Hello ${name}, Your account created Sucessfully`)

//     } catch (error) {
//         console.log(error.message);
//     }  
// }
const register =async(req,res)=>{
    try {
        const {name,email,password,phoneNumber,Dob}= req.body;
        let Xuser= await User.findOne({email:email})
            if(Xuser){
                console.log("Email already Exits");
                return res.status(401).send("Email already Exits")
            }
            else{
                let hashpassword = await hash.hashPassword(password)
                const newUser= await User({
                    name:name,
                    email:email,
                    phoneNumber:phoneNumber,
                    // Dob:Dob,
                    password:hashpassword
                })
                const result = await newUser.save();
                console.log(newUser);
                return res.send(`Hello ${name}, You have Successfully created your account`)
            }
        
        
    } catch (error) {
        console.log(error.message);
    }

}

// Login
const login=async(req,res)=>{
        try {
        const {email,password}=req.body;
        let Xuser = await User.findOne({email:email})
        if(!Xuser){
            console.log("Invalid Password or Email");
            return res.status(400).send("Invalid User or Password")
        }
        let checkPassword = await hash.hashValidater(password,Xuser.password)
        console.log(checkPassword);
        if(!checkPassword){
            return res.send("Wrong Password");
        }
        let token = jwt.sign({ id: Xuser._id }, process.env.JWT);
        console.log(token);
        res
          .header("token", token)
        //   .send({ message: "login successfully", token: token});
        .send(token)
        
        
    } catch (error) {
        // console.log(error);
        return res.status(400).send("user not found");
    }

}

const plan =async(req,res)=>{
    console.log(req.body);
    try {
        const {selected,price}= req.body;
        // let Xuser= await User.findOne({email:email})
        //     if(Xuser){
        //         console.log("Email already Exits");
        //         return res.status(401).send("Email already Exits")
            
                
                const newPlan= await Plan({
                    price:price,
                    selected:selected
                })
                const result = await newPlan.save();
                console.log(result);
                return res.send(`Hello, ${selected} You have Successfully added your account`)
            
        
        
    } catch (error) {
        console.log(error.message);
    }

}

export default {
    register,login,plan
}