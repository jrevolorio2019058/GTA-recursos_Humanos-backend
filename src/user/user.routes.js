import { Router } from "express";

import { check } from "express-validator";

import { 
    
    addUser, 
    viewUsers,
    findUser,
    disabledUser

} from "./user.controller.js";

import { 
    
    validationUniqueUsername, 
    validationUniqueEmail,
    validationRole,
    existUsername 

} from "../helpers/user/validation-user-db.js";

import {

    validateConfirmation
    
} from '../helpers/user/validation-user-data.js';

import { validateJWT } from '../middlewares/validate-jwt.js';

import { validateFields } from "../middlewares/validate-fields.js";

import { haveRol } from "../middlewares/validate-role.js";

const router = Router();

router.get(

    "/viewUsers",

    [

        validateJWT,

        haveRol("ADMIN", "SUPPORT"),

        validateFields

    ], viewUsers

)

router.get(

    "/viewUser",

    [

        validateJWT,

        haveRol("ADMIN", "SUPPORT"),

        check("username", "Username is required").not().isEmpty(),

        check("username").custom(existUsername),

        validateFields

    ], findUser

)

router.post(

    "/addUser",

    [

        validateJWT,

        haveRol("ADMIN", "SUPPORT"),

        check("name", "Name is required").not().isEmpty(),

        check("lastname", "Lastname is required").not().isEmpty(),

        check("username", "Username is required").not().isEmpty(),

        check("username").custom(validationUniqueUsername),

        check("email", "Email is required").isEmail(),

        check("email").custom(validationUniqueEmail),

        check("password", "Password is required").not().isEmpty(),

        check("role").custom(validationRole),

        validateFields

    ], addUser

)

router.delete(

    "/disabledUser",

    [

        validateJWT,

        haveRol("ADMIN", "SUPPORT"),

        check("username", "Username is required").not().isEmpty(),

        check("username").custom(existUsername),

        check("confirmation").custom(validateConfirmation),

        validateFields

    ], disabledUser

)

export default router;