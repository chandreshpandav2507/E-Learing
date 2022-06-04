import React from 'react'

import {} from '@material-ui/core'

import { Container, Avatar, Button, CssBaseline, Typography, Accordion, AccordionSummary, AccordionDetails, ListItemText, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EditIcon from '@material-ui/icons/Edit'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { connect } from 'react-redux';
import {signUp} from '../../../store/actions/teacher'


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

const ReviewDetails = ({ formData, navigation,...props}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        props.signupTeacher(formData)
    }
    const { go } = navigation
    const {
        firstName,
        lastName,
        email,
        phone,
        subjects,
        languageKnown,
        address,
        degree,
        universityName,
        ratePerHour
      } = formData

    const classes = useStyles();

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
                Teacher Review Details 
            </Typography>
            
        </div>
        <div style={{marginTop: '1rem'}}>
        <RenderAccordion width='100%' go={go} summery='Personal Details' details={[
                { 'Fist Name': firstName },
                { 'Last Name': lastName },
                { 'Email Address': email },
                { 'Phone Number': phone }
        ]} />
        <RenderAccordion width='100%' go={go} summery='Other Details' details={[
                { 'Address': address},
                { 'Subjects': subjects },
                { 'Langauge Known': languageKnown },
                { 'Final Education Degree': degree },
                { 'University Name': universityName },
                { 'Rate Per Hour': ratePerHour }
        ]} />
        </div>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            >
            Submit
        </Button>

        {console.log(formData)}
        </Container>
    )
}


export const RenderAccordion = ({ summery, details, go}) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
            {summery}
        </AccordionSummary>
        <AccordionDetails>
            <div>
                {
                   details.map((data, index) => {
                       const objectKey = Object.keys(data)[0]
                       const objectValue = data[Object.keys(data)[0]]
                       return <ListItemText key={index}>{objectKey}: {Array.isArray(objectValue) ? objectValue.map(value => value + ',') : objectValue}  </ListItemText>
                    })
                }
                <IconButton
                    color='primary' 
                    onClick={() => go(summery)}>
                    <EditIcon /> 
                </IconButton>
            </div>
            
        </AccordionDetails>
    </Accordion>
)

const mapDispatchToProps = dispatch => {
    return{
        signupTeacher: (formData) => dispatch(signUp(formData))
    } 
}

export default connect(null, mapDispatchToProps)(ReviewDetails)
