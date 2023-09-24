
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponet';
import HeaderComponent from './components/HeaderComponent';
import RegistrationForm from './components/RegistrationForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <div>
    <HeaderComponent/>
    <Router>
        <div className= "container">
          <Routes>
              <Route exact path = "/" element = {<StudentList/>}></Route>
              <Route path = "/students" element = {<StudentList/>}></Route>
              <Route path = "/add-student" element = {<RegistrationForm/>}></Route>
              <Route path = "/edit-student/:id" element = {<RegistrationForm/>}></Route>
              
            </Routes>
        </div>
        <FooterComponent />
        </Router>
    <FooterComponent/>
    </div>
  );
}

export default App;
