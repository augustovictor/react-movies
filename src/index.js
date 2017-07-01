import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Navbar from './components/navbar';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <Navbar />
    </Provider>    
, document.getElementById('root'));
registerServiceWorker();
