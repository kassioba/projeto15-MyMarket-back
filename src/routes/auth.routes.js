import { Router } from "express";
import { validateSchema } from "../middlewares/validationSchema.middleware.js";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";
import { signInSchema, signUpSchema } from "../schemas/auth.schema.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";


const authRoutes = Router();

authRoutes.post("/signUp", validateSchema(signUpSchema), signUp);
authRoutes.post("/signIn", validateSchema(signInSchema), signIn);
authRoutes.post("/signOut", authValidation, signOut);

export default authRoutes;