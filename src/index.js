import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store';

const unsubscriber = store.subscribe(() => 
                        console.log("Action dispatched - New state => " + JSON.stringify(store.getState()))
                    );

window.React = React;
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
