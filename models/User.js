const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
import { isEmail } from 'validator';


const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [isEmail, 'Please enter a valid email'],

        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts'
            }
            ]
        },
)
