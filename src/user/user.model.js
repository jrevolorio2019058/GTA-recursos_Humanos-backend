import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    name: {

        type: String,
        required: [true, 'Name is required']

    },

    lastname: {

        type: String,
        required: [true, 'Lastname is required']

    },

    username: {

        type: String,
        required: [true, 'Username is required'],
        unique: true

    },

    email: {

        type: String,
        required: [true, 'Email is required'],
        unique: true

    },

    password: {

        type: String,
        required: [true, 'Password is required']

    },

    role: {

        type: String,
        enum: ["ADMIN", "SUPPORT", "USER"],

    },

    status: {

        type: String,
        enum: ["ACTIVE", "INACTIVE", "LOCKED", "SUSPENDED"],
        default: "ACTIVE"

    }

});

export default mongoose.model('User', UserSchema);