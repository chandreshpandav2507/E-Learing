import React from 'react'

const Classes = (props) => {
    return (
        <div>
            {props.classes.length === 0 ? 
             <div className="page-content page-container">
                <div className="padding">
                    <h2 className="ml-3">CLASSES</h2>
                    <div className='mx-auto'>
                        <h2 className='mt-5 mb-5 ml-3 text-danger font-weight-bold'>No Classes Found!</h2>
                    </div>
                </div>
            </div>
            :  
            <div className="page-content page-container">
                <div className="padding">
                    <h2 className="ml-3">CLASSES</h2>
                    <div className='row mx-auto'>
                        <table className="ml-3 mt-3 table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Class URL</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                               {props.classes.map((classOne, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{classOne.name}</td>
                                        <td>{classOne.subject}</td>
                                        <td><a href={classOne.url}>{classOne.url}</a></td>
                                        <td>{classOne.time.split('T')[0]}</td>
                                        <td>{classOne.time.split('T')[1].split(':')[0]}:{classOne.time.split('T')[1].split(':')[0]}</td>
                                    </tr>
                                ))} 
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default Classes