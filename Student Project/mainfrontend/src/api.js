import axios from "axios";

const API="/api/students";

export const getStudents=()=>axios.get(API);
export const createStudent=(data)=>axios.post(API,data);


export const getStudent = (id)=>axios.get(`${API}/${id}`);
export const updateStudent = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteStudent = (id) => axios.delete(`${API}/${id}`);