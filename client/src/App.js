import {  BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SignUp from './components/SignUp/StudentSignUp'
// import Books from './components/Books/Books'
import Teacher from './components/Teacher/Teacher'
import './App.css'
import Footer from './components/Footer/Footer'
import StudentDashboard from './components/StudentDashboard/StudentDeshboard'
import TeacherDashboard from './components/TeacherDashboard/TeacherDashBoard'
import FindTeachers from './components/FindTeachers/FindTeachers'
import {  connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import ForgotPassword from "./components/Teacher/ForgotPassword";
import StudentForgotPassword from "./components/SignUp/StudentForgotPassword";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminListItems from "./components/Admin/AdminListItems";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
function App(props) {
  const profile = localStorage.getItem('profile');
  const { token, userType } = JSON.parse(profile) || {};
  let routes = (
    <Switch>
      <Route path='/teacher' exact component={Teacher} />
      <Route path='/student' exact component={SignUp} />
      <Route path={'/teacher-forgot-password'}  exact component={ForgotPassword} />
      <Route path={'/student-forgot-password'}  exact component={StudentForgotPassword} />
      <Route path={'/admin'}  exact component={AdminLogin} />
      <Route path={'/admin-dashboard'}  exact component={AdminListItems} />
      <Route path='/' exact component ={Hero} />
      <Redirect to='/'/>
    </Switch>
  )

  if(token && userType === 'student') {
    routes = (
      <Switch>
        {/* <Route path='/teacher-dashboard' exact component={TeacherDashboard} /> */}
        <Route path='/find-teachers' exact component={FindTeachers} />
        <Route path='/student-dashboard' exact component={StudentDashboard} />
        <Route path='/teacher' exact component={Teacher} />
        <Route path='/' exact component ={Hero} />
        <Redirect to='/'/>

    </Switch>
    )
  }

  if(token && userType === 'teacher') {
    routes = (
      <Switch>
        {/* <Route path='/student-dashboard' exact component={StudentDashboard} /> */}
        <Route path='/teacher-dashboard' exact component={TeacherDashboard} />
        <Route path='/student' exact component={SignUp} />
        <Route path='/' exact component ={Hero} />
        <Redirect to='/'/>
    </Switch>
    )
  }
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      {routes}
      
      <Footer />
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isStudentAuthenticated: state.studentReducer.studentIsAuthenticated,
    isTeacherAuthenticated: state.teacherReducer.teacherIsAuthenticated
  }
}

export default connect(mapStateToProps) (App);
