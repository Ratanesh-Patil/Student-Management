package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Student;
import com.app.repository.StudentRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/students")
public class StudentController {
	
	@Autowired
	private StudentRepository studentrepo;
	
	@GetMapping
	public List<Student> getAllstudents(){
		return studentrepo.findAll();
	}
	
	@PostMapping
	public Student addStudent( @RequestBody Student student) {
		return studentrepo.save(student);
	}
	@GetMapping("{firstName}")
	public List<Student> getStudent( @PathVariable String firstName) {
		List<Student> student= studentrepo.findByFirstName(firstName);
		return student;
	}
	@GetMapping("edit/{id}")
	public Optional<Student>  getStudentbyid( @PathVariable long id) {
		Optional<Student> student= studentrepo.findById(id);
		return student;
	}
	 @PutMapping("{id}")
	    public ResponseEntity<Student> updateEmployee(@PathVariable long id,@RequestBody Student studentDetails) {
	        Student updateStudent = studentrepo.findById(id).orElseThrow();
	                

	        updateStudent.setFirstName(studentDetails.getFirstName());
	        updateStudent.setLastName(studentDetails.getLastName());
	        updateStudent.setEmailId(studentDetails.getEmailId());

	        studentrepo.save(updateStudent);

	        return ResponseEntity.ok(updateStudent);
	    }
	 
	 @DeleteMapping("{id}")
	 public ResponseEntity<HttpStatus> deleteStudent( @PathVariable long id){
		 Student student= studentrepo.findById(id).orElseThrow();
		 
		 studentrepo.delete(student);
		  return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
		 
	 }
	

}
