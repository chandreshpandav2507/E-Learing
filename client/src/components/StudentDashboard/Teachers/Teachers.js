import { Button } from '@material-ui/core'
import React from 'react'

import {connect} from 'react-redux'

import { dissmissTeacher } from '../../../store/actions/student'

const Teachers = (props) => {
    const dissmissHandler = (id) => {
        console.log(id)
        props.removeTeacher(id)
    }
    return (
        <div>
            {console.log(props.teachers.result)}
            { props.teachers.result.length === 0 ?
             <div className="page-content page-container">
             <div className="padding">
                 <h2 className="ml-3">TEACHERS</h2>
                 <div className='mx-auto'>
                     <h2 className='mt-5 mb-5 ml-3 text-danger font-weight-bold'>No Teachers Found! Please Hire a Teacher!</h2>
                 </div>
             </div>
             </div>
         : 
        <div className="page-content page-container">
            <div className="padding">
                <h2 className="ml-3">TEACHERS</h2>
                <div className='row mx-auto'>
                {props.teachers.result.map((teacher, index) => (
                <div key ={index} className="col-sm-6 col-md-4">
                    <div className="card">
                    <div className="image mx-auto">
                        <img src="https://image.shutterstock.com/image-vector/male-teacher-standing-front-blackboard-260nw-402654784.jpg" alt='Not found'/>
                    </div>
                    <div className="card-inner">
                        <div className="header sm-6">
                        <h2 className='font-weight-boldtext-info'>  
                            {teacher.firstName} {teacher.lastName}
                        </h2>
                        </div>
                        <div className="d-flex">
                        <div className='p-2'>
                            <h5>{teacher.degree}</h5>
                        </div>
                        <div className='ml-auto p-2'>
                            <p className="font-weight-bold text-success"> ₹ {teacher.ratePerHour} Per Hour. </p>
                        </div>
                        </div>
                        <div className="content">
                            <ul className='row' style={{listStyle: 'none', marginLeft: '-10%'}}>
                            {teacher.subjects.map((subject, index) => (
                                <li className='list-group-item m-1 rounded border-primary bg-primary text-white' key={index}>{subject}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    <Button variant='contained' color="primary" onClick={() => dissmissHandler(teacher._id)}>DISSMISS TEACHER</Button>
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
        removeTeacher: (id) => dispatch(dissmissTeacher(id))
    }
}

export default connect(null, mapDispatchToProps) (Teachers)
