import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    initialVel: {
        type: Number,
        required: true
    },
    currentVel: {
        type: Number,
        required: true
    },
    maxVel: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Card = mongoose.model("Card", cardSchema);

export default Card;