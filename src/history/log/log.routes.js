import { Router } from "express";

import { check } from "express-validator";

import {

    viewLogs

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

export default router;