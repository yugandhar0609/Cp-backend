import FormDB from '../Models/FormModels.js'
import nodemailer from 'nodemailer'

const PostForm = async(req,res)=>{
try {
    const {St_name,St_email,St_phoneNumber,St_state,St_country} = req.body;
    const formdata = new FormDB({St_name,St_email,St_phoneNumber,St_state,St_country});
    await formdata.save();

    const mail=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'yugandhardeveloper@gmail.com',
            pass:'xcms leoa dyol rxsy'
        }

    })

    const options={
        Form:'yugandhardeveloper@gmail.com',
        To:'St_email',
        Subject:'Form Submission',
        Text:`Hello,${St_name},\n\n Thank you for submitting the form`,
    }
    await mail.sendMail(options)
    return res.status(200).json({messege:"form posted and email send sucessfully...."})
    
} catch (error) {
    return res.status(401).json({messege:"error in postForm or sending email"})
}

}

export default PostForm;