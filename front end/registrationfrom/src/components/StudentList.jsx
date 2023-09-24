import React from 'react'
import { Link, useParams } from 'react-router-dom'
import StudentServices from '../services/StudentServices';
import { useEffect, useState } from 'react'

function StudentList() {
    const [students, setStudents] = useState([])
    const {id} = useParams();
    // const  [name, setName] = useState("")
    useEffect(() => {
        getAllStudents();
    }, [])
   


    const getAllStudents = () => {
        StudentServices.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const getStudent = (name) => {
        StudentServices.getStudentByName(name).then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        }) 
    }
    const deleteStudent = (studentid) => {
        StudentServices.deleteStudent(studentid).then((response) =>{
            getAllStudents();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }
    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Student</h2>
        }else{
            return <h2 className = "text-center">Add Student</h2>
        }
    }
  return (
    <div className = "container">
    <h2 className = "text-center"> List Students </h2>
    <Link to = "/add-student" className = "btn btn-primary mb-2" > {title()} </Link>
    <input type="text" placeholder='Serach Student' onChange={(e) => getStudent(e.target.value)} />
    <table className="table table-bordered table-striped">
        <thead>
            <th> Student Id </th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Email Id </th>
            <th> Mobile </th>
            <th> Gender </th>
            <th> Actions </th>
        </thead>
        <tbody>
            {
                students.map(
                    student =>
                    <tr key = {student.id}> 
                        <td> {student.id} </td>
                        <td> {student.firstName} </td>
                        <td>{student.lastName}</td>
                        <td>{student.emailId}</td>
                        <td>{student.mobileNo}</td>
                        <td>{student.gender}</td>
                        <td>
                        <Link className="btn btn-info" to={`/edit-student/${student.id}`} >Update</Link>
                             <button className = "btn btn-danger" onClick = {() => deleteStudent(student.id)} 
                             style = {{marginLeft:"10px"}}> Delete</button> 
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>
</div>
  )
}

export default StudentList