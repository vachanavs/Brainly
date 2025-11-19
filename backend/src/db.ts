import mongoose, { model, Schema } from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_STRING!);

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true
    },
    password: String
})
export const UserModel = model("User", userSchema);

const contentSchema = new Schema({
    title: String,
    link: String,
    tags: [{
        type: mongoose.Types.ObjectId,
        ref: 'Tag'
    }],
    type: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
})
export const ContentModel = model("Content", contentSchema);

const linkSchema = new Schema({
    hash: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
})
export const LinkModel = model("Link", linkSchema);