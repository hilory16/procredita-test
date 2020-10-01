import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
// import App from './containers/app.js';
import reducers from './redux/reducers';

const token = localStorage.getItem('auth')

axios.defaults.headers.common['Authorization'] = `${token}`;
// axios.defaults.baseURL = "http://localhost:4000/api/";
axios.defaults.baseURL = "https://bossdivva-backend.herokuapp.com/api/"

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Routes/>
    </Provider>
    // <Routes/>
    ,
    document.getElementById('root')
);
