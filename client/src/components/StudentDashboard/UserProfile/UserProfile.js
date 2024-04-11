import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';

import './UserProfile.css'
import EditProfile from './EditProfile'

const UserProfile = (props) => {
    const [showEditProfile, setShowEditProfile] = useState(false)
    const [data, setData] = useState()

    const editButtonHandler = (event) => {
        event.preventDefault()
        setData(props.profile)
        setShowEditProfile(true)
    }
    return (
    <div>
        <div className="page-content page-container">
            <div className="padding">
            <div class="d-flex justify-content-between">
                <div><h2 className="ml-3">STUDENT PROFILE</h2></div>
                <div className='mr-3'>
                    <Button 
                        startIcon={<EditIcon/>} 
                        variant="contained" 
                        color="secondary" 
                        onClick={editButtonHandler}>
                        Edit profile
                    </Button>
                    {showEditProfile && <EditProfile
                        show={showEditProfile}
                        onHide={() => setShowEditProfile(false)}
                        profileData={props.profile}
                    />}
                </div>
                
            </div>
                
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
                                <div className="col-sm-6">
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
