import React from 'react'

const Dashboard = (...props) => {
    return (
        <div className="page-content page-container">
            <div className="padding">
                <h2 className="ml-3">DASHBOAD</h2>
                <div className='row mx-auto'>
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <div className="image mx-auto m-2">
                                <img style={{
                                    height:'200px',
                                    width:'250px'
                                }} src="https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png" alt='not found'/>
                            </div>
                            <div className="card-inner">
                                <div className="header sm-6">
                                    <h2 className='font-weight-bold text-danger'>  
                                        BOOKS
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <div className="image mx-auto m-2">
                                <img style={{
                                    height:'200px',
                                    width:'250px'
                                }} src="https://t4.ftcdn.net/jpg/03/28/10/15/360_F_328101522_ezzWWm1FylxgfdUj6tnVskLgszJBUWsz.jpg" alt='not found'/>
                            </div>
                            <div className="card-inner">
                                <div className="header sm-6">
                                    <h2 className='font-weight-bold text-danger'>  
                                        STUDENTS
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <div className="image mx-auto m-2">
                                <img style={{
                                    height:'200px',
                                    width:'250px'
                                }} src="https://previews.123rf.com/images/sanek13744/sanek137441807/sanek13744180700301/114836904-vector-cartoon-pdf-download-icon-in-comic-style-pdf-format-sign-illustration-pictogram-document-busi.jpg" alt='not found'/>
                            </div>
                            <div className="card-inner">
                                <div className="header sm-6">
                                    <h2 className='font-weight-bold text-danger'>  
                                        MATERIALS
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <div className="image mx-auto m-2">
                                <img style={{
                                    height:'200px',
                                    width:'250px'
                                }} src="https://previews.123rf.com/images/sabelskaya/sabelskaya1706/sabelskaya170600677/80648970-lesson-in-elementary-primary-school-kids-studying-and-teacher-teaching-the-class-cartoon-illustratio.jpg" alt='not found'/>
                            </div>
                            <div className="card-inner">
                                <div className="header sm-6">
                                    <h2 className='font-weight-bold text-danger'>  
                                        CLASSES
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
