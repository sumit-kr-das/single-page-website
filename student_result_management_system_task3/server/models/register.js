import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    }
},{ timestamps: true });

export default mongoose.model('Register',registerSchema,"registers");