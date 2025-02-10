import Student from "./student.model.js";

export const getStudentById = async (req, res) => {
    try {
        const { uid } = req.params;
        const student = await Student.findById(uid)

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Estudiante no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            student
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el estudiante",
            error: err.message
        })
    }
}

export const getStudent = async (req, res) => {
    try{
        const { limite = 5, desde = 0} = req.query
        const query = { status: true }

        const [total, students ] = await Promise.all([
            Student.countDocuments(query),
            Student.find(query)
                    .skip(Number(desde))
                    .limit(limite)
        ])

        return res.status(200).json({
            success: true,
            total,
            students
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener los estudiantes",
            error: err.message
        })
    }
}

