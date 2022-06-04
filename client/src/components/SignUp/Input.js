import {Grid, InputAdornment, IconButton, TextField } from "@material-ui/core";

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { useState } from "react";


const Input = ({ name, half, value, label, type, onChangeHandler, autoFocus, handleShowPassword }) => {

    /* const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }  */
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                variant="outlined"
                value={value}
                required
                fullWidth
                // id="firstName"
                label={label}
                type={type}
                autoFocus = {autoFocus}
                onChange={onChangeHandler}
                InputProps={ name === 'password' && { 
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick = {handleShowPassword}>
                                {console.log(type)}
                                {type === 'password' ? <Visibility /> :  <VisibilityOff /> }
                            </IconButton> 
                        </InputAdornment>
                    ), 
                }} 
            />
        </Grid>
    )
}

export default Input