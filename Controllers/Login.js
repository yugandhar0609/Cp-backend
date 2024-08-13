import UserDB from "../Models/UserModels.js";
import bcrypt from "bcrypt"

export default loginUser = async (req,res)=>{
    try {
        const {email,password} =req.body
        //check email
        const user = await UserDB.findOne({email})
        if (!user) {
           return res.status(400).json({
                message:"Invalid credentials"
            })
        }

        //check password
        const comparePassword = await bcrypt.compare(password,user.password)
        if (!comparePassword) {
            return res.status(400).json({
                message:"Invalid Password"
            })
        }

    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}