const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const student = await Student.create(req.body);
    res.json(student);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(400).json({ error: error.message });
  }
}

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ rollno: 1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ rollno: req.params.id });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};