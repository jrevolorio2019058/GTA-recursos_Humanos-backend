import User from "../src/user/user.model.js";

import Role from "../src/roles/roles.model.js";

import Status from "../src/status/status.model.js";

import bcryptjs from "bcryptjs";

export const initialCredentials = async () => {

    //User

    const mainUser = new User({

        name: "Damaris",
        lastname: "Flores",
        username: "dflores",
        email: "dflores@gmail.com",
        password: "admin",
        role: "ADMIN"

    });

    const salt = bcryptjs.genSaltSync();

    mainUser.password = bcryptjs.hashSync(mainUser.password, salt);

    await mainUser.save();

    const ADMIN_ROLE = new Role({

        userRoles: "ADMIN"

    });

    const SUPPORT_ROLE = new Role({

        userRoles: "SUPPORT"

    });

    const USER_ROLE = new Role({

        userRoles: "USER"

    });

    await ADMIN_ROLE.save();

    await SUPPORT_ROLE.save();

    await USER_ROLE.save();

    const ACTIVE_STATUS = new Status({

        userStatus: "ACTIVE"

    });

    const INACTIVE_STATUS = new Status({

        userStatus: "INACTIVE"

    });

    const LOCKED_STATUS = new Status({

        userStatus: "LOCKED"

    });

    const SUSPENDED_STATUS = new Status({

        userStatus: "SUSPENDED"

    });

    await ACTIVE_STATUS.save();

    await INACTIVE_STATUS.save();

    await LOCKED_STATUS.save();

    await SUSPENDED_STATUS.save();

    console.log("Credentials created successfully");

}