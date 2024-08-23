import Staff from "../staff/staff.model.js"

import { withTime } from "../functions/general-funtions.js";

export const addStaff = async (req, res) =>{

    const {
        
        fullName, 
        age, 
        email, 
        DPI, 
        IGGS, 
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
        IGGS, 
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