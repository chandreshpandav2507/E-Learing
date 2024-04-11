import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { BtnContainer, Container } from './HeroTextStyle'
import {getClassesForStudent } from '../../store/actions/student'

const HeroText = (props) => {
  let history = useHistory();
  
  const onClickHandler = async(event) => {
    event.preventDefault()
    await props.fetchClassesForStudent()
    history.push('/student-dashboard')
    // <Redirect to='/student-dashbaord'/>
  }

  return (
    <Container>
      <h1>Learn</h1>
      <h1>Anything.</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>
      <BtnContainer>
        {
          props.isAuthenticatedStudent &&
          <button onClick={onClickHandler}>
            Student Deshboard
          </button>
        }
        {
          props.isAuthenticatedTeacher &&
          <button onClick={() => history.push('/teacher-dashboard')}>
            Teacher Deshboard
          </button>
        }
        
      </BtnContainer>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticatedStudent: state.studentReducer.studentIsAuthenticated,
    isAuthenticatedTeacher: state.teacherReducer.teacherIsAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchClassesForStudent: () => dispatch(getClassesForStudent())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroText);
