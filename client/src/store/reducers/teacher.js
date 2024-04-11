import * as actionTypes from '../actions/actionTypes'
import {ADD_QUERY_FAILED, ADD_QUERY_SUCCESS, FORGOT_PASSWORD_INITIATED} from "../actions/actionTypes";

const initialState = {
    token: localStorage.getItem('token'),
    teacherIsAuthenticated: null,
    loading: null,
    user: null,
    authData: null,
    error: null,
    teacherById: null,
    students: [],
    books: [],
    materials: [],
    classes: [],
    forgetPasswordSuccess: null,
    forgetPasswordFailed: null,
    queries: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TEACHER_REGISTER_SUCCESS:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            localStorage.setItem('token', action.data.result.tokens[0].token)
            return {...state, authData: action?.data, teacherIsAuthenticated: true}
        case actionTypes.TEACHER_REGISTER_FAIL:
            localStorage.removeItem('profile')
            localStorage.removeItem('token')
            return { ...state, error: action.error, teacherIsAuthenticated: false}
        case actionTypes.TEACHER_AUTH_SUCCESS:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            localStorage.setItem('token', action?.data.token)
            return { ...state, authData: action?.data, teacherIsAuthenticated:true}
        case actionTypes.TEACHER_AUTH_FAIL:
            localStorage.removeItem('profile')
            localStorage.removeItem('token')
            return { ...state, error: action.error, teacherIsAuthenticated: false}
        case actionTypes.TEACHER_LOGOUT:
            localStorage.removeItem('profile')
            localStorage.removeItem('token')
            return { ...state, authData: null, teacherIsAuthenticated: false}
        case actionTypes.FETCH_TEACHER_BY_ID:
            return { ...state, teahcerById: action.data}
        case actionTypes.SET_TEACHER_PROFILE:
            return {
                ...state,
                profile: action.data
            }
        case actionTypes.SET_TEACHER_PROFILE_FAILED:
            return { 
                ...state,
                profile: null
            }
        case actionTypes.FETCH_CONNECTED_STUDENT:
            return {
                ...state,
                students: action.data
            }
        case actionTypes.FETCH_CONNECTED_STUDENT_FAILED:
            return {
                ...state,
                students: null
            }
        case actionTypes.ADD_BOOK:
            return {
                ...state,
                loading: false,
                books: [action.data, ...state.books]
            }
        case actionTypes.ADD_BOOK_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.ADD_MATERIAL:
            return {
                ...state,
                materials: [action.data, ...state.materials],
                loading: false
            }
        case actionTypes.ADD_MATERIAL_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.FETCH_BOOKS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_BOOKS:
            return {
                ...state,
                loading: false,
                books: action.data
            }
        case actionTypes.FETCH_BOOKS_FAIL:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.FETCH_MATERIAL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_MATERIAL:
            return {
                ...state,
                materials: action.data,
                loading: false
            }
        case actionTypes.FETCH_MATERIAL_FAIL:
            return {
                ...state,
                materials: null
            }
        case actionTypes.ADD_CLASS:
            return {
                ...state,
                classes: [action.data, ...state.classes]
            }
        case actionTypes.ADD_CLASS_FAIL:
            return {
                ...state
            }
        case actionTypes.FETCH_CLASSES_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_CLASSES:
            return {
                ...state,
                classes: action.data
            }
        case actionTypes.FETCH_CLASSES_FAIL:
            return {
                ...state,
                classes:null
            }
        case actionTypes.DELETE_MATERIAL:
            const filteredMaterials = state.materials.filter(value => value._id !== action.data);
            return {
                ...state,
                materials: filteredMaterials
            }
        case actionTypes.FORGOT_PASSWORD_INITIATED:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                forgetPasswordSuccess: "Success"
            }
        case actionTypes.FORGOT_PASSWORD_FAILED:
            return {
                ...state,
                loading: false,
                forgetPasswordFailed: action.payload
         }

        case actionTypes.ADD_QUERY_SUCCESS:
            return {
                ...state,
                loading: false,
                queries: state.queries.concat(action.payload)
            }
        case actionTypes.ADD_QUERY_FAILED:
            return {
                ...state,
                loading: false,
            }

        case actionTypes.GET_QUERY_SUCCESS:
            console.log('action.payload--', action.payload)
            return {
                ...state,
                loading: false,
                queries: action.payload
            }
        case actionTypes.GET_QUERY_FAILED:
            return {
                ...state,
                loading: false,
            }
        default: return {...state}
    }
}

export default reducer