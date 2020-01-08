import * as React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {retrieveConstants, retrieveLandingPage} from "./actions";

import applicationState from './reducers';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(applicationState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(retrieveConstants());
store.dispatch(retrieveLandingPage());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app"));
