import * as actionTypes from './actionTypes'

import * as api from '../../api/index'
import { setAlert } from './alert'

export const loginStudent = (formData) => async (dispatch) => {
    try{
        const {data} = await api.login(formData)
        
        dispatch(setAlert('Registration Successful', 'primary'))
        dispatch({ type: actionTypes.STUDENT_AUTH_SUCCESS, data })
    } catch(error){
        const errors = error.response.data.error
        // console.log()
        dispatch(setAlert(errors, 'light'))
        dispatch({ type: actionTypes.STUDENT_AUTH_FAIL, error })
    }
}   

export const signup = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        
        const {data} = await api.registerUser(formData, config)
        dispatch(setAlert('Registration Successful', 'primary'))
        dispatch({ type: actionTypes.STUDENT_REGISTER_SUCCESS, data })
    } catch(error){
        const errors = error.response.data.errors
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'light')))
        }
        dispatch({type: actionTypes.STUDENT_REGISTER_FAIL, error: error.message})
    }
}   

export const getProfile = () => {
    return async dispatch => {
        try{
            const { data } = await api.getStudentProfile()
            dispatch({type: actionTypes.SET_STUDENT_PROFILE, data})
        } catch(error) {
            console.log(error.message)
        }
    }
}

export const updateStudent = (formData) => async dispatch => {
    try {
        const { data } = await api.updateStudent(formData)
        dispatch(setAlert('Update Profile Successfully!', 'primary'))
        dispatch({ type: actionTypes.STUDENT_UPDATE_SUCCESS, data })
        
    } catch(error) {
        // console.log(error.response.data.error)
        dispatch({ type: actionTypes.STUDENT_UPDATE_FAIL, error })
    }
}

export const getTeachers = () => async dispatch => {
    try {
        const { data } = await api.getAllTeachers()
        dispatch({type: actionTypes.FETCH_ALL_TEACHERS, data})
    } catch(error) {
        console.log(error.message)
        dispatch({type: actionTypes.FETCH_ALL_TEACHERS_FAILED})
    }
}

export const hireTeacher = (id) => async dispatch => {
    try {
        const { data } = await api.hireTeacher(id)
        dispatch(setAlert('Teacher Added Sucessfully!', 'primary'))
        dispatch({ type: actionTypes.HIRE_TEACHER_SUCESSFULL, data })
    } catch(error) {
        const errorMessage = error.response.data.error
        dispatch(setAlert(errorMessage, 'light'))
        dispatch({ type: actionTypes.HIRE_TEACHER_FAIL, error })
    }
}

export const getHiredTeachers = () => async dispatch => {
    try {
        const { data } = await api.getHiredTeachers()
        dispatch({ type: actionTypes.FETCH_HIRED_TEACHERS, data})
    } catch(error) {
        dispatch({ type: actionTypes.FETCH_HIRED_TEACHERS_FAILED, error })
    }
}

export const getAllBooks = () => async dispatch => {
    try {
        const { data } = await api.getBooks()
        console.log(data)
        dispatch({ type: actionTypes.STUDENT_FETCH_BOOKS, data })
    } catch(error) {
        dispatch({ type: actionTypes.STUDENT_FETCH_BOOKS_FAIL, error })
    }
}

export const getMaterialsForStudent = () => async dispatch => {
    try {
        const { data } = await api.getMaterialsForStudent()
        console.log(data)
        dispatch({ type: actionTypes.STUDENT_FETCH_MATERIALS, data })
    } catch(error) {
        dispatch({ type: actionTypes.STUDENT_FETCH_MATERIALS_FAIL, error })
    }
}

export const getClassesForStudent = () => async dispatch => {
    try {
        const { data } = await api.getClassesForStudent()
        console.log(data)
        dispatch({ type: actionTypes.FETCH_STUDENT_CLASSES, data })
    } catch(error) {
        dispatch({ type: actionTypes.FETCH_STUDENT_CLASSES_FAIL, error })
    }
}

export const dissmissTeacher = (id) => async dispatch => {
    try {
        const { data } = await api.removeTeacher(id)
        dispatch(setAlert('Dissmiss Teacher Successfully', 'danger'))
        dispatch({ type: actionTypes.REMOVE_TEACHER, data })
    } catch(error) {
        dispatch({ type: actionTypes.REMOVE_TEACHER_FAIL, error })

    }
}

export const logout = () => dispatch => {
    dispatch({ type: actionTypes.STUDENT_LOGOUT })
}