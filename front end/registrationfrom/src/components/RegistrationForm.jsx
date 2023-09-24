import React, { useEffect, useState } from 'react'
import { useNavigate ,Link, useParams } from 'react-router-dom';
import './Registration.css'
import StudentServices from '../services/StudentServices';

function RegistrationForm() {
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [emailId,setEmailId] = useState("");
    const [mobileNo,setMobileNo] = useState("");
    const [gender,setGender] = useState("");
   
    const {id}=useParams();

    let navigate = useNavigate();
    
    const updateOrAddStudent = (e) => {
        e.preventDefault()
        const student = {firstName,lastName,emailId,mobileNo,gender}
        if(id){
            StudentServices.updateStudent(id, student).then((response) => {
                navigate("/")
            }).catch(error => {
                console.log(error)
            })

        }else{
            StudentServices.createStudent(student).then((response) =>{

                console.log(response.data)
    
                navigate("/")
    
            }).catch(error => {
                console.log(error)
            })
        }
    }
    useEffect(()=>{
        StudentServices.getStudentByid(id).then(response=>{
            setfirstName(response.data.firstName)
            setlastName(response.data.lastName)
            setEmailId(response.data.emailId)
            setGender(response.data.gender)
            setMobileNo(response.data.mobileNo)
            // console.log(response.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    

  return (
    <div>
        <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label">First Name </label>
                  <input
                   className="form__input" 
                   type="text" id="firstName" 
                   placeholder="First Name"
                   name ="firsName"
                   value = {firstName}
                   onChange = {(e) => setfirstName(e.target.value)}
                   
                   />
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  
                  type="text"  
                  className="form__input" 
                  placeholder="LastName"
                  name ="LastName"
                   value = {lastName}
                   onChange = {(e) => setlastName(e.target.value)}
                  
                  />
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email Id </label>
                  <input  
                  type="email" 
                  className="form__input" 
                  placeholder="Email"
                  name ="emailId"
                   value = {emailId}
                   onChange = {(e) => setEmailId(e.target.value)}
                  
                  />
              </div>
              <div className="password">
                  <label className="form__label" for="mobile">Mobile </label>
                  <input
                   className="form__input" 
                   type="text"  
                   placeholder="Mobile"
                   name ="mobileNo"
                   value = {mobileNo}
                   onChange = {(e) => setMobileNo(e.target.value)}
                   />
              </div>
              <div className="confirm-password">
                  <label className="form__label" >Gender </label>
                  <input
                   className="form__input" 
                   type="text" 
                   placeholder="Gender"
                   name ="gender"
                   value = {gender}
                   onChange = {(e) => setGender(e.target.value)}
                   />
                   
              </div>
          </div>
         
             <button type="button"  className="btn btn-sucess"  onClick = {(e) => updateOrAddStudent(e)}  >Register</button>
             <Link to="/employees" className="btn btn-danger"> Cancel </Link>
          
      </div> 

    </div>
  )
}

export default RegistrationForm