import User from '../../user/user.model.js';

import Role from '../../roles/roles.model.js';

export const validationUniqueUsername = async (username = "") => {

    const existentUsername = await User.findOne({ username });

    if(existentUsername){

        throw new Error(`${username} already exists`);

    }

};

export const existUsername = async (username = "") => {

    const existentUsername = await User.findOne({ username });

    if(!existentUsername){

        throw new Error(`${username} doesn't exist in DB`);

    }

}

export const validationUniqueEmail = async (email = "") => {

    const existentEmail = await User.findOne({ email });

    if(existentEmail){

        throw new Error(`${email} already exists`);

    }

}

export const validationRole = async (role = "") => {

    if(!role == "" || !role == undefined){

        const notExistRole = await Role.findOne({ userRoles: role });

        if(!notExistRole){

            throw new Error(`${role} doesn't exist in DB`);

        }

    }

}