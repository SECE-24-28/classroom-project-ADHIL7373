const express = require('express');
const router = express.Router();
const { createStudent, getStudents, deleteStudent } = require('../controller/studentController');

router.get('/', getStudents);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);

module.exports = router;