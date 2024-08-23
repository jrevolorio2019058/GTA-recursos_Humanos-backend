import { Router } from "express";

import { check } from "express-validator";

import { login } from "./auth.controller.js";

import { validateFields } from "../middlewares/validate-fields.js";

import { correctStatus } from "../helpers/user/validation-user-db.js";

const router = Router();

router.post(

    "/login",

    [

        check("username", "Username is required").not().isEmpty(),

        check("username").custom(correctStatus),

        check("password", "Password is required").not().isEmpty(),

        validateFields,

    ], login
    
);

export default router;