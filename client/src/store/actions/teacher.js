import * as actionTypes from './actionTypes'

import * as api from '../../api/index'
import { setAlert } from './alert'
import {NotificationActions} from "material-ui-notifications";
import {getAllQuery, teacherForgotPassword} from "../../api/index";
import {GET_QUERY_FAILED, GET_QUERY_SUCCESS} from "./actionTypes";
import { toast } from 'react-toastify';

export const loginTeacher = (formData) => async dispatch =>{
    try {
        const { data } = await api.teacherLogin(formData)
        // dispatch(setAlert('Login Successful!', 'primary'))
        //
        toast.success("Login Successful", {
            position: "top-right"
        });
        dispatch({ type: actionTypes.TEACHER_AUTH_SUCCESS, data })
        return data;
    
    } catch(error) {
        const errors = error.response.data.error
        console.log(errors)
        // dispatch(setAlert(errors, 'light'))
        toast.error(errors, {
            position: "top-right"
        });
        dispatch({ type: actionTypes.TEACHER_AUTH_FAIL, error })
    }
}

export const signUp = (formData) => async dispatch =>{
    try {
     const { data } = await api.teacherRegister(formData);
     // dispatch(setAlert('Registration Successful', 'primary'));
     toast("Registration Successful", {
       position: "top-right"
     });
     dispatch({ type: actionTypes.TEACHER_REGISTER_SUCCESS, data });
     return data;
    
    } catch(error) {
        const errors = error.response.data.errors
        console.log(errors)
        if(errors) {
            errors.forEach(error => toast.error(error.msg, { position: "top-right" }))
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
        // dispatch(setAlert('Book Successfully Created!', 'primary'))
        toast.success('Book Successfully Created!', { position: "top-right" });

        dispatch({ type: actionTypes.ADD_BOOK, data })
    } catch(error) {
        dispatch({ type: actionTypes.ADD_BOOK_FAIL, error })
    }
}

export const getAllBooksCreatedByMe = () => async dispatch => {
    try {
        dispatch({ type: actionTypes.FETCH_BOOKS_START })
        const { data } = await api.getAllBooksCreatedByMe();
        dispatch({ type: actionTypes.FETCH_BOOKS, data })
    } catch(error) {
        dispatch({ type: actionTypes.FETCH_BOOKS_FAIL, error })
    }
}

export const createMaterial = (formData) => async dispatch => {
    try {
        const { data } = await api.createMaterial(formData)
        console.log(data)
        // dispatch(setAlert('Material Added Successfully!', 'primary'))
        toast.success('Material Added Successfully!', { position: "top-right" });
        dispatch({ type: actionTypes.ADD_MATERIAL, data })
    } catch(error) {
        const errors = error.response.data.errors
        console.log(errors)
        if(errors) {
            errors.forEach(error => toast.error(error.msg, { position: "top-right" }))
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

        // dispatch(setAlert('Registration Successful', 'primary'))
        toast.success('Material Updated Successfully!', { position: "top-right" });
        dispatch({ type: actionTypes.UPDATE_MATERIAL, data })
    } catch(error) {
        dispatch({ type: actionTypes.UPDATE_MATERIAL_FAIL, error })
    }
}

export const deleteMaterial = (id) => async dispatch => {
    try {
        const { data } = await api.deleteMaterial(id)
        // dispatch(setAlert('Delete Successful', 'danger'))
        toast.success('Material Deleted Successfully!', { position: "top-right" });

        dispatch({ type: actionTypes.DELETE_MATERIAL, data: id })
    }catch(error) {
        dispatch({ type: actionTypes.DELETE_MATERIAL_FAIL, error })
    }
}

export const createClass = (formData) => async dispatch => {
    try {
        const { data } = await api.createClass(formData)
        console.log(data)
        // dispatch(setAlert('Add Class Successful', 'primary'))
        toast.success('Class Added Successfully!', { position: "top-right" });
        dispatch({ type: actionTypes.ADD_CLASS, data })
    } catch(error) {
        const errors = error.response.data.errors
        console.log(errors)
        if(errors) {
            errors.forEach(error => toast.error(error.msg, { position: "top-right" }))
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
        // dispatch(setAlert('Class Updated Successfully', 'primary'))
        toast.success('Class Updated Successfully', { position: "top-right" });
        dispatch({ type: actionTypes.UPDATE_CLASS, data })
    } catch(error) {
        dispatch({ type: actionTypes.UPDATE_CLASS_FAIL, error })
    }
}

export const deleteClass = (id) => async dispatch => {
    try {
        const { data } = await api.deleteClass(id)
        // dispatch(setAlert('Class Deleted Successfully', 'danger'))
        toast.success('Class Deleted Successfully', { position: "top-right" });
        dispatch({ type: actionTypes.DELETE_CLASS, data })
    } catch(error) {
        dispatch({ type: actionTypes.DELETE_CLASS_FAIL, error })
    }
}

export const updateBook = (id, formData) => async dispatch => {
    try {
        const { data } = await api.updateBook(id, formData)
        // dispatch(setAlert('Book Updated Successfully', 'primary'))
        toast.success('Book Updated Successfully', { position: "top-right" });
        dispatch({ type: actionTypes.UPDATE_BOOK, data })
    } catch(error) {
        dispatch({ type: actionTypes.UPDATE_BOOK_FAIL, error })
    }
}

export const deleteBook = (id) => async dispatch => {
    try {
        const { data } = await api.deleteBook(id)
        // dispatch(setAlert('Book Deleted Successfully', 'danger'))
        toast.success('Book Deleted Successfully', { position: "top-right" });
        dispatch({ type: actionTypes.DELETE_BOOK, data })
    } catch(error) {
        dispatch({ type: actionTypes.DELETE_BOOK_FAIL, error })
    }
}

export const dissmissStudent = (id) => async dispatch => {
    try {
        const { data } = await api.removeStudent(id)
        // dispatch(setAlert('Dissmiss Student Successfully', 'danger'))
        toast.success('Dissmiss Student Successfully', { position: "top-right" });
        dispatch({ type: actionTypes.REMOVE_STUDENT, data })
    } catch(error) {
        dispatch({ type: actionTypes.REMOVE_STUDENT_FAIL, error })
    }
}

export const logoutTeacher = () => dispatch => {
    dispatch({ type: actionTypes.TEACHER_LOGOUT })
}

export const forgotPassword = (formData) => async dispatch => {
    try {
        dispatch({ type: actionTypes.FORGOT_PASSWORD_INITIATED })
        const { data } = await api.teacherForgotPassword(formData)
        NotificationActions.addNotification(
            {
                headerLabel: "Password Updated Successfully",
                primaryColor: "#ff0000",
            }
        );
        // dispatch(setAlert('Password Updated Successfully', 'primary'))
        toast.success('Password Updated Successfully', { position: "top-right" });
        dispatch({ type: actionTypes.FORGOT_PASSWORD_SUCCESS, data })
    } catch(error) {
        // dispatch(setAlert("Teacher does not exist", 'danger'))
        toast.success('Teacher does not exist', { position: "top-right" });
        dispatch({ type: actionTypes.FORGOT_PASSWORD_FAILED, error })
    }
}

export const addQuery = (formData) => async dispatch => {
    try {
        const { data } = await api.addQuery(formData)
        dispatch({ type: actionTypes.ADD_QUERY_SUCCESS, data })
        toast.success("Query sent successfully!")
    } catch(error) {
        alert('Something went wrong!')
        dispatch({ type: actionTypes.ADD_QUERY_FAILED, error })
    }
}

export const getAllQueries = (formData) => async dispatch => {
    try {
        const { data } = await api.getAllQuery(formData);
        console.log('data00000', data);
        dispatch({ type: actionTypes.GET_QUERY_SUCCESS, payload: data })
    } catch(error) {
        dispatch({ type: actionTypes.GET_QUERY_FAILED, error })
    }
}
