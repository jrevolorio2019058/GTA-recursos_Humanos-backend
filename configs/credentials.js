import User from "../src/user/user.model.js";

import Role from "../src/roles/roles.model.js";

import Status from "../src/status/status.model.js";

import UniformSize from "../src/uniformSize/uniformSize.model.js";

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

    //Staff

    const xs = new UniformSize({

        size: "XS"

    });

    const s = new UniformSize({

        size: "S"

    });

    const m = new UniformSize({

        size: "M"

    });

    const l = new UniformSize({

        size: "L"

    });

    const xl = new UniformSize({

        size: "XL"

    });
    
    const xxl = new UniformSize({

        size: "XXL"

    });

    const xxxl = new UniformSize({

        size: "XXXL"

    });

    const xxxxl = new UniformSize({

        size: "XXXXL"

    });

    await xs.save();

    await s.save();

    await m.save();

    await l.save();

    await xl.save();

    await xxl.save();

    await xxxl.save();

    await xxxxl.save();

    const done = new Status({

        staffStatus: "DONE"

    });

    const not_delireved = new Status({

        staffStatus: "NOT DELIREVED"

    })

    await done.save();

    await not_delireved.save();

    console.log("Credentials created successfully");

}