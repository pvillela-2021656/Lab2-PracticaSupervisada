import Student from "../student/student.model.js"

export const emailExists = async (email = "") => {
    const existe = Student.findOne({email})
    if(existe){
        throw new Error(`The email ${email} is already registered`)
    }
}

export const studentExists = async (uid = " ") => {
    const existe = await Student.findById(uid)
    if(!existe){
        throw new Error("No existe el estudiante con el ID proporcionado")
    }
}