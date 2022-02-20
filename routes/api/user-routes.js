const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    UpdateUser,
    deleteUser
} = require('../../controllers/user-controller');

// /api/users/
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(UpdateUser)
    .delete(deleteUser);

module.exports = router;