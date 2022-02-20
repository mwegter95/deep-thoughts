const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');


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
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false // prevents virtuals from duplicating _id as 'id'

    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', UserSchema)

module.exports = User;
