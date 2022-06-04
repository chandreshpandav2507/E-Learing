import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux';

/* import EditModel from './EditMaterial'*/
import AddClass from './AddClass'
import EditClass from './EditClass' 

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteClass } from '../../../store/actions/teacher'

const Classes = (props) => {
    // console.log(props.subjects)
    const [modalShow, setModalShow] = useState(false);
    const [editClassShow, setEditClassShow] = useState(false)
    const [editData, setEditData] = useState({})

    const editButtonHandler = (classOne) => {
        setEditData(classOne)
        setEditClassShow(true)
    }

    const deleteButtonHandler = (classOne) => {
        console.log(classOne._id)
        
        props.removeClass(classOne._id)
    }

    return (
        <div>
            {props.classes.length === 0 ? 
             <div className="page-content page-container">
                <div className="padding">
                    <h2 className="ml-3">CLASSES</h2>
                    <div className='mx-auto'>
                        <h2 className='mt-5 mb-5 ml-3 text-danger font-weight-bold'>No Classes added yet! Please Add Class!</h2>
                        <Button startIcon={<AddIcon/>} variant="contained" color='primary' fullWidth onClick={() => setModalShow(true)}>
                            Add Class
                        </Button>

                       <AddClass
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            subjects={props.subjects}
                        />
                    </div>
                </div>
            </div>
            :  
            <div className="page-content page-container">
                <div className="padding">
                    <h2 className="ml-3">CLASSES</h2>
                    <div className='row mx-auto'>
                        <table className="ml-3 mt-3 table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Class URL</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                               {props.classes.map((classOne, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{classOne.name}</td>
                                        <td>{classOne.subject}</td>
                                        <td><a href={classOne.url}>{classOne.url}</a></td>
                                        <td>{classOne.time.split('T')[0]}</td>
                                        <td>{classOne.time.split('T')[1]}</td>
                                        {/* <td>{classOne.time}</td> */}
                                        <td>{<Button startIcon={<EditIcon/>} 
                                            onClick={() => editButtonHandler(classOne)}/>}</td>
                                        <td>
                                            {<Button 
                                                startIcon={<DeleteIcon/>} 
                                                onClick={() => deleteButtonHandler(classOne)}
                                                />}
                                        </td>
                                    </tr>
                                ))} 
                                
                            </tbody>
                        </table>
                    </div>
                    <Button className='ml-3' startIcon={<AddIcon/>} variant="contained" color="primary" onClick={() => setModalShow(true)}>
                    Add Class
                </Button>

                <AddClass
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    subjects={props.subjects}
                    materials = {props.materials}
                />
                
               <EditClass 
                show={editClassShow}
                onHide={() => setEditClassShow(false)}
                data = {editData}
                subjects = {props.subjects}
                />
                </div>
            </div>
        }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeClass: (id) => dispatch(deleteClass(id))
    }
}

export default connect(null, mapDispatchToProps)(Classes)