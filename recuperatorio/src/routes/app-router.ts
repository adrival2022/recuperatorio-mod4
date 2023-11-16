import { Router } from "express";
import recipesRouter from "./recipes.router";
import userRouter from "./users.router";
import authRouter from "./auth.router";

export class AppRoutes {
    
    static get routes(): Router {
        const router = Router();
        router.use('/recipes', recipesRouter);
        router.use('/users', userRouter);
        router.use('/auth', authRouter);
        return router;
    }
}