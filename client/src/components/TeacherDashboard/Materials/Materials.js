import { Button } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import {connect, useSelector} from 'react-redux';

import EditModel from './EditMaterial'
import AddMaterial from './AddMaterial'

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import {viewMaterial} from '../../../api'
import { deleteMaterial } from '../../../store/actions/teacher'
import {isEmpty} from "lodash";

const Materials = (props) => {
    // console.log(props.subjects)
    const [modalShow, setModalShow] = useState(false);
    const [editModelShow, setEditModelShow] = useState(false)
    const [editData, setEditData] = useState({});
    const [renderMaterials, setRenderMaterials] = useState([]);
    const { materials } = useSelector(state => state.teacherReducer);

    const showDocument = async (id) => {
        const response = await viewMaterial(id)
        console.log(response)
        const file = new Blob([response.data], {type: 'application/pdf'})
        console.log(file)
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    }

    const editButtonHandler = (material) => {
        setEditData(material)
        setEditModelShow(true)
    }

    const deleteButtonHandler = (material) => {
        console.log(material._id)
        if(window.confirm("Are you sure want to delete Material?")) {
            props.removeMaterial(material._id)
        }
    }

    useEffect(() => {
        !isEmpty(materials) ? setRenderMaterials(materials): setRenderMaterials([]);
    }, [materials])

    return (
        <div>
            {renderMaterials.length === 0 ?
             <div className="page-content page-container">
                <div className="padding">
                    <h2 className="ml-3">MATERIALS</h2>
                    <div className='mx-auto'>
                        <h2 className='mt-5 mb-5 ml-3 text-danger font-weight-bold'>No Material added yet! Please Add Material!</h2>
                        <Button startIcon={<AddIcon/>} variant="contained" color='primary' fullWidth onClick={() => setModalShow(true)}>
                            Add material
                        </Button>

                        <AddMaterial
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            addMaterial={props.addMaterial}
                            subjects={props.subjects}
                        />
                    </div>
                </div>
            </div>
             :  
            <div className="page-content page-container">
                <div className="padding">
                    <h2 className="ml-3">MATERIALS</h2>
                    <div className='row mx-auto'>
                        <table class="ml-3 mt-3 table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Download</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderMaterials.map((material, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{material.name}</td>
                                        <td>{material.subject}</td>
                                        <td>
                                            {<Button 
                                                startIcon={<PictureAsPdfIcon fontSize='large'/>}
                                                onClick={() => showDocument(material._id)}
                                            />}
                                        </td>
                                        <td>{<Button startIcon={<EditIcon/>} 
                                            onClick={() => editButtonHandler(material)}/>}</td>
                                        <td>
                                            {<Button 
                                                startIcon={<DeleteIcon/>} 
                                                onClick={() => deleteButtonHandler(material)}
                                                />}
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                    <Button className='ml-3' startIcon={<AddIcon/>} variant="contained" color="primary" onClick={() => setModalShow(true)}>
                    Add Material
                </Button>

                <AddMaterial
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    addMaterial={props.addMaterial}
                    subjects={props.subjects}
                    materials = {renderMaterials}
                />

               <EditModel 
                show={editModelShow}
                onHide={() => setEditModelShow(false)}
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
        removeMaterial: (id) => dispatch(deleteMaterial(id))
    }
}

export default connect(null, mapDispatchToProps)(Materials)