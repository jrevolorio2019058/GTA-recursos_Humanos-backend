import { Router } from "express";

import { check } from "express-validator";

import {

    viewLogs,
    logout

} from "../log/log.controller.js";

import {

    haveRol

} from "../../middlewares/validate-role.js";

import {

    validateJWT

} from "../../middlewares/validate-jwt.js";

import {

    validateFields

} from "../../middlewares/validate-fields.js";

const router = Router();

router.get(

    "/getLogins",

    [

        validateJWT,

        haveRol("ADMIN", "SUPPORT"),

        validateFields

    ], viewLogs

)

router.post(

    "/logout",

    [

        validateJWT,

        haveRol("ADMIN", "SUPPORT", "USER"),

        validateFields

    ], logout

)

export default router;