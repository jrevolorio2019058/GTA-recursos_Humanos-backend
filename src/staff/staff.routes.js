import { Router } from "express";

import { check } from "express-validator";

import {

    addStaff

} from "./staff.controller.js";

import {

    validateJWT

} from "../middlewares/validate-jwt.js";

import {

    validateFields

} from "../middlewares/validate-fields.js";

import {

    haveRol

} from "../middlewares/validate-role.js";

import {

    validateAge,
    validateDPI

} from "../helpers/staff/validation-staff-data.js";

import {

    validateUniformStatus,
    validateUniformSize,
    validateFormatDateHire,
    validateFormatDateShipping

} from "../helpers/staff/validation-staff-db.js";

const router = Router();

router.post(

    "/addStaff",

    [

        validateJWT,

        haveRol("ADMIN", "SUPPORT", "USER"),

        check("fullName", "FullName is required").not().isEmpty(),

        check("age", "Age is required").not().isEmpty(),

        check('age').custom(validateAge),

        check("email", "Email is required").isEmail(),

        check("DPI", "DPI is required").not().isEmpty(),

        check("DPI").custom(validateDPI),

        check("IGSS", "IGGS is required").not().isEmpty(),

        check("code", "Code is required").not().isEmpty(),

        check("store", "Store is required").not().isEmpty(),

        check("place", "Place is required").not().isEmpty(),

        check("hire_Date", "Hire Date is required").not().isEmpty(),

        check("hire_Date").custom(validateFormatDateHire),

        check("recruiter", "Recruiter is required").not().isEmpty(),

        check("uniform_Size", "Uniform Size is required").not().isEmpty(),

        check("uniform_Size").custom(validateUniformSize),

        check("shipping_Method", "Shipping Method is required").not().isEmpty(),

        check("shipping_Date", "Shipping Date is required").not().isEmpty(),

       check("shipping_Date").custom(validateFormatDateShipping),

        check("uniform_Status", "Uniform Status is required").not().isEmpty(),

        check("uniform_Status").custom(validateUniformStatus),

        check("badge_Status", "Badge Status is required").not().isEmpty(),

        check("badge_Status").custom(validateUniformStatus),

        validateFields

    ], addStaff

);

export default router;