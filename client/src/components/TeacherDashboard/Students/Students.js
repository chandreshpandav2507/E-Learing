import { Button } from '@material-ui/core'
import React from 'react'

import {connect} from 'react-redux'

import {dissmissStudent} from '../.././../store/actions/teacher'

const Teachers = (props) => {
    const dissmisHandler = (id) => {
        if(window.confirm("Are you sure want to dismiss teacher?")) {
            props.removeStudent(id)
        }
    }
    return (
        <div>
        { props.students.length === 0 ? 
            <div className="page-content page-container">
            <div className="padding">
                <h2 className="ml-3">STUDENTS</h2>
                <div className='mx-auto'>
                    <h2 className='mt-5 mb-5 ml-3 text-danger font-weight-bold'>
                        No Student found!
                    </h2>
                </div>
            </div>
        </div>
         :  
        <div className="page-content page-container">
            <div className="padding">
                <h2 className="ml-3">STUDENTS</h2>
                <div className='row mx-auto'>
                {props.students.map((student, index) => (
                <div key ={index} className="col-sm-6 col-md-4">
                    <div className="card">
                    <div className="image mx-auto">
                        <img src="https://image.freepik.com/free-vector/set-different-children-holding-math-number_1308-52883.jpg" alt='not found'/>
                    </div>
                    <div className="card-inner">
                        <div className="header sm-6">
                            <h2 className='font-weight-boldtext-info'>  
                                {student.firstName} {student.lastName}
                            </h2>
                            <div class='mt-3 ml-0 row'>
                                <p class='font-weight-bold'>Email:</p>
                                <p className='ml-2 font-weight-bold text-info'>  
                                    {student.email}
                                </p>
                            </div>
                            <div class='ml-0 row'>
                                <p class='font-weight-bold'>Phone:</p>
                                <p className='ml-2 font-weight-bold text-info'>  
                                    +91 {student.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button variant='contained' color="primary" onClick={() => dissmisHandler(student._id)}>Dissmiss student</Button>
                    </div>
                </div>
                ))} 
            </div>
        </div>

        </div>
    } 
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeStudent: (id) => dispatch(dissmissStudent(id))
    }
}


export default connect(null, mapDispatchToProps) (Teachers)
