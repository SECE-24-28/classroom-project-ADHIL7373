import {useEffect,useState} from 'react';
import {getStudents, deleteStudent} from '../api';
import {Link} from 'react-router-dom';

function StudentList() {
  const [students,setStudents]=useState([]);
  const loadStudents=async()=>{
    getStudents().then(res=>setStudents(res.data));
  };

  const removeStudent = async (rollno) => {
    await deleteStudent(rollno);
    loadStudents();
  };
  useEffect(()=>{
    loadStudents();
  },[]);
  return (
    <div>
    <h2> Student List </h2>
    <Link to="/add">Add Student</Link>
    <table border='1' style={{marginTop:20, width:'100%'}}>
      <thead>
        <tr>
          <th>Roll no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.rollno}>
            <td>{s.rollno}</td>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>
              <Link to={`/edit/${s.rollno}`}>Edit</Link>
              <button onClick={()=>removeStudent(s.rollno)}>Delete</button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
        );
    }
  export default StudentList;