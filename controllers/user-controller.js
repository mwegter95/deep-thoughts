const { User } = require('../models')

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    // create User
    createUser({ body }, res) {
        console.log(body);
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
    },

    // update User
    updateUser(req, res) {
        console.log('updateUser route called')
    },

    // delete User
    deleteUser(req, res) {
        console.log('deleteUser route called')
    },

    // add friend 
    // this is requested with both user id of user and of new friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: {friends: { _id: params.friendId } } },
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // delete friend
    deleteFriend({ params }, res) {
        console.log(params);
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: {friends: { _id: params.friendId } } },
            { new: true }
        )
            .then(dbUserData => {
                console.log(dbUserData);
                res.json(dbUserData)  
            })
            .catch(err => res.json(err));
    }
}

module.exports = userController;