import React from 'react'
import { connect } from 'react-redux'
import Teacher from './Teacher'
import Alert from '../Alert/Alert'
const FindTeachers = (props) => {
    
    return (
        <div>
            <Alert />
            <Teacher autoFocus data={props.teachers} />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        teachers: state.studentReducer.allTeachers
    }
}

export default connect(mapStateToProps)(FindTeachers)
