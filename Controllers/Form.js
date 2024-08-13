import FormDB from "../Models/FormModels.js";
import nodemailer from "nodemailer";

const PostForm = async (req, res) => {
  try {
    const { St_name, St_email, St_phoneNumber, St_state, St_country } =
      req.body;

    const formdata = new FormDB({
      St_name,
      St_email,
      St_phoneNumber,
      St_state,
      St_country,
    });
    await formdata.save();

    const mail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yugandhardeveloper@gmail.com",
        pass: "xcms leoa dyol rxsy",
      },
    });

    const options = {
        from: "yugandhardeveloper@gmail.com",
        to: St_email,
        cc: "yugandhardeveloper@gmail.com",
        subject: "Form Submission",
        text: `Hello,
      
      Here are the details you submitted:

      - Name: ${St_name}
      - Email: ${St_email}
      - Phone Number: ${St_phoneNumber}
      - State: ${St_state}
      - Country: ${St_country}
      
      Thank you for submitting the form.
      
      Best regards,
      Your Team
      `,
      };
      

    await mail.sendMail(options);

    return res
      .status(200)
      .json({ message: "Form posted and email sent successfully.", formdata });
  } catch (error) {
    console.error("Error in PostForm or sending email:", error); // Log the actual error
    return res
      .status(500)
      .json({ message: "Error in posting form or sending email." });
  }
};

export default PostForm;
