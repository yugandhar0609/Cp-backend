import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique: true,
    },
    phoneNumber:{
        type:String,
        require:true,
        unique: true,
    },
    password:{
        type:String,
        require:true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },

},{
    timestamps:true
});

const UserDB = mongoose.model("NewUser", userSchema);
export default UserDB;