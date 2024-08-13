import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    St_name:{
        type:String,
        require:true,
    },
    St_email:{
        type:String,
        require:true,
    },
    St_phoneNumber:{
        type:String,
        require:true,
    },
    St_state:{
        type:String,
        require:true,
    },
    St_country:{
        type:String,
        require:true,

    },
  

},{
    timestamps:true
});

const FormDB = mongoose.model("FormDetails", FormSchema);
export default FormDB;