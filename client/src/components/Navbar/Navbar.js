import React from 'react';
import {Link, useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {logout} from '../../store/actions/student'
import {logoutTeacher} from '../../store/actions/teacher'

// import Pdf from '../../documents/some.pdf'


import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,  
  },
}));



const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'))
  // console.log(user)
  // const user = null

  const logOutStudent = (event) => {
    event.preventDefault()
    props.logoutUser()
    history.replace('/')
  }

  const logOutTeacher = (event) => {
    event.preventDefault()
    props.teacherLogout()
    history.replace('/')
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title} onClick={() => history.replace('/')}>
            E<span style={{ fontWeight: 'bold' }}> - Learning</span>
          </Typography>
          {/* { props.isAuthenticatedTeacher|| props.isAuthenticatedStudent ? 
            <Button color="inherit">
              Private Lessons
            </Button> 
            : null} */}
          {props.isAuthenticatedStudent ? 
            <Button 
            // color="secondary" 
            component={Link}
            className='text-white'
            to='/student-dashboard'>Dashboard</Button> : null}
          { props.isAuthenticatedTeacher ?
            ( <div style={{display: "flex"}}>
            <Avatar className={classes.avatar} alt = ""> {user.result.firstName.charAt(0)}</Avatar>
            <Button color="secondary" onClick={logOutTeacher}>Log Out</Button>
          </div>)
            : (
              <Button 
              className='btn btn-primary'
                color="inherit"
                component={Link}
                to='/teacher'>Teacher
              </Button>
            )
          }
          { props.isAuthenticatedStudent ? (
            <div style={{display: "flex"}}>
              <Avatar className={classes.avatar} alt = ""> {user.result.firstName.charAt(0)}</Avatar>
              <Button color="secondary" onClick={logOutStudent}>Log Out</Button>
            </div>
          ): (
            <Button 
              color="inherit"
              component={Link}
              to='/student'
              className='btn btn-primary'>Student
            </Button>
          )}
          {/* <a href={Pdf} rel="noreferrer" target = "_blank">Download Pdf</a> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticatedStudent: state.studentReducer.studentIsAuthenticated,
    isAuthenticatedTeacher: state.teacherReducer.teacherIsAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout()),
    teacherLogout: () => dispatch(logoutTeacher()) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)