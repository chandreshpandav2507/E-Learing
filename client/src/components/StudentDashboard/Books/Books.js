import { Button } from '@material-ui/core'
import React from 'react'

import {viewBook} from '../../../api'

const Books = (props) => {
    const showBook = async (id) => {
        const response = await viewBook(id)
        console.log(response)
        const file = new Blob([response.data], {type: 'application/pdf'})
        console.log(file)
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    }
    return (
        <div>
            <div>
            {props.books.length === 0 ? 
             <div className="page-content page-container">
             <div className="padding">
                 <h2 className="ml-3">BOOKS</h2>
                 <div className='mx-auto'>
                     <h2 className='mt-5 mb-5 ml-3 text-danger font-weight-bold'>No Books Found!</h2>
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
                                <div className="card-inner">
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
                                <Button variant='contained' color="primary" onClick={() => showBook(book._id)}>View Book</Button>
                                </div>
                            </div>
                            ))} 
                    </div>
                </div>
            </div>
        }
        </div>
        </div>
    )
}

export default Books