import express from "express";
import { login, signup } from "./auth.controller.js";
import { validate } from "../../middlewares/validate.js";
import { loginSchema, signupSchema } from "./auth.validation.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);

export default router;
