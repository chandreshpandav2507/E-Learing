import React from 'react'

import { Container, Avatar, TextField ,Button, CssBaseline, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(0),
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
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const PersonalDetails = ({ formData, setFormData, navigation }) => {

  const classes = useStyles();

  const {
    firstName,
    lastName,
    email,
    password,
    phone
  } = formData;
  console.log(firstName)


    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Teacher Sign up
            </Typography>
            <Typography component="h1" variant="h5">
                Teacher Personal Details
            </Typography>
            <form className={classes.form} noValidate> 
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        value={firstName}
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        sm={6}
                        onChange={setFormData}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        value={lastName}
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        sm={6}
                        onChange={setFormData}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        autoComplete="email"
                        onChange={setFormData}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
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
                        onChange={setFormData}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="phone"
                        value={phone}
                        label="Phone Number"
                        id="phone"
                        autoComplete="current-password"
                        onChange={setFormData}
                    />
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={() => navigation.next()}
                  >
                    Next
                </Button>
            </Grid>
            </form>
        </div>
        </Container>
    )
}

export default PersonalDetails
