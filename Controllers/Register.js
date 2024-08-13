import jwt from 'jsonwebtoken'
import bycrpt from 'bcrypt'
import userSchema from '../Models/UserModels'

const Register=async(req,res)=>{

    const{userName,email,phoneNumber,password,}=req.body

    if(!userName){
        return res.status(400).json({error:"Please fill the userName field"})
    }
    if(!email){
        return res.status(400).json({error:"Please fill the email field"})
    }
    if(!phoneNumber){
        return res.status(400).json({error:"Please fill the phoneNumber field"})
    }
    if(!password){
        return res.status(400).json({error:"Please fill the password field"})
    }
    try{
        const existingUser=await userSchema.findOne({email:email});
        if(existingUser){
            return res.status(400).json({ error: "This email already exists" });
        }

        const hashedPassword=await bycrpt.hash(password,10)

        const newUser = new userSchema({
            userName: userName,
            email: email,
            phoneNumber: phoneNumber,
            password: hashedPassword
        })

        const savaNewUser=await newUser.save()

        const JWTtoken=jwt.sign(
            {id:savaNewUser._id,email:savaNewUser.email},
            process.env.JWT_SECRET,
            {expressIn:'1h'}
        )
        return res.status(201).json({message:"user register successfully",token:JWTtoken})
    }
catch(error){
    return res.status(500).json({error:error.message})
}
}
module.exports = Register;