import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

// import useStyles from './StudentStyle'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Input from '../../SignUp/Input'

import {loginTeacher} from '../../../store/actions/teacher'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }, 
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  gender: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const TeacherSignIn = (props) => {

  // const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const {
    email,
    password
  } = formData;

  const onChangeHandler = event => {
    setFormData({...formData, [event.target.name]: event.target.value })
  }


  const classes = useStyles();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)


  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(props.teacherLogin)
    props.teacherLogin(formData)
  }

  if(props.isAuthenticated) {
    // history.replace('/')
    return <Redirect to='/' />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Teacher Sign In
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}> 
          <Grid container spacing={2}>
            <Input
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              onChangeHandler={onChangeHandler}
            />
            <Input
              variant="outlined"
              required
              fullWidth
              name="password"
              value={password}
              label="Password"
              type = "password"
              type={ showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              onChangeHandler={onChangeHandler}
              handleShowPassword ={handleShowPassword}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

/* const mapStateToProps = state => {
  return {
    authData: state.teacherReducer.authData
  }
} */
const mapStateToProps = state => {
  return {
    isAuthenticated: state.teacherReducer.teacherIsAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    teacherLogin: (formData) => dispatch(loginTeacher(formData))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TeacherSignIn)