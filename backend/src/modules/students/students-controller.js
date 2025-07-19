const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

//Problem2
//Complete CRUD operation in Student management page.
//backend/src/modules/students/students-controller.js

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.query);
    res.json(students);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body;
    const message = await addNewStudent(payload);
    res.json(message);    
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const message = await updateStudent({ ...payload, id });
    res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const department = await getStudentDetail(id);
    res.json(department);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const reviewerId = req.user.id; 
    console.log("id: ", id);
    console.log("status: ", status);
    console.log("reviewerId: ", reviewerId);        
    const message = await setStudentStatus({ userId: id, reviewerId, status });
    res.json(message);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
