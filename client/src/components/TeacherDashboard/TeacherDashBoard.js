import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {connect, useDispatch, useSelector} from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ClassIcon from '@material-ui/icons/Class';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

import { getProfile, getStudents, getAllBooksCreatedByMe, getMaterials, getClassesForTeacher } from '../../store/actions/teacher'

import Books from './Books/Books';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile/UserProfile';
import Students from './Students/Students';
import Materials from './Materials/Materials';
import Classes from './Classes/Classes'
import Alert from '../Alert/Alert'
import {value} from "lodash/seq";
import CircularProgress from "@material-ui/core/CircularProgress";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    dashboard: {
        marginTop: '5%'
    },
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginTop: '3.3%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  }
}));

const StudentDashboard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(true);
  const [state, setState] = useState('dashboard')
  const { loading,  } = useSelector(state => state.teacherReducer);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
  
  const handleLinks = async (value) => {
    // setState(value);
    switch (value) {
      case 'dashboard':
        setState(value)
        break;
      case 'userProfile':
        setState(value);
        break;
      case 'students':
        await props.getConnectedStudents();
        setState(value);
        break;
      case 'books':
        await props.getBooks()
        setState(value);
        break;
      case 'materials':
        await props.getAllMaterials();
        setState(value);
        break;
      case 'classes':
        await props.getAllClasses();
        setState(value);
        break;
      default:
        return 
    }
  }

  return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
                <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Teacher Dashboard
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <Divider />
            <List>
                <div>
                    <ListItem className={`list-item ${state === 'dashboard' ? 'active' : ''}`} button onClick={() => handleLinks('dashboard')}>
                        <ListItemIcon >
                            <DashboardIcon color={state === 'dashboard' ? 'primary' : ''}/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem className={`list-item ${state === 'userProfile' ? 'active' : ''}`} button onClick={() => handleLinks('userProfile')}>
                        <ListItemIcon>
                            <AccountBoxIcon color={state === 'userProfile' ? 'primary' : ''}/>
                        {/* <FontAwesomeIcon icon={faUser} size='lg' /> */}
                        </ListItemIcon>
                        <ListItemText primary="Teacher profile" />
                    </ListItem>
                    <ListItem className={`list-item ${state === 'students' ? 'active' : ''}`} button onClick={() => handleLinks('students')}>
                      <ListItemIcon>
                          <FontAwesomeIcon color={state === 'students' ? '#4540E1' : ''} icon={faChalkboardTeacher} size='lg' />
                      </ListItemIcon>
                      <ListItemText primary="Students" />
                    </ListItem>
                    <ListItem className={`list-item ${state === 'books' ? 'active' : ''}`} button onClick={() => handleLinks('books')}>
                        <ListItemIcon>
                            <MenuBookIcon color={state === 'books' ? 'primary' : ''}/>
                        </ListItemIcon>
                        <ListItemText primary="Books" />
                    </ListItem>
                    <ListItem className={`list-item ${state === 'materials' ? 'active' : ''}`} button onClick={() => handleLinks('materials')}>
                      <ListItemIcon>
                          <FileCopyIcon color={state === 'materials' ? 'primary' : ''}/>
                      </ListItemIcon>
                      <ListItemText primary="Materials" />
                    </ListItem>
                    <ListItem className={`list-item ${state === 'classes' ? 'active' : ''}`} button onClick={() => handleLinks('classes')}>
                      <ListItemIcon>
                          <ClassIcon color={state === 'classes' ? 'primary' : ''}/>
                      </ListItemIcon>
                      <ListItemText primary="Classes" />
                    </ListItem>
                </div>
            </List>
        </Drawer>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Alert />
            {loading
                ? <CircularProgress style={{ position: "absolute", top: "50%", left: "50%" }} size={50} color="primary"/>
                : <>
                    {state === 'dashboard' ? <Dashboard handleLinks={handleLinks} /> : null}
                    {/* {console.log(props.teacher)} */}
                    {state === 'userProfile' ? <UserProfile profile={props.teacher[0]}/> : null}
                    {/* {console.log(props.students)} */}
                    {state === 'students' ? <Students students={props.students}/> : null}
                    {/* {console.log(props.books)} */}
                    {state === 'books' ? <Books subjects={props.teacher[0].subjects} books={props.books}/> : null }
                    {/* {console.log(props.materials)} */}
                    {state === 'materials' ? <Materials subjects={props.teacher[0].subjects} materials={props.materials} /> : null}
                    {/* {console.log(props.classes)} */}
                    {state === 'classes' ? <Classes subjects={props.teacher[0].subjects} classes={props.classes} /> : null}
                </>
            }

        </main>
        </div>
  );
}

const mapStateToProps = state => {
    return {
      teacher: state.teacherReducer.profile,
      students: state.teacherReducer.students,
      books: state.teacherReducer.books,
      materials: state.teacherReducer.materials,
      classes: state.teacherReducer.classes
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getConnectedStudents: () => dispatch(getStudents()),
    getBooks: () => dispatch(getAllBooksCreatedByMe()),
    getAllMaterials: () => dispatch(getMaterials()),
    getAllClasses: () => dispatch(getClassesForTeacher())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard) 