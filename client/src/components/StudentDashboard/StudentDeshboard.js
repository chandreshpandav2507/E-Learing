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
import { connect, useDispatch } from 'react-redux';
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

import { getProfile, getHiredTeachers} from '../../store/actions/student'
import Books from './Books/Books';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile/UserProfile';
import Teachers from './Teachers/Teachers';
import Materials from './Materials/Materials';
import Classes from './Classes/Classes'

import * as api from '../../api/index'
import Alert from '../Alert/Alert'


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
    marginTop: '4.5%',
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
  const [books, setBooks] = useState([])
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
  dispatch(getProfile())
  }, [dispatch])

  /* useEffect(() => {
    dispatch(getHiredTeachers())
  }, [dispatch]) */


  useEffect(() => {
    (async () => {
      const data1 = await api.getBooks()
      const data2 = await api.getMaterialsForStudent()
      // setTimeout(()=> {}, 1000)
      // const data3 = await api.getClassesForStudent()
      setBooks({data1, data2})
  })()
    }, [])

  const handleLinks = async (value) => {
    switch (value) {
      case 'dashboard':
        setState(value)
        break;
      case 'userProfile':
        setState(value);
        break;
      case 'teachers':
        await props.getTeachers();
        setState(value);
        break;
      case 'books':
        // await props.getBooks()
        setState(value);
        break;
      case 'materials':
        // await props.getAllMaterials();
        setState(value);
        break;
      case 'classes':
        // await props.getAllClasses();
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
                Student Dashboard
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
                <ListItem button onClick={() => handleLinks('dashboard')}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={() => handleLinks('userProfile')}>
                    <ListItemIcon>
                        <AccountBoxIcon />
                    {/* <FontAwesomeIcon icon={faUser} size='lg' /> */}
                    </ListItemIcon>
                    <ListItemText primary="Student profile" />
                </ListItem>
                <ListItem button onClick={() => handleLinks('teachers')}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faChalkboardTeacher} size='lg' />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
                </ListItem>
                <ListItem button onClick={() => handleLinks('books')}>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Books" />
                </ListItem>
                <ListItem button onClick={() => handleLinks('materials')}>
                <ListItemIcon>
                    {/* <BarChartIcon /> */}
                    <FileCopyIcon />
                </ListItemIcon>
                <ListItemText primary="Materials" />
                </ListItem>
                <ListItem button onClick={() => handleLinks('classes')}>
                  <ListItemIcon>
                      <ClassIcon />
                  </ListItemIcon>
                  <ListItemText primary="Classes" />
                </ListItem>
            </div>
            </List>
        </Drawer>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Alert /> 
            {state === 'dashboard' ? <Dashboard  /> : null}
            {state === 'userProfile' ? <UserProfile profile={props.student[0]}/> : null}
            {state === 'teachers' ? <Teachers teachers={props.teachers} /> : null} 
            {/* {console.log(props.books)} */}

            {/* {state === 'books' ? <Books books={props.books}/> : null } */}
            {state === 'books' ? <Books books={books.data1.data}/> : null }
            {/* {console.log(props.materials)} */}
            {/* {state === 'materials' ? <Materials materials={props.materials} /> : null} */}
            {state === 'materials' ? <Materials materials={books.data2.data} /> : null}
            
            {/* {console.log(props.classes)} */}
            {state === 'classes' ? <Classes classes={props.classes} /> : null}

        </main>
        </div>
  );
}

const mapStateToProps = state => {
    return {
        student: state.studentReducer.profile,
        teachers: state.studentReducer.hiredTeachers,
        books: state.studentReducer.books,
        materials: state.studentReducer.materials,
        classes: state.studentReducer.classes
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getTeachers: () => dispatch(getHiredTeachers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard) 