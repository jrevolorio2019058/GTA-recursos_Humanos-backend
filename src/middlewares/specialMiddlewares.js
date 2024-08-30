import {body, validationResult} from "express-validator";

import User from "../user/user.model.js";

import Role from "../roles/roles.model.js";

import Status from "../status/status.model.js";

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

export const validateDataFromUpdateUser = async (req, res, next) => {

    const { email, role, status } = req.body;

    if(email != "" && email != null){

        const checkEmail = await User.findOne({email});

        if(checkEmail){

            return res.status(401).json({

                msg: `The email ${email} was already register.`

            })

        }

    }

    if(role != "" && role != null){

        const checkRole = await Role.findOne({userRoles: role});

        if(!checkRole){

            return res.status(401).json({

                msg: `The role ${role} doesn't exist in DataBase.`

            })

        }

    }

    if(status != "" && status != null){

        const checkStatus = await Status.findOne({userStatus: status});

        if(!checkStatus){

            return res.status(401).json({

                msg: `The status ${status} doesn't exist in DataBase.`

            })

        }

    }

    next();

}

export const validateDataFromUpdateStaff = async (req, res, next) => {

    const validations = [];

    const { age, email, DPI, hire_Date, uniform_Size, shipping_Date, uniform_Status, badge_Status } = req.body;

    if(age != "" && age != null){

        await body('age').custom(validateAge).run(req);

    }

    if(email != "" && email != null){

        await body("email", "Email is required").isEmail().run(req);

    }

    if(DPI != "" && DPI != null){

        await body("DPI").custom(validateDPI).run(req);

    }

    if(hire_Date != "" && hire_Date != null){

        await body("hire_Date").custom(validateFormatDateHire).run(req);

    }

    if(uniform_Size != "" && uniform_Size != null){

        await body("uniform_Size").custom(validateUniformSize).run(req);

    }

    if(shipping_Date != "" && shipping_Date != null){

        await body("shipping_Date").custom(validateFormatDateShipping).run(req);

    }

    if(uniform_Status != "" && uniform_Status != null){

        await body("uniform_Status").custom(validateUniformStatus).run(req);

    }

    if(badge_Status != "" && badge_Status != null){

        await body("badge_Status").custom(validateUniformStatus).run(req);

    }

    const error = validationResult(req);

    if(!error.isEmpty()){

        return res.status(400).json({error: error.array()});

    }

    next();

}