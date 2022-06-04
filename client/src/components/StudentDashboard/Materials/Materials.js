import { Button } from '@material-ui/core'
import React from 'react'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import {viewMaterial} from '../../../api'

const Materials = (props) => {
    // console.log(props.subjects)
    const showDocument = async (id) => {
        const response = await viewMaterial(id)
        console.log(response)
        const file = new Blob([response.data], {type: 'application/pdf'})
        console.log(file)
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    }
    return (
        <div>
            {props.materials.length === 0 ? 
             <div className="page-content page-container">
                <div className="padding">
                    <h2 className="ml-3">MATERIALS</h2>
                    <div className='mx-auto'>
                        <h2 className='mt-5 mb-5 ml-3 text-danger font-weight-bold'>No Materials Found!</h2>
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
                                </tr>
                            </thead>
                            <tbody>
                                {props.materials.map((material, index) => (
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
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

/* const mapDispatchToProps = dispatch => {
    return {
        addMaterial: (formData) => dispatch(createMaterial(formData))
    }
}
 */
export default Materials