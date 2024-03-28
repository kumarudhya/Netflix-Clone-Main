import bycrpt from "bcryptjs"

const saltRound=10;

const hashPassword=async(plainpassword)=>{
    try {
        const salt = await bycrpt.genSalt(saltRound);
        const hash = await bycrpt.hash(plainpassword,salt);
        return hash 
    } catch (error) {
       console.log(error.message); 
    }
}

const hashValidater=async(hashPassword,plainpassword)=>{
    try {
        const result= await bycrpt.compare(hashPassword,plainpassword)
        return result
    } catch (error) {
        console.log(error.message);
    }
}

export default {hashPassword,hashValidater}