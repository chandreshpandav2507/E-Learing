import React from 'react'
import './UserProfile.css'

const UserProfile = (props) => {
    return (
    <div>
        <div className="page-content page-container">
            <div className="padding">
                <h2 className="ml-3">TEACHER PROFILE</h2>
                <div>
                    <div className="col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25"> 
                                            <img src="https://img.icons8.com/bubbles/100/000000/user.png" alt="User-Profile" /> </div>
                                            <h2 className="f-w-600">{`${props.profile.firstName} ${props.profile.lastName}`}</h2>
                                        </div>
                                    </div>
                                    {console.log(props.profile)}
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Email</p>
                                                <h6 className="text-muted f-w-400">{props.profile.email}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Phone</p>
                                                <h6 className="text-muted f-w-400">+91 {props.profile.phone}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Address</p>
                                                <h6 className="text-muted f-w-400">{props.profile.address}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Degree</p>
                                                <h6 className="text-muted f-w-400">{props.profile.degree}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Graduated From</p>
                                                <h6 className="text-muted f-w-400">{props.profile.universityName}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Subjects</p>
                                                <h6 className="text-muted f-w-400">{props.profile.subjects.map(subject => subject + ', ')}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">LanguageKnown</p>
                                                <h6 className="text-muted f-w-400">{props.profile.languageKnown.map(language => language + ', ')}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Rate Per Hour</p>
                                                <h6 className="text-muted f-w-400"> ₹ {props.profile.ratePerHour}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )    
}

export default UserProfile