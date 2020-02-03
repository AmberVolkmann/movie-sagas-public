import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('UPDATE_MOVIE', updateMovie);
}

function* getMovies(action) {
    try {
        //GO TO SERVER< DB get all things in cat. table
        let response = yield axios.get('/api/movies')
        console.log(response.data)
        // save in redux
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        })
    } catch (err) {
        console.log(err)
    }
}

function* updateMovie(action) {
    try {
        //GO TO SERVER< DB get all things in cat. table
        let response = yield axios.put(`/api/movies/+${action.payload.id}`)
        console.log(response.data)
        // save in redux
        yield put({
            type: 'GET_MOVIES',
            payload: response.data
        })
    } catch (err) {
        console.log(err)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const update = (state= [], action) => {
    switch (action.type) {
        case 'UPDATE_MOVIE':
            return [...state, action.payload];
        default:
            return state;
    }
}

const currentMovie = (state =-1, action) => {
    switch (action.type) {
        case 'CURRENT_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

const details = (state= [], action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        update,
        currentMovie,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
