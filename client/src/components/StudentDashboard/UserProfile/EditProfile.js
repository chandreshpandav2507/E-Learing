import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

import  { Grid } from '@material-ui/core'

import {updateStudent} from '../../../store/actions/student'

import Input from '../../SignUp/Input'

function EditProfile(props) {
    const history = useHistory()

    // console.log(props)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
      });
    // console.log(props.data)
    const {
        firstName,
        lastName,
        email,
        password,
        phone
    } = formData

    const handleSubmit = (event) => {
        event.preventDefault()
        
        console.log(formData)
        props.studentUpdate(formData)
        history.replace('/')
    }
    const onChangeHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="mt-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Edit Student Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Grid container spacing={2}>
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
              id="password"
              autoComplete="current-password"
              onChangeHandler={onChangeHandler}
            />
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
        </Grid>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide} variant='contained' color="secondary" >Close</Button>
            <Button variant='contained' color="primary" onClick={handleSubmit}>Update Profile</Button>
        </Modal.Footer>
      </Modal>
    );
  }


const mapDispatchToProps = dispatch => {
    return {
        studentUpdate: (formData) => dispatch(updateStudent(formData))
    }
}

export default connect(null, mapDispatchToProps)(EditProfile)