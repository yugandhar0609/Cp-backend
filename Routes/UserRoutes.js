import express from 'express';
import Register from '../Controllers/Register.js'

const authRouter = express.Router();

authRouter.post('/register',Register);

export default authRouter;
