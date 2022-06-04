import React from 'react'

import { Container, Avatar, TextField ,Button, CssBaseline, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


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

const OtherDetails = ({ formData, setFormData, navigation }) => {
    const classes = useStyles();
    // console.log(navigation)

    const { address, languageKnown, degree, universityName, subjects, ratePerHour} = formData

    const [language, setLanguage] = React.useState({
        English: false,
        Hindi: false,
        Gujarati: false
    });

    const [subjectsCheckboxes, setsubjectsCheckboxes] = React.useState({
        Maths: false,
        Science: false,
        Physics: false,
        Chemistry: false
    });
    
    const handleLanguageChange = (event) => {
        setLanguage({ ...language, [event.target.name]: event.target.checked })
        if(event.target.checked){
            languageKnown.push(event.target.name)
        } else {
            languageKnown.splice(languageKnown.indexOf(event.target.name), 1)
        }
    };

    const handleSubjectChange = (event) => {
        setsubjectsCheckboxes({ ...subjectsCheckboxes, [event.target.name]: event.target.checked })
        if(event.target.checked){
            subjects.push(event.target.name)
        } else {
            subjects.splice(subjects.indexOf(event.target.name), 1)
        }
    };

    console.log(formData)
    return (
        <Container component="main" maxWidth="xl">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Teacher Sign up
            </Typography>

            <Typography component="h1" variant="h5">
                Teacher Other Details 
            </Typography>
            <form className={classes.form} noValidate> 
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="fname"
                        name="address"
                        variant="outlined"
                        value={address}
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        autoFocus
                        sm={6}
                        onChange={setFormData}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography component="h1" variant="body1">
                        Languages Known
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                            <Checkbox 
                                checked={languageKnown.English} 
                                onChange={handleLanguageChange} 
                                name="English"
                                color="primary"
                                />
                            }
                            label="English"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={languageKnown.Hindi}
                                onChange={handleLanguageChange}
                                name="Hindi"
                                color="primary"
                            />
                            }
                            label="Hindi"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={languageKnown.Gujarati}
                                onChange={handleLanguageChange}
                                name="Gujarati"
                                color="primary"
                            />
                            }
                            label="Gujarati"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography component="h1" variant="body1">
                        Subjects
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                            <Checkbox 
                                checked={subjectsCheckboxes.Maths} 
                                onChange={handleSubjectChange} 
                                name="Maths"
                                color="primary"
                                />
                            }
                            label="Maths"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={subjectsCheckboxes.Science}
                                onChange={handleSubjectChange}
                                name="Science"
                                color="primary"
                            />
                            }
                            label="Science"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={subjectsCheckboxes.Physics}
                                onChange={handleSubjectChange}
                                name="Physics"
                                color="primary"
                            />
                            }
                            label="Physics"
                        />
                        <FormControlLabel
                        control={
                        <Checkbox
                            checked={subjectsCheckboxes.Chemistry}
                            onChange={handleSubjectChange}
                            name="Chemistry"
                            color="primary"
                        />
                        }
                        label="Chemistry"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="degree"
                        value={degree}
                        label="Your Final Education Degree"
                        name="degree"
                        autoComplete="degree"
                        sm={6}
                        onChange={setFormData}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="universityName"
                        label="University Name"
                        name="universityName"
                        value={universityName}
                        autoComplete="university"
                        onChange={setFormData}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        type="Number"
                        required
                        fullWidth
                        id="ratePerHour"
                        label="Rate per Hour in Rs."
                        name="ratePerHour"
                        value={ratePerHour}
                        autoComplete="ratePerHour"
                        onChange={setFormData}
                    />
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  style={{marginLeft: '15%'}}
                  onClick={() => navigation.previous()}
                  >
                    Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{marginLeft: '40%'}}
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

export default OtherDetails
