import User from "../user/user.model.js";

import bcryptjs from "bcryptjs";

export const addUser = async(req, res) => {

    const { name, lastname, username, email, password} = req.body;

    let {role} = req.body;

    if(role == "" || role == undefined){

        role = "USER"

    }

    const user = new User({

        name,
        lastname,
        username,
        email,
        password,
        role

    });

    const salt = bcryptjs.genSaltSync();

    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.status(200).json({

        msg: `The user ${user.username} was successfully created`

    })

}

export const viewUsers = async(req, res) => {

    const { limit, from } = req.query;

    const query = { status: "ACTIVE" };

    const [total, user] = await Promise.all([

        User.countDocuments(query),
        User.find(query).skip(Number(from)).limit(Number(limit))

    ]);

    res.status(200).json({

        msg: `The ${total} users are:`,
        user

    })

}