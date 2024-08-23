import mongoose from "mongoose";

const statusSchema = mongoose.Schema({

    userStatus: {

        type: String,
        enum: ["ACTIVE", "INACTIVE", "LOCKED", "SUSPENDED"]

    },

    staffStatus: {

        type: String,
        enum: ["DONE", "NOT DELIREVED"]

    }
})

export default mongoose.model("Status", statusSchema);