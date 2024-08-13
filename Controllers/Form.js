import FormDB from '../Models/FormModels.js'

const PostForm = async(req,res)=>{
try {
    const {St_name,St_email,St_phoneNumber,St_state,St_country} = req.body;
    const formdata = new FormDB({St_name,St_email,St_phoneNumber,St_state,St_country});
    await formdata.save();
    return res.status(200).json({messege:"posted sucessfully...."})
    
} catch (error) {
    return res.status(401).json({messege:"error in postForm"})
}

   
}

export default PostForm;