import React, {useState} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Input from "../SignUp/Input";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {isEmpty, isEqual} from "lodash";
import {forgotPassword} from "../../store/actions/student";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from "../Alert/Alert";
import {setAlert} from "../../store/actions/alert";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    gender: {
        margin: theme.spacing(1, 1, 0, 0),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AdminLogin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const {
        email,
        password
    } = formData
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = () => {
        if(!isEmpty(email) && !isEmpty(password)) {
            if(email === 'admin@gmail.com' && password === 'admin@123') {
                history.push('/admin-dashboard');
            } else {
                // dispatch(setAlert("Invalid credentials!", 'danger'))
                toast.error("Invalid Credentials", { position: "top-right" })
            }
        } else {
            // dispatch(setAlert("Please fill all the required fields", 'danger'))
            toast.error("Please fill all the required fields", { position: "top-right" })
        }

    }

    const onChangeHandler = event => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Alert />
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Admin Login
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Input
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            autoComplete="email"
                            onChangeHandler={onChangeHandler}
                        />
                        <Input
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            value={password}
                            label="Password"
                            type={ showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            onChangeHandler={onChangeHandler}
                            handleShowPassword ={handleShowPassword}
                        />
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default AdminLogin;