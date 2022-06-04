import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

// import useStyles from './StudentStyle'
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { signup, loginStudent} from '../../store/actions/student'
import Input from './Input'
import { setAlert } from '../../store/actions/alert'
import Alert from '../Alert/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://image.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap_335657-3285.jpg)', 
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '100% 80%',
    backgroundPosition: 'center',
    height: '80vh'
  },
  paper: {
    margin: theme.spacing(15, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const StudentSignUp = (props) => {
  const classes = useStyles();
  const [isSignUp, setisSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: '',
    phone: ""
  });

  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    confirmPassword
  } = formData;

  const onChangeHandler = event => {
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const switchMode = () => {
    setisSignUp(previsSignUp => !previsSignUp)
    // handleShowPassword(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(isSignUp) {
      if(password !== confirmPassword){
        return props.setAlert('Password Doen\'t match!', 'light')
      }
      props.signupStudent(formData)
    } else {
      props.studentLogin(formData)
    } 
  }
  
  if(props.isAuthenticated){
    return <Redirect to='/student-dashboard' />
  }

  return (
    <Grid container component="main" className={classes.root}>
      
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Alert/>

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignUp ? 'Student Sign up' : 'Student Sign in'}
        </Typography>
        {/* onSubmit={handleSubmit} */}
        <form className={classes.form} noValidate> 
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                  <Input
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    value={firstName}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    half
                    onChangeHandler={onChangeHandler}
                  />
                  <Input
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    value={lastName}
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    half
                    onChangeHandler={onChangeHandler}
                  />
                </>
              )
            }
            <Input
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="text"
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
              type = {showPassword ? "text": "password"}
              id="password"
              autoComplete="current-password"
              onChangeHandler={onChangeHandler}
              handleShowPassword ={handleShowPassword}
            />
            {
              isSignUp ? (
                <Input
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                value={confirmPassword}
                label="Confirm Password"
                type = "Password"
                autoComplete="current-password"
                onChangeHandler={onChangeHandler}
              />
              ) : null
            }
            {
              isSignUp ? (
                <Input
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  value={phone}
                  label="Phone Number"
                  id="phone"
                  autoComplete="current-password"
                  onChangeHandler={onChangeHandler}
                />
              ) : null
            }
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
           { isSignUp?  "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={switchMode} variant="body2">
                {isSignUp ? 'Already have an account? Sign in' : "Don't have account? Sign up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.studentReducer.studentIsAuthenticated
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signupStudent: (formData) => dispatch(signup(formData)),
    studentLogin: (formData) => dispatch(loginStudent(formData)),
    setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentSignUp)




