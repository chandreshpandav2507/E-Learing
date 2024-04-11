import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";
import {getStudents, getTeachers} from "../../store/actions/student";
import {isEmpty} from "lodash";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    totalWrapper: {
        height: 150,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        fontSize: 90
    }
}));

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const { allTeachers, allStudents } = useSelector(state => state.studentReducer)

    useEffect(() => {
        if(isEmpty(allTeachers)) {
            dispatch(getTeachers());
        }
        if(isEmpty(allStudents)) {
            dispatch(getStudents());
        }
    }, [allTeachers, allStudents]);


    return (
        <Container className="d-flex">
            <Card className="mr-3">
                <CardActionArea>
                    <div className={classes.totalWrapper}>
                        <span>
                            {allTeachers?.length}
                        </span>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" className="text-center" component="div">
                            Total Teachers
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card>
                <CardActionArea>
                    <div className={classes.totalWrapper}>
                        <span>
                            {allStudents?.length}
                        </span>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" className="text-center" component="div">
                            Total Students
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    )
}

export default AdminDashboard;