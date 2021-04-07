const { Router } = require('express');
const { getAllUsers,
    createUser,
    updateUser,
    getById,
    deleteUser
} = require('../controllers/users.controllers');

const router = Router();

router.get('/',getAllUsers);
router.post('/',createUser);
router.put('/:id',updateUser);
router.get('/:id',getById);
router.delete('/:id',deleteUser);

module.exports = router;