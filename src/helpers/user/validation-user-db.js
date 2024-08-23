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

export const correctStatus = async (username = "") => {

    const correctStatus = await User.findOne({ username });

    console.log(correctStatus);

    if(!correctStatus){

        throw new Error(`${username} doesn't exist in DB`);

    }else{

        if(correctStatus.status != "ACTIVE"){
        
            throw new Error(`Your Account is ${correctStatus.status}.`);
    
        }

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