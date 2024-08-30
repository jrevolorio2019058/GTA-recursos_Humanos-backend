import { Router} from "express";

import {

    viewChages

} from "../changes/change.controller.js";

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

    "/getChanges",

    [

        validateJWT,

        haveRol("ADMIN", "SUPPORT"),

        validateFields

    ], viewChages
    
)

export default router;