import User from "../user/user.model.js";

import Role from "../roles/roles.model.js";

import Status from "../status/status.model.js";
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