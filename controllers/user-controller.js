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
    }
}

module.exports = userController;