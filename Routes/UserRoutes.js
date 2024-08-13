import express from 'express';
import Register from '../Controllers/Register.js'
import login from '../Controllers/Login.js'

const authRouter = express.Router();

authRouter.post('/register',Register);
authRouter.post('/login',login);

export default authRouter;
