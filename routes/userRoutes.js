import express from 'express'
import { getAllUsers, loginController, registerController } from '../controllers/userContoller.js';
//router object
const userRoute = express.Router();

// GET ALL USERS || GET
userRoute.get("/", getAllUsers);

// CREATE USER || POST
userRoute.post("/register", registerController);

//LOGIN || POST
userRoute.post("/login", loginController);

export default userRoute