import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({

    username: {

        type: String,

    },

    role: {

        type: String,

    },

    dateLogin: {

        type: Date,

    },

    action: {

        type: String,

    }

});

export default mongoose.model("Log", LogSchema);