import { hash } from "argon2";
import Student from "../student/student.model.js";

export const register = async (req, res) => {
    try{
        const data = req.body;
        const encryptedPassword = await hash(data.password)
        data.password = encryptedPassword

        const student = await Student.create(data);

        return res.status(201).json({
            message: "Student has been created",
            name: student.name,
            surname: student.surname,
            email: student.email
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Student registration failed",
            error: err.message || "Unknown error"
        });
    }
}