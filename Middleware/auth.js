import jwt from "jsonwebtoken";
import UserDB from "../Models/UserModels.js";

export const verifyToken = async(req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({messege:"Access denied: No token is provided"})
            
        }
        const verifed = jwt.verify(token,process.env.jwt_SECRET)
        req.user = verifed;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
}