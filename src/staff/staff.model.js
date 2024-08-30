import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({

    fullName: {

        type: String,
        required: [true, "Full Name is required"]

    },

    age: {

        type: Number,
        required: [true, "The Age is required"]
        
    },

    email: {

        type: String,
        required: [true, "The Email is required"]

    },


    DPI: {

        type: Number,
        required: [true, "The DPI is required"]

    },

    IGSS: {

        type: Number,
        required: [true, "The IGSS is required"]

    },

    code: {

        type: Number,
        required: [true, "The Code is required"]

    },

    store: {

        type: String,
        required: [true, "The Store is required"]

    },

    place: {

        type: String,
        required: [true, "The Place is required"]

    },

    hire_Date: {

        type: Date,
        required: [true, "Hire Date is required"]

    },

    recruiter: {

        type: String,
        required: [true, "Recruiter is required"]

    },

    uniform_Size: {

        type: String,
        required: [true, "The uniform size is required"]

    },

    shipping_Method: {

        type: String,
        required: [true, "Shipping Methos is required"]

    },

    shipping_Date: {

        type: Date,
        required: [true, "Shipping Date is required"]

    },

    uniform_Status: {

        type: String,
        required: [true, "The Uniform Status is required"],
        enum: ["DONE", "NOT DELIVERED"]

    },

    badge_Status: {

        type: String,
        required: [true, "The Badge Status is required"],
        enum: ["DONE", "NOT DELIVERED"]

    }



});

export default mongoose.model("Staff", StaffSchema);