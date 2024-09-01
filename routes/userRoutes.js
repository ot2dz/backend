const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser); // تأكد من استخدام :id للمعرف
router.delete('/:id', deleteUser); // تأكد من استخدام :id للمعرف

module.exports = router;
