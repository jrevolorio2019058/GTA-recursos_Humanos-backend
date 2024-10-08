import User from '../user/user.model.js';

import { generateJWT } from "../helpers/generate-jwt.js";

import bcryptjs from 'bcryptjs';

import Log from "../history/log/log.model.js";

export const login = async (req, res) => {

    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if(!user){

        return res.status(400).json({

            msg: "Wrong Credentials, Username doesn't exist in database"

        });

    }

    if(user.state == "INACTIVE"){

        return res.status(400).json({

            msg: "Account Delete or Inactive"

        })

    }

    if(user.state == "LOCKED"){

        return res.status(400).json({

            msg: "Account Locked, Contact Support"

        })

    }

    if(user.state == "SUSPENDED"){

        return res.status(400).json({

            msg: "Account Suspended, Contact your Leader for more information"

        })

    }

    const validPassword = bcryptjs.compareSync(password, user.password);

    if(!validPassword){

        return res.status(400).json({

            msg: "Wrong Password"

        });

    }

    const token = await generateJWT(user.id);

    const registLog = new Log({

        username: user.username,
        role: user.role,
        dateLogin: new Date(),
        action: "LOGIN"

    })

    await registLog.save();

    res.status(200).json({

        msg: `Login Successfully, your token is: ${token}`,
        user
        
    })

}