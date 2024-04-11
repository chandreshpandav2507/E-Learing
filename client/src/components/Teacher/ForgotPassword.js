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
import {forgotPassword} from "../../store/actions/teacher";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from "../Alert/Alert";
import {setAlert} from "../../store/actions/alert";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";


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

const ForgotPassword = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const {
        email,
        confirmPassword,
        password
    } = formData
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState('');
    const history = useHistory();

    const { isLoading, error } = useSelector(state => state.teacherReducer)

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = () => {
        if(!isEmpty(email) && !isEmpty(password) && !isEmpty(confirmPassword)) {
            if(!isEqual(password, confirmPassword)) {
                // dispatch(setAlert("Password and Confirm password must be same!", 'danger'))
                toast.error("Password and Confirm password must be same!", { position: "top-right" })
            } else  {
                dispatch(forgotPassword({ email, password }));
                history.replace('/teacher');
            }
        } else {
            setErrors("Please fill all the required fields.")
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
                    Teacher Reset Password
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
                        <Input
                            variant="outlined"
                            required
                            fullWidth
                            name="confirmPassword"
                            value={confirmPassword}
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
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
                        startIcon={isLoading && <CircularProgress size={20} color="secondary"/> }
                        onClick={handleSubmit}
                    >
                        Reset Password
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default ForgotPassword;