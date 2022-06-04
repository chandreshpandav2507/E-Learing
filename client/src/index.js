import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {createStore , applyMiddleware, compose, combineReducers} from 'redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import student from './store/reducers/student'
import teacher from './store/reducers/teacher'
import alert from './store/reducers/alert'


const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null)|| compose;

const rootReaducer = combineReducers({
  studentReducer : student,
  teacherReducer: teacher,
  alertReducer: alert
})

const store = createStore(rootReaducer, composeEnhancers(
  applyMiddleware(thunk)
))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
    <> 
      {app}
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
