import { Router } from "express";
import { deleteFileOnError } from "../middlewares/delete-file-on-error.js";
import { registerValidator } from "../middlewares/student-validators.js";
import { register } from "./auth.controller.js";

const router = Router()

router.post(
    "/register",
    registerValidator,
    deleteFileOnError,
    register
)

export default router