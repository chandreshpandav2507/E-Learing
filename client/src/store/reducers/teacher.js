import * as actionTypes from '../actions/actionTypes'

const initialState = {
    token: localStorage.getItem('token'),
    teacherIsAuthenticated: null,
    loading: null,
    user: null,
    authData: null,
    error: null,
    teacherById: null,
    students: null,
    books: null,
    materials: null,
    classes: null
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
                ...state
            }
        case actionTypes.ADD_BOOK_FAIL:
            return {
                ...state
            }
        case actionTypes.FETCH_BOOKS:
            return {
                ...state,
                books: action.data
            }
        case actionTypes.FETCH_BOOKS_FAIL:
            return {
                ...state,
                books: null
            }
        case actionTypes.FETCH_MATERIAL:
            return {
                ...state,
                materials: action.data
            }
        case actionTypes.FETCH_MATERIAL_FAIL:
            return {
                ...state,
                materials: null
            }
        case actionTypes.ADD_CLASS:
            return {
                ...state
            }
        case actionTypes.ADD_CLASS_FAIL:
            return {
                ...state
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
        default: return {...state}
    }
}

export default reducer