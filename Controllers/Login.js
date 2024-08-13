import UserDB from "../Models/UserModels.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


 const login = async (req, res) => {
    try {
      const { userName, password } = req.body;
  
      if (!userName || !password) {
        return res.status(400).json({ message: "Please enter both Username and Password" });
      }
  
      const user = await UserDB.findOne({
        $or: [{ email: userName }, { userName: userName }],
      });
  
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials!" });
      }
  
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Invalid credentials!" });
      }
  
      const jwtSecret = process.env.jwt_secret;
      const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '7d' });
  
      res.status(200)
        .cookie("token", token, {
          httpOnly: true,
          maxAge:7,
          secure: true,
        })
        .json({ message: "Login successful.", token });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "An error occurred during login. Please try again." });
    }
  };

export default login