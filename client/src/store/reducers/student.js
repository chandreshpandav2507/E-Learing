import * as actionTypes from '../actions/actionTypes'
 const initialState = {
    token: localStorage.getItem('token'),
    studentIsAuthenticated: false,
    loading: null,
    user: null,
    authData: null,
    error: null,
    profile: null,
    allTeachers: null,
    hiredTeachers: null,
    books: null,
    materials: null,
    classes: null
}


/*const studentRegistrationSuccess = (state, action) => {
    localStorage.setItem('token', action.payload.token)
    return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
    }
}


const studentRegistrationFail = (state, action) => {
    localStorage.removeItem('token')
    return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
    }
} */

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STUDENT_REGISTER_SUCCESS:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            localStorage.setItem('token', action.data.result.tokens[0].token)
            return { ...state, authData: action?.data, studentIsAuthenticated: true, error:null}
        case actionTypes.STUDENT_REGISTER_FAIL:
            localStorage.removeItem('profile')
            localStorage.removeItem('token')
            return { ...state, error: action.error, studentIsAuthenticated: false}
        case actionTypes.STUDENT_AUTH_SUCCESS:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            localStorage.setItem('token', action?.data.token)
            return { ...state, authData: action?.data, studentIsAuthenticated: true}
        case actionTypes.STUDENT_AUTH_FAIL:
            localStorage.removeItem('profile')
            localStorage.removeItem('token')
            return { ...state, error: action.error, studentIsAuthenticated: false}
        case actionTypes.STUDENT_LOGOUT:
            localStorage.removeItem('profile')
            localStorage.removeItem('token')
            return { ...state, authData: null, studentIsAuthenticated: false}
        case actionTypes.SET_STUDENT_PROFILE:
            return {
                ...state,
                profile: action.data
            }
        case actionTypes.FETCH_ALL_TEACHERS:
            return {
                ...state,
                allTeachers: action.data
            }
        case actionTypes.FETCH_ALL_TEACHERS_FAILED:
            return {...state}
        case actionTypes.HIRE_TEACHER_SUCESSFULL: return state
        case actionTypes.HIRE_TEACHER_FAIL: return state
        case actionTypes.FETCH_HIRED_TEACHERS: 
            return{
                ...state,
                hiredTeachers: action.data
            }
        case actionTypes.FETCH_HIRED_TEACHERS_FAILED: return state
        case actionTypes.STUDENT_FETCH_BOOKS:
            return {
                ...state,
                books: action.data
            }
        case actionTypes.STUDENT_FETCH_BOOKS_FAIL:
            return {
                ...state,
                books: null
            }
        case actionTypes.STUDENT_FETCH_MATERIALS:
            return {
                ...state,
                materials: action.data
            }
        case actionTypes.STUDENT_FETCH_MATERIALS_FAIL:
            return {
                ...state,
                materials: null
            }
        case actionTypes.FETCH_STUDENT_CLASSES:
            return {
                ...state,
                classes: action.data
            }
        case actionTypes.FETCH_STUDENT_CLASSES_FAIL:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.STUDENT_UPDATE_SUCCESS:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {
                ...state,
                profile: action?.data
            }
        default: return {...state}
    }

}

export default reducer