import { Router } from "express"
import { getStudentByIdValidator } from "../middlewares/student-validators.js"
import { getStudent, getStudentById } from "./student.controller.js"

const router = Router()

router.get("/findStudent/:uid", getStudentByIdValidator, getStudentById)

router.get("/", getStudent)

export default router