import React, { useState } from 'react'

import {Button, Link, TextareaAutosize, TextField} from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import SendIcon from '@material-ui/icons/Send';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.css'

const Footer = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    })
    const onChangeHandler = event => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const { email, message } = formData
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-section about'>
                    <h1 className='logo-text'>
                        <span>E - </span>Learning
                    </h1>
                    <p>
                        E-learning is a web platform for findind a teacher and get online tution or education.
                    </p>
                    <div className='social'>
                        <span><LinkedInIcon fontSize="large" /></span>
                        <span><TwitterIcon fontSize="large" /></span>
                        <span><FacebookIcon fontSize="large" /></span>
                        <span><InstagramIcon fontSize="large" /></span>
                    </div>
                </div>
                <div className='footer-section links'>
                    <h2>
                        Quick Links
                    </h2>
                    <ul>
                        <Link ><li>Home Page</li></Link>
                        <Link to={Link}><li>Student Corner</li></Link>
                        <Link to={Link}><li>Techers</li></Link>
                    </ul>
                </div>
                <div className='footer-section contact-form'>
                    <h2>Contact Us</h2>
                    <TextField
                        autoComplete="email"
                        name="email"
                        variant="outlined"
                        value={email}
                        required
                        color='secondary'
                        fullWidth
                        id="email"
                        label="Enter Your Email"
                        sm={6}
                        onChange={onChangeHandler}
                    />
                    <TextareaAutosize
                        className='formContent'
                        rowsMax={4}
                        aria-label='maximum height'
                        placeholder="Maximum 4 rows"
                        name='message'
                        onChange={onChangeHandler}
                    />
                    <Button
                        endIcon={<SendIcon />}
                        style={{
                            marginTop: '10px',
                            fontWeight: 'bold'
                        }}
                        className='buttonSend'
                        value={message}
                        color='secondary'
                        variant='contained'>
                       SEND MESSAGE
                    </Button>

                    {/* <input type='text' name="text-input contact-input" placeholder="Your Email"></input> 
                    <textarea name='message' className='text-input contact-input'placeholder='Ypur message' />
                    <button type='submit' className="btn btn-big">Send</button>*/}
                </div>
            </div>
            <div className='footer-bottom'>
                &copy; lanetteam.com | Design by Dharmik Pandav
            </div>

        </div>
    )
}

export default Footer
