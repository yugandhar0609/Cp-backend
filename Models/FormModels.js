import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    name:{
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
  

},{
    timestamps:true
});

const UserDB = mongoose.model("NewUser", FormSchema);
export default UserDB;