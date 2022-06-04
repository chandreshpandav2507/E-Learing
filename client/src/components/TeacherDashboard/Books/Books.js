import { Button } from '@material-ui/core'
import React, { useState } from 'react'

import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {viewBook} from '../../../api'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import AddBook from './AddBook'
import EditBook from './EditBook'
import { connect } from 'react-redux';
import { deleteBook } from '../../../store/actions/teacher';

const Books = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [editBookShow, setEditBookShow] = useState(false)
    const [book, setBook] = useState({})
    const showBook = async (id) => {
        const response = await viewBook(id)
        console.log(response)
        const file = new Blob([response.data], {type: 'application/pdf'})
        console.log(file)
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    }

    const editBookhandler = (book) => {
        setBook(book)
        setEditBookShow(true)
    }

    const deleteButtonHandler = (id) => {
        props.bookDelete(id)
    }

    return (
        <div>
            {props.books.length === 0 ? 
             <div className="page-content page-container">
                <div className="padding">
                    <h2 className="ml-3">BOOKS</h2>
                    <div className='mx-auto'>
                    <h2 className='mt-5 mb-5 ml-3 text-danger font-weight-bold'>No Books added yet! Please Add Book!</h2>

                        <Button startIcon={<AddIcon/>} variant="contained" color='primary' fullWidth onClick={() => setModalShow(true)}>
                            Add Book
                        </Button>

                        <AddBook
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            subjects={props.subjects}
                        />
                    </div>
                </div>
            </div>
            : 
            <div className="page-content page-container">
                <div className="padding">
                    <h2 className="ml-3">BOOKS</h2>
                    <div className='row mx-auto'>
                        {props.books.map((book, index) => (
                            <div key ={index} className="col-sm-6 col-md-4">
                                <div className="card">
                                <div className="image mx-auto m-2">
                                    <img style={{
                                        height:'200px',
                                        width:'250px'
                                    }} src={`data:image;base64,${book.image}`} alt='not found'/>
                                </div>
                                <div className="ml-3 card-inner">
                                    <div className="header sm-6">
                                        <h2 className='font-weight-bold text-danger'>  
                                            {book.name} 
                                        </h2>
                                        <div class='mt-3 ml-0'>
                                            <p className='font-weight-bold text-info'>  
                                                {book.description}
                                            </p>
                                        </div>
                                        <div class='ml-0 row'>
                                            <p class='font-weight-bold'>Subject:</p>
                                            
                                            <p className='ml-2 font-weight-bold text-info'>  
                                                {book.subject}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-2 row">
                                    <Button
                                      className='ml-3 mb-3'
                                      variant='contained' 
                                      color="primary" 
                                      size="small"
                                      onClick={() => showBook(book._id)}
                                      >
                                          <VisibilityIcon />
                                      </Button>
                                    <Button 
                                      className='ml-5 mb-3' 
                                      variant='contained' 
                                      color="primary" 
                                      size="large"
                                      onClick={() => editBookhandler(book)}
                                      > <FontAwesomeIcon icon={faPencilAlt}/>
                                      </Button>
                                    <Button 
                                      variant='contained' 
                                      color="secondary"
                                      size="large"
                                      className='ml-5 mb-3'
                                      onClick={() => deleteButtonHandler(book._id)}
                                      >
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </Button>
                                </div>
                                </div>
                             </div>
                            ))} 
                    </div>
                    <Button className='ml-3' startIcon={<AddIcon/>} variant="contained" color="primary" onClick={() => setModalShow(true)}>
                    Add Book
                </Button>

                <AddBook
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    subjects={props.subjects}
                />
                <EditBook
                    show={editBookShow}
                    onHide={() => setEditBookShow(false)}
                    subjects={props.subjects}
                    data={book}
                />
                </div>
            </div>
        }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        bookDelete: (id) => dispatch(deleteBook(id))
    }
}

export default connect(null, mapDispatchToProps)(Books)