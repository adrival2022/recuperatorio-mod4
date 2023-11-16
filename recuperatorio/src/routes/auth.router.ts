import { Router } from "express";
import { loginController } from "../controllers/auth.controller";
const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.post('/logout', (req, res) => {
    res.send('Logout')
})

export default authRouter;