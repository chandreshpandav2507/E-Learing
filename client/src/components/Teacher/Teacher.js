import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeacherSignIn from './TeacherSignIn/TeacherSignIn';
import TeacherSignup from './TeacherSignUp/TeacherSignup';
import Alert from '../Alert/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      height: 'auto',
    },
    image: {
      backgroundImage: 'url(https://image.freepik.com/free-vector/computer-science-courses-it-education-e-learning-opportunities-webinars-technology-distance-online-learning-internet-workshop-manager-vector-isolated-concept-metaphor-illustration_335657-2830.jpg)', 
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  }));

const Teacher = () => {
    const classes = useStyles()
  const [isSignUp, setisSignUp] = useState(false);

    const switchMode = () => {
        setisSignUp(previsSignUp => !previsSignUp)
        // handleShowPassword(false)
      }
    return (
        // <Container component="main" maxWidth="xs">
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Alert />

            <div className={classes.paper}>
                {
                    isSignUp ? (
                        <TeacherSignup />
                    ) : (
                        <>
                        <TeacherSignIn />
                        </>
                    )
                    
                }
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link onClick={switchMode} variant="body2">
                        {isSignUp ? 'Already have an account? Sign in' : "Don't have account? Sign up"}
                        </Link>
                    </Grid>
                </Grid>
            </div>
            
        </Grid>
        </Grid>
    )
}

export default Teacher


/* import React, { useState } from 'react';


import {Container, Link} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeacherSignIn from './TeacherSignIn/TeacherSignIn';
import TeacherSignup from './TeacherSignUp/TeacherSignup';

const Teacher = () => {
  const [isSignUp, setisSignUp] = useState(false);

    const switchMode = () => {
        setisSignUp(previsSignUp => !previsSignUp)
        // handleShowPassword(false)
      }
    return (
        <Container component="main" maxWidth="xs">
            {
                isSignUp ? (
                    <TeacherSignup />
                ) : (
                    <>
                    <TeacherSignIn />
                    </>
                )
                
            }
            
            <Grid container justify="flex-end">
                <Grid item>
                    <Link onClick={switchMode} variant="body2">
                    {isSignUp ? 'Already have an account? Sign in' : "Don't have account? Sign up"}
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Teacher */