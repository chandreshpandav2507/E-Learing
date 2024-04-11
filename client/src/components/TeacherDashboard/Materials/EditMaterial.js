import { Button } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { Modal, Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux';

import { updateMaterial } from '../../../store/actions/teacher'

function EditModel(props) {
    console.log(props.data.subject)
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        document: null
    });
    const {
        name,
        subject,
        document
    } = formData
    // console.log(subject)
    useEffect(() => {
        if(props.data) {
            setFormData(props.data);
        }
    }, [props.data]);
    const handleSubmit = (event) => {
        event.preventDefault()
        
        var fd = new FormData()
        fd.append('name', name)
        fd.append('subject', subject)
        fd.append('document', document)
        console.log(fd)
        // console.log(props.data._id)
        // console.log(props.addMaterial())
        props.MaterialUpdate(props.data._id, fd);
        props.onHide();
    }
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }
    
    const handleFileChange = (event) => {
        var file = event.target.files[0];
        console.log(file)
        setFormData({...formData, [event.target.name]: file })
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
            Edit Material Form
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form noValidate>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik101">
                    <Form.Label>Material name</Form.Label>
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
                    <Form.Group className='ml-2'>
                        <label>Upload Document File </label>
                        <input type="file" name="document" className="form-control md-6" onChange={handleFileChange}/>
                    </Form.Group>
                </Form.Row>
                </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide} variant='contained' color="secondary" >Close</Button>
            <Button variant='contained' color="primary" onClick={handleSubmit}>Update Material</Button>
        </Modal.Footer>
        </Modal>
    );
    }

const mapDispatchToProps = dispatch => {
    return {
        MaterialUpdate: (id, formData) => dispatch(updateMaterial(id, formData))
    }
}

export default connect(null, mapDispatchToProps)(EditModel)