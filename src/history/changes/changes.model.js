import mongoose from "mongoose";

const changesSchema = mongoose.Schema({

    ownerChange: {

        type: String,

    },

    dateChange: {

        type: Date

    },

    class: {

        type: String

    },

    staffFullName: {

        type: String

    },

    staffCode: {

        type: Number

    },

    staffStore: {

        type: String

    },

    staffPlace: {

        type: String

    },

    action: {

        type: String

    }

});

export default mongoose.model("Changes", changesSchema);