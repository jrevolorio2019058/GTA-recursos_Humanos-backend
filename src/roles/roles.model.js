import mongoose from "mongoose";

const RolesSchema = new mongoose.Schema({

    userRoles: {

        type: String,
        enum: ["ADMIN", "SUPPORT", "USER"]

    }
    
});

export default mongoose.model("Roles", RolesSchema);