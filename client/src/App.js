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
function App(props) {
  let routes = (
    <Switch>
      <Route path='/teacher' exact component={Teacher} />
      <Route path='/student' exact component={SignUp} />
      <Route path='/' exact component ={Hero} />  
      <Redirect to='/'/>
    </Switch>
  )

  if(props.isStudentAuthenticated) {
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

  if(props.isTeacherAuthenticated) {
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
