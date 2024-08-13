import express from 'express';
import Register from '../Controllers/Register.js'
import login from '../Controllers/Login.js';
import PostForm from '../Controllers/Form.js'

const authRouter = express.Router();

authRouter.post('/register',Register);
authRouter.post('/login',login);
authRouter.post('/form',PostForm);

export default authRouter;
