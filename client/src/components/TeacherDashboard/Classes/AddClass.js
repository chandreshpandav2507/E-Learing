import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Modal, Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect, useHistory} from 'react-router-dom'

import { createClass } from '../../../store/actions/teacher'
// import Alert  from '../../Alert/Alert'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function AddClass(props) {
    const classes = useStyles();
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        url: '',
        time: new Date()
    });
    const {
        name,
        subject,
        url,
        time
    } = formData

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(formData)
        // console.log(props.addClass)
        props.addClass(formData);
        props.onHide();
    }
    const handleChange = (event) => {
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
          {/* <Alert /> */}
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Add Class
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form noValidate>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik101">
                    <Form.Label>Class name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label htmlFor="inlineFormCustomSelectPref">
                            Subject
                        </Form.Label>
                        <Form.Control
                            as="select"
                            id="inlineFormCustomSelectPref"
                            custom
                            value={subject}
                            name="subject"
                            onChange={handleChange}
                            >
                            <option value="0">Select Subject...</option>
                            {props.subjects.map((subject, index) => (
                                <option key={index} value={subject}>{subject}</option>
                            ))} 
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                
                <Form.Row>
                    <Form.Group as={Col} md="12"  >
                    <Form.Label>Class URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="url"
                        required
                        value={url}
                        onChange={handleChange}
                    />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationFormik101">
                        <TextField
                        id="datetime-local"
                        label="Class Date and Time"
                        type="datetime-local"
                        name="time"
                        defaultValue={time}
                        value={time}
                        className={classes.textField}
                        onChange={handleChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </Form.Group>
                </Form.Row>
                </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide} variant='contained' color="secondary" >Close</Button>
            <Button variant='contained' color="primary" onClick={handleSubmit}>Add Class</Button>
        </Modal.Footer>
      </Modal>
    );
  }


const mapDispatchToProps = dispatch => {
    return {
        addClass: (formData) => dispatch(createClass(formData))
    }
}
 export default connect(null, mapDispatchToProps)(AddClass)