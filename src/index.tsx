import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import './utils/normalize.css';
import App from './app/App';

var mountNode = document.getElementById('app');
ReactDOM.render(<App name="pakkeliste" />, mountNode);
