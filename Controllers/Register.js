import jwt from "jsonwebtoken";
import bycrpt from "bcrypt";
import userSchema from "../Models/UserModels.js";

const Register = async (req, res) => {
  const { userName, email, phoneNumber, password } = req.body;

  try {
    const existingUser = await userSchema.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ error: "This email already exists" });
    }

    const hashedPassword = await bycrpt.hash(password, 10);

    const newUser = new userSchema({
      userName: userName,
      email: email,
      phoneNumber: phoneNumber,
      password: hashedPassword,
    });

        const savaNewUser=await newUser.save()

      
        return res.status(201).json({message:"user register successfully",savaNewUser})
    }
catch(error){
    return res.status(500).json({error:error.message})
}
}
export default Register;