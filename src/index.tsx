import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './normalize.css';
import App from './app/App';

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
