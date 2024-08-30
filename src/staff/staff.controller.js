import Staff from "../staff/staff.model.js";

import { withTime } from "../functions/general-funtions.js";

import Change from "../history/changes/changes.model.js";

export const addStaff = async (req, res) =>{

    const {
        
        fullName, 
        age, 
        email, 
        DPI, 
        IGSS, 
        code , 
        store, 
        place, 
        hire_Date, 
        recruiter, 
        uniform_Size, 
        shipping_Method, 
        shipping_Date, 
        uniform_Status, 
        badge_Status 
    
    } = req.body;

    const hireDate = withTime(hire_Date);

    const growUniformSize = uniform_Size.toUpperCase();

    const shippingDate = withTime(shipping_Date);

    const growUniformStatus = uniform_Status.toUpperCase();

    const growBadgeStatus = badge_Status.toUpperCase();

    const staff = new Staff({

        fullName, 
        age, 
        email, 
        DPI, 
        IGSS, 
        code, 
        store, 
        place, 
        hire_Date: hireDate, 
        recruiter, 
        uniform_Size: growUniformSize, 
        shipping_Method, 
        shipping_Date: shippingDate, 
        uniform_Status: growUniformStatus, 
        badge_Status: growBadgeStatus 

    });

    await staff.save();

    res.status(200).json({

        msg: `Staff con el código: ${code} agregado correctamente.`

    });

}

export const updateStaff = async (req, res) => {

    const {_id, status,  ...rest} = req.body;

    await Staff.findOneAndUpdate({code: rest.staffCode}, rest);

    const staff = await Staff.findOne({ code: rest.staffCode });

    const change = new Change({

        ownerChange: req.user.username,
        dateChange: Date.now(),
        class: "Staff",
        staffFullName: staff.fullName,
        staffCode: staff.code,
        staffStore: staff.store,
        staffPlace: staff.place,
        action: "Update"

    });

    await change.save();

    res.status(200).json({

        msg: `El Empleado con el código: ${rest.staffCode} fue actualizado correctamente.`,

    });

}

export const deleteStaff = async (req, res) => {

    const { staffCode } = req.body;

    await Staff.findOneAndUpdate({ code: staffCode }, { status: "DELETE" });

    const staff = await Staff.findOne({ code: staffCode });

    const change = new Change({

        ownerChange: req.user.username,
        dateChange: Date.now(),
        class: "Staff",
        staffFullName: staff.fullName,
        staffCode: staff.code,
        staffStore: staff.store,
        staffPlace: staff.place,
        action: "Delete"

    });

    await change.save();

    res.status(200).json({

        msg: `El Empleado con el Codigo: ${staffCode} fue eliminado correctamente.`,
        
    })

};

export const getStaff = async (req, res) => {

    const { limit, from } = req.query;

    const [total, staff] = await Promise.all([

        Staff.countDocuments({ status: "ON" }),

        Staff.find({ status: "ON" }).skip(Number(from)).limit(Number(limit))

    ]);

    res.status(200).json({ msg: `The ${total} staff are:`, staff });

}

export const viewStaff = async (req, res) => {

    const { staffCode } = req.body;

    const staff = await Staff.findOne({ code: staffCode });

    res.status(200).json({ 

        msg: `The staff with code: ${staffCode} is:`,
        staff

     });

}