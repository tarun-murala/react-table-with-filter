import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initialState from './store/initialState.json';

ReactDOM.render(<App initialState={initialState}/>, document.getElementById('root'));
