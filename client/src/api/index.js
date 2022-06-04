import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('token')) {
        req.headers.authorization = localStorage.getItem('token')
    }

    return req
})

// Student APIs
export const login = (formData) => API.post('/student/login', formData)
export const registerUser = (formData) => API.post('/student/reg', formData)
export const getStudentProfile = () => API.get('/student/me')
export const updateStudent = (formData) => API.post('/student/me/update', formData) 
export const hireTeacher = (id) => API.get(`/student/${id}`)
export const getHiredTeachers = () => API.get('/student/me/teachers')
export const getBooks = () => API.get('/student/me/books')
export const getMaterialsForStudent = () => API.get('/student/me/materials')
export const getClassesForStudent = () => API.get('/student/me/classses')
export const removeTeacher = (id) => API.delete(`/student/me/teachers/${id}`)

//Teacher APIs
export const teacherLogin = (formData) => API.post('/teacher/login', formData)
export const teacherRegister = (formData) => API.post('/teacher/reg', formData)
export const getAllTeachers = () => API.get('/teacher/all')
export const getTeacherById = (id) => API.get(`/teacher/${id}`)
export const getTeacherProfile = () => API.get('/teacher/me') 
export const getStudents = () => API.get('/teacher/me/students')
export const removeStudent = (id) => API.post(`/teacher/me/students/${id}`)
// export const createBook = (formData) => API.post('/book/new',formData)

export const createBook = (formData) => API.post('/teacher/me/book/new',formData)
export const getAllBooksCreatedByMe = () => API.get('/teacher/me/books')
export const viewBook = (id) => API.get(`/books/${id}`, {
    responseType: 'blob' //Force to receive data in a Blob Format
})
export const updateBook = (id, formData) => API.post(`/book/update/${id}`, formData)
export const deleteBook = (id) => API.delete(`/books/delete/${id}`)

export const createMaterial = (formData) => API.post('/materials/new', formData)
export const getMaterials = () => API.get('/materials')
export const viewMaterial = (id) => API.get(`/materials/${id}`, {
    responseType: 'blob' //Force to receive data in a Blob Format
})
export const updateMaterial = (id, formData) => API.post(`/materials/${id}`, formData)
export const deleteMaterial = (id) => API.delete(`/materials/${id}`)


export const createClass = (formData) => API.post('/class/new', formData)
export const getClassesForTeacher = () => API.get('/class')
export const updateClass = (id, formData) => API.post(`/class/${id}`, formData)
export const deleteClass = (id) => API.delete(`/class/${id}`)


