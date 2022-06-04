import * as actionTypes from './actionTypes'

import * as api from '../../api/index'
import { setAlert } from './alert'

export const loginTeacher = (formData) => async dispatch =>{
    try {
        const { data } = await api.teacherLogin(formData)
        dispatch(setAlert('Login Successful!', 'primary'))
     
        dispatch({ type: actionTypes.TEACHER_AUTH_SUCCESS, data })
    
    } catch(error) {
        const errors = error.response.data.error
        console.log(errors)
        dispatch(setAlert(errors, 'light'))
        dispatch({ type: actionTypes.TEACHER_AUTH_FAIL, error })
    }
}

export const signUp = (formData) => async dispatch =>{
    try {
     const { data } = await api.teacherRegister(formData)
    
     dispatch(setAlert('Registration Successful', 'primary'))
     dispatch({ type: actionTypes.TEACHER_REGISTER_SUCCESS, data })
    
    } catch(error) {
        const errors = error.response.data.errors
        console.log(errors)
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'light')))
        }
        dispatch({ type: actionTypes.TEACHER_REGISTER_FAIL, error })
    }
}

export const getTeacherById = (id) => async dispatch => {
    try {
        const { data } = await api.getTeacherById(id)
        dispatch({type: actionTypes.FETCH_TEACHER_BY_ID, data})
    } catch(error) {
        dispatch({ type: actionTypes.FETCH_TEACHER_BY_ID_FAILED, error })
    }
}

export const getProfile = () => {
    return async dispatch => {
        try{
            const { data } = await api.getTeacherProfile()
            dispatch({type: actionTypes.SET_TEACHER_PROFILE, data})
        } catch(error) {
            console.log(error.message)
        }
    }
}

export const getStudents = () =>  async dispatch => {
    try {
        const { data } = await api.getStudents()
        console.log(data)
        dispatch({ type:actionTypes.FETCH_CONNECTED_STUDENT, data })
    } catch(error) {
        dispatch({ type:actionTypes.FETCH_CONNECTED_STUDENT_FAILED, error })
    }
}

export const createBook = (formData) => async dispatch =>{
    try {
        const { data } = await api.createBook(formData)
        console.log(data)
        dispatch(setAlert('Book Successfully Created!', 'primary'))

        dispatch({ type: actionTypes.ADD_BOOK, data })
    } catch(error) {
        dispatch({ type: actionTypes.ADD_BOOK_FAIL, error })
    }
}

export const getAllBooksCreatedByMe = () => async dispatch => {
    try {
        const { data } = await api.getAllBooksCreatedByMe()
        console.log(data)
        dispatch({ type: actionTypes.FETCH_BOOKS, data })
    } catch(error) {
        dispatch({ type: actionTypes.FETCH_BOOKS_FAIL, error })
    }
}

export const createMaterial = (formData) => async dispatch => {
    try {
        const { data } = await api.createMaterial(formData)
        console.log(data)
        dispatch(setAlert('Material Added Successfully!', 'primary'))
        dispatch({ type: actionTypes.ADD_MATERIAL, data })
    } catch(error) {
        const errors = error.response.data.errors
        console.log(errors)
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'light')))
        }
        dispatch({ type: actionTypes.ADD_MATERIAL_FAIL, error })
    }
}

export const getMaterials = () => async dispatch => {
    try {
        const { data } = await api.getMaterials()
        console.log(data)
        dispatch({ type: actionTypes.FETCH_MATERIAL, data })
    } catch(error) {
        dispatch({ type: actionTypes.FETCH_MATERIAL_FAIL, error })

    }
}

// export const createBook = (formData) => async dispatch =>{


export const updateMaterial = (id, formData) => async dispatch => {
    try {
        const { data } = await api.updateMaterial(id, formData)
        console.log(data)

        dispatch(setAlert('Registration Successful', 'primary'))
        dispatch({ type: actionTypes.UPDATE_MATERIAL, data })
    } catch(error) {
        dispatch({ type: actionTypes.UPDATE_MATERIAL_FAIL, error })
    }
}

export const deleteMaterial = (id) => async dispatch => {
    try {
        const { data } = await api.deleteMaterial(id)
        dispatch(setAlert('Delete Successful', 'danger'))
        dispatch({ type: actionTypes.DELETE_MATERIAL, data })
    }catch(error) {
        dispatch({ type: actionTypes.DELETE_MATERIAL_FAIL, error })
    }
}

export const createClass = (formData) => async dispatch => {
    try {
        const { data } = await api.createClass(formData)
        console.log(data)
        dispatch(setAlert('Add Class Successful', 'primary'))
        dispatch({ type: actionTypes.ADD_CLASS, data })
    } catch(error) {
        const errors = error.response.data.errors
        console.log(errors)
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'light')))
        }
        dispatch({ type: actionTypes.ADD_CLASS_FAIL, error })
    }
}

export const getClassesForTeacher = () => async dispatch => {
    try {
        const { data } = await api.getClassesForTeacher()
        dispatch({ type: actionTypes.FETCH_CLASSES, data })
    } catch(error) {
        dispatch({ type: actionTypes.FETCH_CLASSES_FAIL, error })
    }

}

export const updateClass = (id, formData) => async dispatch => {
    try {
        console.log(formData, id)
        const { data } = await api.updateClass(id, formData)
        dispatch(setAlert('Class Updated Successfully', 'primary'))
        dispatch({ type: actionTypes.UPDATE_CLASS, data })
    } catch(error) {
        dispatch({ type: actionTypes.UPDATE_CLASS_FAIL, error })
    }
}

export const deleteClass = (id) => async dispatch => {
    try {
        const { data } = await api.deleteClass(id)
        dispatch(setAlert('Class Deleted Successfully', 'danger'))
        dispatch({ type: actionTypes.DELETE_CLASS, data })
    } catch(error) {
        dispatch({ type: actionTypes.DELETE_CLASS_FAIL, error })
    }
}

export const updateBook = (id, formData) => async dispatch => {
    try {
        const { data } = await api.updateBook(id, formData)
        dispatch(setAlert('Book Updated Successfully', 'primary'))
        dispatch({ type: actionTypes.UPDATE_BOOK, data })
    } catch(error) {
        dispatch({ type: actionTypes.UPDATE_BOOK_FAIL, error })
    }
}

export const deleteBook = (id) => async dispatch => {
    try {
        const { data } = await api.deleteBook(id)
        dispatch(setAlert('Book Deleted Successfully', 'danger'))
        dispatch({ type: actionTypes.DELETE_BOOK, data })
    } catch(error) {
        dispatch({ type: actionTypes.DELETE_BOOK_FAIL, error })
    }
}

export const dissmissStudent = (id) => async dispatch => {
    try {
        const { data } = await api.removeStudent(id)
        dispatch(setAlert('Dissmiss Student Successfully', 'danger'))
        dispatch({ type: actionTypes.REMOVE_STUDENT, data })
    } catch(error) {
        dispatch({ type: actionTypes.REMOVE_STUDENT_FAIL, error })
    }
}

export const logoutTeacher = () => dispatch => {
    dispatch({ type: actionTypes.TEACHER_LOGOUT })
}
