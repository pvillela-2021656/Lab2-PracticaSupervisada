import { Schema, model } from "mongoose";

const studentSchema = Schema({
    name:{
        type: String,
        required: [true, "Name of the student is required"]
    },
    surname:{
        type: String,
        required: [true, "Surname of the student is required"]
    },
    phone: {
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true
    },
    email:{
        type: String,
        required: [true, "Email of the student is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password of the student IS required"]
    },
    status:{
        type: Boolean,
        default: true
    }
})

export default model("Student", studentSchema)

studentSchema.methods.toJSON = function(){
    const {password, _id, ...student} = this.toObject()
    student.uid = _id
    return student
}
