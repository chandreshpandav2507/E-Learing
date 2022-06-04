import React from "react";

import image from '../../assets/hero.png';
import bg from "../../assets/bg.png";
import students from "../../assets/students.png";
import Button from '@material-ui/core/Button'

import HeroText from "../HeroText/HeroText";
import {Container, Wrapper, InnerWrapper, Left,TiltWrapper, Img, StudentImg} from './HeroStyle'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getTeachers } from "../../store/actions/student";


const Hero = (props) => {
  const history = useHistory()

  const findTeacherHandler = async () => {
    await props.getAllTeachers()
    history.push('/find-teachers')
    // setTimeout(() => history.push('/find-teachers'), 100)
  }
  return (
    <div>
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src={image} alt="@gouthamgtronics" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
    {props.studentIsAuthenticated ? <div style={{display: 'flex', backgroundColor: '#232C2D'}}>
      <div style={{}}> 
        <StudentImg src={ students} style={{marginLeft: '10%'}}/>
      </div>
      <div style={{
            backgroundColor: '#509DA6',  
            height: '310px',
            width: '50%',
            display: 'block',
            marginLeft: '-6%'}}>
          <div style={{margin: '5rem', color: "white"}}>
            <h2>
              <span style={{
                backgroundColor: 'white', 
                color: 'black',
                padding: '5px',
                marginRight: '10px'
                }}> 
                FIND ONLINE
              </span>
              TEACHERS
            </h2>
            <p style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginTop: '32px',
              marginBottom: '10px'
            }}>The path to academic sucess.</p>
            <div style={{
              backgroundColor: 'white',
              height: '3px' 
            }} /> 
            <Button
              style={{
                marginTop: '28px',
                fontWeight: 'bold'
              }}
              color='secondary'
              variant='contained'
              onClick={findTeacherHandler}>
              FIND TEACHERS
            </Button>
          </div>
      </div>
    </div> : null}
    
  </div>
  );
};

const mapStateToProps = state => {
  return{
    studentIsAuthenticated:  state.studentReducer.studentIsAuthenticated
  }
} 
const mapDispatchToProps = dispatch => {
  return {
    getAllTeachers : () => dispatch(getTeachers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);


