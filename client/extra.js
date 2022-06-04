//////////////////////////// ALL ROUTES //////////////////////////
{/* <Alert /> */}
      {/* <Switch>
        {/* <Route path ='/books' exact component={Books} /> 
        <Route path='/teacher' exact component={Teacher} />
        <Route path='/student' exact component={SignUp} />
        <Route path='/student-dashboard' exact component={StudentDashboard} />
        {/* <PrivateRoutes component={StudentDashboard} path='/student-dashboard' exact /> 
        <Route path='/teacher-dashboard' exact component={TeacherDashboard} />
        <Route path='/find-teachers' exact component={FindTeachers} />
        <Route path='/' exact component ={Hero} />
      </Switch> */}


/////////////////////////////// STUDENT SIGN UP /////////////////////////////////////

/*import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
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
import Container from '@material-ui/core/Container';

import { signup, loginStudent} from '../../store/actions/student'
import Input from './Input'
import background from '../../assets/background.jpg'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    // `url(${background})`,
    backgroundImage:  'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

const StudentSignUp = (props) => {

  const [isSignUp, setisSignUp] = useState(false);
  // const dispatch = useDispatch()
  const history = useHistory()
  // const [showPassword, setshowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  });

  const {
    firstName,
    lastName,
    email,
    password,
    phone
  } = formData;

  const onChangeHandler = event => {
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  /* const handleShowPassword = () => {
    setshowPassword((prevShowPassword) => !prevShowPassword)
  } 

  const switchMode = () => {
    setisSignUp(previsSignUp => !previsSignUp)
    // handleShowPassword(false)
  }

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault()
    if(isSignUp) {
      props.signupStudent(formData)
      history.replace('/')
    } else {
      props.studentLogin(formData)
      history.replace('/')
    }
    // console.log(formData)
    // dispatch(signup(formData))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square> }
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignUp ? 'Student Sign up' : 'Student Sign in'}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}> 
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
              // type={ showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              onChangeHandler={onChangeHandler}
              // handleShowPassword ={handleShowPassword}
            />
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
      {/* </Grid> }
    </Container>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    signupStudent: (formData) => dispatch(signup(formData)),
    studentLogin: (formData) => dispatch(loginStudent(formData))
  }
}
export default connect(null, mapDispatchToProps)(StudentSignUp) */



/////////////////////// TEACHER DASHBOARD API CALLS //////////////////////////////

/*  useEffect(() => {
  dispatch(getProfile())
  }, [dispatch]) 

   useEffect(() => {
    dispatch(getStudents())
  }, [dispatch]) 

   useEffect(() => {
    dispatch(getAllBooksCreatedByMe())
  }, [dispatch]) 

   useEffect(() => {
    dispatch(getMaterials())
  }, [dispatch])

  useEffect(() => {
    dispatch(getClassesForTeacher())
  }, [dispatch]) 
 */


////////////////////////////////// STUDENT DASHBOARD //////////////////////////////////

  /* useEffect(() => {
    (async () => {
      const data1 = await api.getClassesForStudent()
      setNewClasses({data1})
  })()
  }, [dispatch]) */


  // setTimeout(()=>{}, 1000)

  /* useEffect(() => {
    dispatch(getAllBooks())
  }, [dispatch]) */

  
  // setTimeout(()=>{}, 1000)

  /* useEffect(() => {
    dispatch(getMaterialsForStudent())
  }, [dispatch]) */

    /* useEffect(() => {
      (async () => {
        const data1 = await api.getClassesForStudent()
        setNewClasses({data1})
    })()
      }, []) */

  /* useEffect(() => {
    (async () => {
        const data1 = await api.getMaterialsForStudent()
        setMaterial({data1})
    })()
  }, [dispatch])
   */
  /* const handleLinks = (value) => {
    setState(value)
  } */

