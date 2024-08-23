import mongoose from "mongoose";

const UniformSizeSchema = new mongoose.Schema({

    size: {

        type:  String,
        required: [true, 'The size is required'],
        enum: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"],
        unique: true

    }

});

export default mongoose.model('UniformSize', UniformSizeSchema);