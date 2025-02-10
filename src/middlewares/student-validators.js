import { body, param } from "express-validator";
import { emailExists, studentExists } from "../helpers/db-validators.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { validarCampos } from "./validate-fields.js";

export const registerValidator = [
    body("name").not().isEmpty().withMessage("El nombre es requerido"),
    body("surname").not().isEmpty().withMessage("El apellido es requerido"),
    body("phone").not().isEmpty().withMessage("El telefono es requerido"),
    body("email").isEmail().withMessage("El email es requerido"),
    body("email").custom(emailExists),
    body("password").not().isEmpty().withMessage("La contraseña es requerida"),
    /*body("password").isStrongPassword({
        minLength: 8,
        minLowercase:1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),*/
    validarCampos
]

export const getStudentByIdValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("uid").custom(studentExists),
    validarCampos,
    deleteFileOnError
]