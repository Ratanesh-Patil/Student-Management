import axios from 'axios'

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/students';

class StudentServices{

    getAllStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL)
    }

    createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL, student)
    }
    getStudentByid(studentid){
        return axios.get(STUDENT_BASE_REST_API_URL+"/edit/"+studentid)
    }
    getStudentByName(studentName){
        return axios.get(STUDENT_BASE_REST_API_URL+"/"+studentName)
    }
    updateStudent(studentid, student){
        return axios.put(STUDENT_BASE_REST_API_URL + '/' +studentid, student);
    }
    deleteStudent(studentid){
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' + studentid);
    }
    

}

export default new StudentServices();